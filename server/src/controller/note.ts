import type { Context } from 'hono';

import db from '@/connection/index';
import BaseClass from '@/lib/baseClass';
 
class Note extends BaseClass {
  constructor() {
    super();
  }

  async create(c: Context) {
    const body = await c.req.json();
    const query = db.query(
      `INSERT INTO notes (title, content, category, published, uid) VALUES ($title, $content, $category, $published, $uid)`
    );
    const result = query.run({
      $title: body.title,
      $content: body.content,
      $category: body.category,
      $published: body.published,
      $uid: c.get('userid')
    });
    let response = super.failed('新增失败');
    if (result?.changes) {
      response = super.success('新增成功', result)
    }
    return c.json(response);
  }

  async find(c: Context) {
    const body = await c.req.json();
    let sql =  `select id,title,content,category,published from notes`;
    let condition='',runParams: Partial<any> = {};
    if (body?.title) {
      condition += ` title LIKE '%${body.title}%' AND`;
      delete body.title
    }
    if (Object.keys(body).length) {
      for (const key in body) {
        if (key === 'token' && body[key]) {
          condition += ` uid=$uid AND`;
          runParams[`$uid`] = c.get('userid');
        } else {
          condition += ` ${key}=$${key} AND`;
          runParams[`$${key}`] = body[key];
        }
      } 
    }
    const newSql = condition.length? `${sql} WHERE ${condition.slice(0, condition.length - 4)} AND published=1`: `${sql} WHERE published=1`;
    let response = {};
    try {
      const query = db.query(newSql);
      const result = query.all(runParams);
      response = super.success('查询成功', result)
    } catch(err) {
      response = super.failed('查询失败');
    }
    return c.json(response);
  }

  async findAll(c: Context) {
    const body = await c.req.json();
    let sql =  `select id,title,content,category,published from notes`;
    let condition='',runParams: Partial<any> = {};
    if (body?.title) {
      condition += ` title LIKE '%${body.title}%' AND`;
      delete body.title
    }
    if (Object.keys(body).length) {
      for (const key in body) {
        if (key === 'token' && body[key]) {
          condition += ` uid=$uid AND`;
          runParams[`$uid`] = c.get('userid');
        } else {
          condition += ` ${key}=$${key} AND`;
          runParams[`$${key}`] = body[key];
        }
      } 
    }
    let newSql = condition.length? `${sql} WHERE ${condition.slice(0, condition.length - 4)}`: `${sql}`;
    let response = {};
    try {
      const query = db.query(newSql);
      const result = query.all(runParams);
      response = super.success('查询成功', result)
    } catch(err) {
      response = super.failed('查询失败');
    }
    return c.json(response);
  }

  async update(c: Context) {
    const { condition: bodyCondition, fields } = await c.req.json();
    const condition = {
      ...bodyCondition,
      uid: c.get('userid')
    }
    // let sql = `UPDATE notes SET name=$name, alias=$alias, orderid=$orderid WHERE id=$id`;
    let sql = `UPDATE notes SET `,
    runParams: any = {};
    for (const key in fields) {
      sql += ` ${key}=$${key},`;
      runParams[`$${key}`] = fields[key];
    }
    sql = sql.trim().slice(0, sql.trim().length - 1);
    sql += ` WHERE `
    for (const key in condition) {
      sql += ` ${key}=$${key} and`;
      runParams[`$${key}`] = condition[key];
    }
    sql = sql.trim().slice(0, sql.trim().length - 3);
    console.log(sql, runParams)
    const query = db.query(sql);
    const result = query.run(runParams);
    let response = super.failed('更新失败');
    if (result?.changes) {
      response = super.success('更新成功', result)
    }
    return c.json(response);
  }

  async delete(c: Context) {
    const body = await c.req.json();
    let sql = `DELETE FROM notes WHERE id=$id and uid=$uid`
    const query = db.query(sql);
    let result = {
      changes: 0
    };
    if (body.id) {
      result = query.run({
        $id: body.id,
        $uid: c.get('userid')
      });
    }
    let response = super.failed('删除失败');
    if (result.changes) {
      response = super.success('删除成功', result)
    }
    return c.json(response);
  }
}

export default Note;
