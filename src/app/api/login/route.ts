import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const body = await request.json();
  const { at, rt } = body;

  const cookieStore = await cookies()
  cookieStore.set('at', at);
  cookieStore.set('rt', rt)
 
  return Response.json({
    code: 0,
    msg: 'success',
    data: {}
  })
}
