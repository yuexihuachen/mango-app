import sql from '@/connection';
import type { Id } from '@/types/category';
import BaseClass from '@/lib/baseClass';
import type { Context } from 'hono';

class Category extends BaseClass {
  constructor() {
    super();
  }

  async create(c: Context) {
    const body = await c.req.json();
    const query = await sql`INSERT INTO categories (name, alias, orderid, uid) VALUES ($name, $alias, $orderid, $uid)`.values();
    const result = query.run({
      $name: body.name,
      $alias: body.alias,
      $orderid: body.orderid,
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
    let sql =  `select id,name,alias,orderid from categories`;
    let runParams: Partial<Id> = {};
    if (body?.id) {
      sql += ` where id=$id`;
      runParams['$id'] = body.id;
    }
    if (body?.token) {
      if (sql.includes('where')) {
        sql += ` and uid=$uid`;
        runParams['$uid'] = c.get('userid');
      } else {
        sql += ` where uid=$uid`;
        runParams['$uid'] = c.get('userid');
      }
    }
    const query = db.query(sql);
    const result = query.all(runParams);
    let response = super.failed('查询失败');
    if (Array.isArray(result)) {
      response = super.success('查询成功', result)
    }
    return c.json(response);
  }

  async update(c: Context) {
    const { condition: bodyCondition, fields } = await c.req.json();
    const condition = {
      ...bodyCondition,
      uid: c.get('userid')
    }
    // let sql = `UPDATE categories SET name=$name, alias=$alias, orderid=$orderid WHERE id=$id`;
    let sql = `UPDATE categories SET `,
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
    let sql = `DELETE FROM categories WHERE id=$id and uid=$uid`
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

export default Category;
