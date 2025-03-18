export async function POST(req: Request) {
  // Parse the request body
  const body = await req.json();

  // `${process}` https://jsonplaceholder.typicode.com/posts
  const res = await fetch(`${process.env.API_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        "Content-Type": "application/json"
      }
  });

  return new Response(JSON.stringify({
    ...res,
    ...body
  }), {
    headers: { 'Content-Type': 'application/json' },
  });
}
