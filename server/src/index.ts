import { Hono } from 'hono';
import { serveStatic } from 'hono/bun';
import * as nunjucks from 'nunjucks';

import { bundle } from './middleware/bundle';
import indexHtml from "./views/index.html" with { type: "text" };

const app = new Hono()

// 静态资源目录
app.use('*', serveStatic({ root: '/manifest/' }));

app.use(bundle())

app.get('/*', (c) => {
  const manifestFiles = c.get('manifest')
  const html = nunjucks.renderString(indexHtml, {
    cssArray: manifestFiles.css,
    jsArray: manifestFiles.js
  });

  return c.html(html);
})

export default app
