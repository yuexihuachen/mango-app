export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;
  // const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     username,
  //     password,
  //     userId: 1,
  //   }),
  //   headers: {
  //     'Content-type': 'application/json; charset=UTF-8',
  //   },
  // })
  // `${process.env.API_URL}/login`
  let data, error;
  try {
    const response = await fetch(`${process.env.API_URL}/login`, {
      method: 'POST',
      body: JSON.stringify({
        username,
        password
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
    
    // Transform or forward the response 
    data = await response.json();
  } catch(err) {
    error = err
  }


  const transformed = { 
    ...data, 
    params : {
      body
    },
    error
  };
 
  return new Response(JSON.stringify(transformed), {
    headers: { 'Content-Type': 'application/json' },
  });
}
