import { type Context } from 'hono';
import {
  getCookie,
  setCookie
} from 'hono/cookie';

import sql from '@/connection/index';
import BaseClass from '@/lib/baseClass';
import { getAtToken, getTokens, verifyToken, generateTransporter, setStorage, getStorage } from '@/lib/utils';
import type { Email, TUser } from '@/types/user';
import CONSTANTS from '@/lib/constants';
import { HonoBase } from 'hono/hono-base';

const {
  ALl_DAY
} = CONSTANTS

class User extends BaseClass {
  constructor() {
    super();
  }
  /**
   * 登录
   */
  async login(c: Context) {
    const body = await c.req.json();
    const {
      username
    } = body;
    let res = [], result: any = {};
    if (/^[A-Za-z0-9]+([_\.][A-Za-z0-9]+)*@([A-Za-z0-9\-]+\.)+[A-Za-z]{2,6}$/.test(username)) {
      res = await sql`
        select 
        user_id, username, password 
        from public.user 
        where user_email=${username}
    `.values();
    } else {
      res = await sql`
        select 
        user_id, username, password 
        from public.user 
        where username=${username}
    `.values();
    }    
    if (res.count) {
      result = {
        user_id: res[0][0],
        username: res[0][1],
        password: res[0][2]
      }
    }
    
    let isMatch = false;

    if (result && result.password) {
      isMatch = await Bun.password.verify(body.password, result.password);
    }
    let response = super.failed('登录失败');
    if (isMatch && res.count) {
      const tokens = await getTokens(result);
      
      setCookie(c, 'at', tokens.at, {
        expires: new Date(Date.now() + ALl_DAY)
      })
      setCookie(c, 'rt', tokens.rt, {
        expires: new Date(Date.now() + ALl_DAY * 7)
      })
      response = await super.success({
        msg: '登录成功', 
        data:tokens
      });
    }
    return c.json(response);
  }
  /**
   * 刷新access token
   */
  async refresh(c: Context) {
    const body = await c.req.json();
    const {
      rt
    } = body;
    let user: Partial<TUser> = {},
      response = super.failed(CONSTANTS.INVALID_REFRESH_TOKEN);
    try {
      user = await verifyToken(rt, Bun.env.RT_SECRET);
    } catch (error) { }

    if (user?.user_id && user?.username) {
      const token = await getAtToken({
        id: user.user_id,
        username: user.username,
      });
      response = super.success('刷新token成功', {
        at: token.at
      });
    }
    return c.json(response);
  }
  /**
   * 是否有效token
   */
  async verify(c: Context) {
    const body = await c.req.json();
    const cookieAt = getCookie(c, 'at') || body.at;
    let user: Partial<TUser> = {},
      response = super.failed(CONSTANTS.INVALID_ACCESS_TOKEN);
    try {
      user = await verifyToken(cookieAt, Bun.env.AT_SECRET);
    } catch (error) { }

    if (user?.user_id && user?.username) {
      response = super.success('有效的token信息', {
        id: user.user_id,
        username: user.username
      });
    }
    return c.json(response);
  }
  /**
   * 验证码
   */
  async sendemail(c: Context) {
    const body: Email = await c.req.json();
    const verifyCode = Math.random().toString(36).slice(2, 8).toUpperCase();
    setStorage('verifyCode', verifyCode);
    let result: any = {}
    if (Bun.env.NODE_ENV === "development") {
      result = {
        code: 0,
        msg: '邮件发送成功',
        data: verifyCode
      };
    } else {
      result = await generateTransporter({
        to: body.to,
        subject: body.subject,
        text: verifyCode
      });
    }
    return c.json(result)
  }
  /**
   * 注册
   * "username"	"password"	"user_email"	"create_date"	"update_date"
   */
  async register(c: Context) {
    const body = await c.req.json();
    const {
      code,
      password,
      confirmPasswrod,
      email,
      username,
      createDate,
    } = body;
    const verifyCode = getStorage('verifyCode');
    let response = super.failed('注册失败');
    if (verifyCode === code && password === confirmPasswrod) {
      const hash = await Bun.password.hash(password);
      const result = await sql`
        insert into public.user
          (username,password,user_email,create_date,update_date)
        values
          (${ username }, ${ hash }, ${ email }, ${ createDate }, ${ createDate })
      `;
      response = super.success({
        msg:'注册成功', 
        data: result
      })
    }
    return c.json(response);
  }
  /**
   * 重置密码
   */
  async forgetPwd(c: Context) {
    const body = await c.req.json();
    const {
      code,
      password,
      confirmPasswrod,
      email
    } = body;
    const verifyCode = getStorage('verifyCode');
    let response = super.failed('密码重置失败');
    if (verifyCode === code && password === confirmPasswrod) {
      const hash = await Bun.password.hash(password);
    
      const result = await sql`
        UPDATE public.user SET password=${hash} WHERE user_email=${email}
         RETURNING *
      `;
      if (result.count) {
        response = super.success({
          msg: '密码重置成功', 
          data: {}
        });
      }
    }
    return c.json(response);
  }

  async findAll(c: Context) {
    let response = {};
    return c.json(response);
  }

  async delete(c: Context) {
    let response = {};
    return c.json(response);
  }
}

export default User;
