export async function POST(request: Request) {
  // Parse the request body
  const body = await request.json();

  const response = await fetch(`${process.env.API_URL}/login`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    return new Response(JSON.stringify({
        code: -1,
        msg:'proxy api request failed',
        data: {}
    }), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  }

  const result = await response.json();

  return new Response(JSON.stringify(result), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
