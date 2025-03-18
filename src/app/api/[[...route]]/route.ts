import { Hono, Context } from 'hono';
import { handle } from 'hono/vercel';

export const runtime = 'edge'

const app = new Hono().basePath('/api')

app.get('/hello', (c: Context) => {
  const body = c.req.json();
  return c.json({
    message: 'Hello Next.js!',
    body
  })
})

export const GET = handle(app)
export const POST = handle(app)