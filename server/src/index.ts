import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
// 跨域资源共享
import { cors } from 'hono/cors';
// 跨站攻击
import { csrf } from 'hono/csrf';
import { prettyJSON } from 'hono/pretty-json';
import { requestId } from 'hono/request-id';
// 设置安全请求头
import { secureHeaders } from 'hono/secure-headers';
import { contextStorage } from 'hono/context-storage'

import { render } from './middleware/render';
import { timeMonitoring } from './middleware/time-monitoring';
import sql from './connection';

const app = new Hono();

//时间戳和env
app.use(timeMonitoring())
// 上下文的存储
app.use(contextStorage())
// 跨资源贡献
app.use('*', cors({
  origin: 'https://kongzi.eu.org',
  allowMethods: ['POST', 'GET'],
}));
// request id
app.use('*', requestId())
// csrf
app.use(csrf({
  origin: ['kongzi.eu.com'],
}))
app.use(prettyJSON());
app.use(secureHeaders());

// 静态资源目录
app.use('*', serveStatic({ root: '/manifest/' }));

app.use(render())

app.get('/hello', async (c) => {
  let rows = {hello:'world'}
  try {
    rows = await sql`SELECT * FROM public.user`.values();
  } catch(error) {
    console.log(error)
  }
  
  return c.json(rows)
})

app.get('/*', (c) => {
  return c.render('index');
})

export default app
