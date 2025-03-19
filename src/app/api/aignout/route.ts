import { cookies } from 'next/headers';

export async function GET() {
    const cookieStore = await cookies();
    cookieStore.delete('at');
    cookieStore.delete('rt');

    return new Response(JSON.stringify({
        code: 0,
        msg: 'success',
        data: {}
    }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  }