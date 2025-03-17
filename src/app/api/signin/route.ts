export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password,
      userId: 1,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
  // `${process.env.API_URL}/login`

  
  // Transform or forward the response 
  const data = await response.json();
  const transformed = { 
    ...data, 
    url: `${process.env.API_URL}/login`,
    params : {
      body
    }
  };
 
  return new Response(JSON.stringify(transformed), {
    headers: { 'Content-Type': 'application/json' },
  });
}
