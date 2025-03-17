import axios from "axios";

export async function POST(request: Request) {
  const body = await request.json();
  const { username, password } = body;
  const response = await axios.post(`${process.env.API_URL}/login`, {
    username,
    password
  });

  const transformed = { 
    ...response, 
    params : {
      body
    }
  };
 
  return new Response(JSON.stringify(transformed), {
    headers: { 'Content-Type': 'application/json' },
  });
}
