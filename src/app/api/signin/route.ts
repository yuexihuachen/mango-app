export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json();

  const result = await fetch(`${process.env.API_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return new Response(JSON.stringify(result), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
