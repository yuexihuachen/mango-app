import type { Context } from 'hono';
import sql from '@/connection'
import BaseClass from '@/lib/baseClass';
 
class Note extends BaseClass {
  constructor() {
    super();
  }

  async create(c: Context) {
    const body = await c.req.json();
    const {
      title,
      content,
      markContent,
      isPush,
      categoryId,
      tagId,
      createDate
    } = body;
    const user = c.get('user');
    const userData = {
      title,
      content,
      mark_content: markContent,
      is_push: isPush,
      user_id: user.user_id,
      category_id: categoryId,
      tag_id: tagId,
      push_date: createDate,
      update_date: createDate
    };
    
    const result = await sql`
      INSERT INTO note ${sql(userData)}
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
   const body = await c.req.json();
    const {
      id
    } = body;
    const user = c.get('user');
    const res = await sql`
      SELECT
        note_id,title,category_id,tag_id,is_push,content,mark_content
      FROM
        note
        WHERE user_id=${user.user_id} 
        AND note_id=${id}
      ORDER BY note_id
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

  async authFindAll(c: Context) {
    const body = await c.req.json();
    const {
      title,
      isPush,
      categoryId,
      tagId
    } = body;
    const user = c.get('user');
    const res = await sql`
      SELECT
        note_id,title,category_id,tag_id,is_push
      FROM
        note
        WHERE user_id=${user.user_id} 
        ${title?sql`AND title LIKE '%${title}%'`:sql``}
        ${categoryId?sql`AND category_id=${categoryId}`:sql``}
        ${tagId?sql`AND tag_id=${tagId}`:sql``}
        ${isPush?sql`AND is_push=${isPush}`:sql``}
      ORDER BY note_id
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

  async findAll(c: Context) {
    const body = await c.req.json();
    const {
      title,
      isPush,
      categoryId,
      tagId
    } = body;
    const res = await sql`
      SELECT
        note_id,title,category_id,tag_id,is_push
      FROM
        note
        WHERE is_push = 1
        ${title?sql`AND title LIKE '%${title}%'`:sql``}
        ${categoryId?sql`AND category_id=${categoryId}`:sql``}
        ${tagId?sql`AND tag_id=${tagId}`:sql``}
        ${isPush?sql`AND is_push=${isPush}`:sql``}
      ORDER BY note_id
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
      content,
      isPush,
      categoryId,
      tagId,
      markContent,
      updateDate
    } = body;
    const user = c.get('user');
    const userData = {
      title,
      content,
      is_push: isPush,
      category_id: categoryId,
      tag_id: tagId,
      update_date: updateDate,
      mark_content: markContent
    };
    
    const result = await sql`UPDATE note SET ${sql(userData)} WHERE note_id=${id} AND user_id=${user.user_id}`;
    let response = super.failed('更新失败');
    if (result.count) {
      response = super.success({
        msg: '更新成功',
        data: {}
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
      DELETE FROM note WHERE user_id=${user.user_id} AND note_id=${id};`
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

  async groupByFields(c: Context){
    const body = await c.req.json();
    const {
      fieldName
    } = body;
    const res = await sql`
      SELECT
        COUNT(*), ${sql(fieldName)}
      FROM
        note
        WHERE is_push = 1
        GROUP BY ${sql(fieldName)}
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

  static async getNoteTotalNumber() {
    const res = await sql`
       SELECT COUNT(*) as totalpage FROM note
    `;
   
    let response = { totalpage: 0 };
    if (res.count) {
      response = res
    }
    return response;
  }

  async archiveNote(c: Context) {
    const body = await c.req.json();
    const {
      pageSize, 
      pageIndex
    } = body;
    const res = await sql`
      SELECT
        note_id,
        title,
        tag_id,
        category_id,
        push_date
      FROM
        note
      ORDER BY
        push_date
      LIMIT ${pageSize} OFFSET ${pageIndex - 1}
    `;
    const pageTotal: any = await Note.getNoteTotalNumber();
    let response = super.failed('查询失败');
    if (res.count) {
      const result = res;
      response = super.success({
        msg: '查询成功',
        data: {
          result,
          total: parseInt(pageTotal[0].totalpage, 10),
          pageSize, 
          pageIndex
        }
      })
    }
    return c.json(response);
  }
}

export default Note;
