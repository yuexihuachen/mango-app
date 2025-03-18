export async function POST(req: Request) {
  // Parse the request body
  const body = await req.json();

  const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
        "Content-Type": "application/json"
      }
  });

  return new Response(JSON.stringify(res), {
    headers: { 'Content-Type': 'application/json' },
  });
}
