import { Hono, Context } from 'hono';
import { handle } from 'hono/vercel';

export const runtime = 'nodejs'

const app = new Hono().basePath('/api')

app.get('/hello', (c: Context) => {
  return c.json({
    message: 'Hello Next.js!'
  })
})

export const GET = handle(app)
export const POST = handle(app)