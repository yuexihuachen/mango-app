
type User = {
  username: string;
  password: string;
}

function resolveAfter2Seconds(args: User) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        args
      });
    }, 2000);
  });
}

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;

  // const response = await fetch(`${process.env.API_URL}/login`, {
  //   method: 'POST',
  //   body: JSON.stringify({
  //     username,
  //     password
  //   }),
  //   headers: { 'Content-Type': 'application/json' }
  // })
  const data = await resolveAfter2Seconds({
    username, 
    password
  }) as User;
  // Transform or forward the response 
  // const data = await response.json();


  const transformed = { 
    ...data, 
    params : {
      body
    },
    id: 1
  };
 
  return new Response(JSON.stringify(transformed), {
    headers: { 
      'Content-Type': 'application/json'
     },
  });
}
