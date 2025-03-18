export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  const response = await fetch(`${process.env.API_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    }),
    headers: { 'Content-Type': 'application/json' }
  })
  // Transform or forward the response 
  const data = await response.json();
  const transformed = { 
    ...data, 
    params : {
      ...body
    },
    id: 1
  };
 
  return new Response(JSON.stringify(transformed), {
    headers: { 
      'Content-Type': 'application/json'
     },
  });
}
