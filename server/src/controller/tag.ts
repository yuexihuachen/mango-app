import sql from '@/connection';
import BaseClass from '@/lib/baseClass';
import type { Context } from 'hono';

class Tag extends BaseClass {
  constructor() {
    super();
  }

  // "tag_id"	"tag_name"	"user_id"	"create_date"	"update_date"
  async create(c: Context) {
    const body = await c.req.json();
    const {
      name,
      createDate
    } = body;
    const user = c.get('user');
    const userData = {
      tag_name: name,
      user_id: user.user_id,
      create_date: createDate,
      update_date: createDate
    };
    const result = await sql`
      INSERT INTO tag ${sql(userData)}
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

  async find(c: Context) {
    const user = c.get('user');
    const res = await sql`
      SELECT
        tag_id, tag_name, create_date
      FROM
        tag
        WHERE user_id=${user.user_id}
        ORDER BY tag_id
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
      name,
      updateDate
    } = body;
    const user = c.get('user');
    const userData = {
      tag_name: name,
      update_date: updateDate
    };

    const result = await sql`UPDATE tag SET ${sql(userData)} WHERE tag_id=${id} AND user_id=${user.user_id}`;
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
      DELETE FROM tag WHERE user_id=${user.user_id} AND tag_id=${id};`
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

export default Tag;
