import { sign, verify } from 'hono/jwt';
import * as nodemailer from "nodemailer";
import { Email, TUser } from '@/types/index';

const storage = new Map();

const getTokens = async (user: any) => {
  // at Token expires 6 hours
  let atExpires: number = Math.floor(Date.now() / 1000) + 60 * 60 * 6;

  // rt Token expires 7 days
  let rtExpires: number = Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 7;

  if (Bun.env.NODE_ENV === "development") {
    atExpires = Math.floor(Date.now() / 1000) + 60 * 5; // 5分钟
    rtExpires = Math.floor(Date.now() / 1000) + 60 * 25; // 25分钟
  }

  const payload = { id: user.user_id, username: user.username };

  const at: string = await sign(
    {
      ...payload,
      exp: atExpires,
    },
    Bun.env.AT_SECRET as string
  );

  const rt: string = await sign(
    {
      ...payload,
      exp: rtExpires,
    },
    Bun.env.RT_SECRET as string
  );



  return {
    at,
    rt,
  };
};

const getAtToken = async (user: any) => {
  // at Token expires 6 hours
  let atExpires: number = Math.floor(Date.now() / 1000) + 60 * 60 * 6;
  // const atExpires: number =  Math.floor(Date.now() / 1000) + 60 * 1;

  if (Bun.env.NODE_ENV === "development") {
    atExpires = Math.floor(Date.now() / 1000) + 60 * 1;
  }

  const payload = { id: user.user_id, username: user.username };

  const at: string = await sign(
    {
      ...payload,
      exp: atExpires,
    },
    Bun.env.AT_SECRET as string
  );

  return {
    at
  };
};

const verifyToken =  async (token: string, secret: string) => {
  const user = await verify(token, secret) as TUser;
  return user;
}

const generateTransporter = (params: Email): any => {
  return new Promise((resolve, reject) => {
    const configOptions = {
      host: 'smtp.qq.com',
      port: 587,
      secure: false,
      auth: {
        user: 'hello.min@foxmail.com',
        pass: 'khcjkyxzdqprbbda'
      },
    };
    const transporter = nodemailer.createTransport(configOptions);
    const failed = {
      code: -1,
      msg: '邮箱验证失败'
    };
    transporter.verify(function (error: any, success: any) {
      if (error) {
        reject(failed);
      }
    });
    transporter.sendMail({
      from:'hello.min@foxmail.com',
      to: params.to,
      subject: params.subject,
      text: params.text
    }, function(err: any) {
      if (err) {
        reject(failed);
      }
      const result = {
        code: 0,
        msg: '邮件发送成功'
      };
      resolve(result);
    })
  })
};

const setStorage = (key: string, value: string) => {
  storage.set(key, value);
}

const getStorage = (key: string) => {
  return storage.get(key)
}

export {
    getTokens,
    verifyToken,
    getAtToken,
    generateTransporter,
    setStorage,
    getStorage
}
