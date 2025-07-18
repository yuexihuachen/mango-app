import sql from '@/connection';
import BaseClass from '@/lib/baseClass';
import type { Context } from 'hono';

class Category extends BaseClass {
  constructor() {
    super();
  }

  // "category_name"	"category_alias"	"user_id"	"create_date"	"update_date"	"order"
  async create(c: Context) {
    const body = await c.req.json();
    const {
      title,
      alias,
      order,
      createDate
    } = body;
    const user = c.get('user');
    const userData = {
      category_name: title,
      category_alias: alias,
      user_id: user.user_id,
      order,
      create_date: createDate,
      update_date: createDate
    };
    const result = await sql`
      INSERT INTO category ${sql(userData)}
      RETURNING *
    `;
    let response = super.failed('新增失败');
    if (result.count) {
      response = super.success({
        msg: '新增成功',
        data: {}
      })
    }
    return c.json(response);
  }

  async findAll(c: Context) {
    const user = c.get('user');
    const res = await sql`
      SELECT
        category_id, category_name, category_alias, "order", create_date, update_date
      FROM
        category
        ORDER BY category_id
    `;
    let response = super.failed('查询失败');
    if (res.count) {
      const result = res;
      response = super.success({
        msg: '查询成功',
        data: result
      })
    }
    return c.json(response);
  }

  async find(c: Context) {
    const user = c.get('user');
    const res = await sql`
      SELECT
        category_id, category_name, category_alias, "order", create_date, update_date
      FROM
        category
        WHERE user_id=${user.user_id}
        ORDER BY category_id
    `;
    
    let response = super.failed('查询失败');
    if (res.count) {
      const result = res;
      response = super.success({
        msg: '查询成功',
        data: result
      })
    }
    return c.json(response);
  }

  async update(c: Context) {
    const body = await c.req.json();
    const {
      id,
      title,
      alias,
      order,
      updateDate
    } = body;
    const user = c.get('user');
    const userData = {
      category_name: title,
      category_alias: alias,
      order,
      update_date: updateDate
    };

    const result = await sql`UPDATE category SET ${sql(userData)} WHERE category_id=${id} AND user_id=${user.user_id}`;
    let response = super.failed('更新失败');
    if (result.count) {
      response = super.success({
        msg: '更新成功', 
        data: result
      })
    }
    return c.json(response);
  }

  async delete(c: Context) {
    const body = await c.req.json();
    const {
      id
    } = body;
    const user = c.get('user');
    let result = {
      count: 0
    };
    if (id) {
      result = await sql`
      DELETE FROM category WHERE user_id=${user.user_id} AND category_id=${id};`
    }
    let response = super.failed('删除失败');
    if (result.count) {
      response = super.success({
        msg: '删除成功', 
        data: result
      })
    }
    return c.json(response);
  }
}

export default Category;
