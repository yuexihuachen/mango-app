import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';


import { bundle } from './middleware/bundle';
import { render } from './middleware/render';

const app = new Hono()

// 静态资源目录
app.use('*', serveStatic({ root: '/manifest/' }));

app.use(bundle())
app.use(render())

app.get('/*', (c) => {
  return c.render('index')
})

export default app
