export async function POST(req: Request) {
  // Parse the request body
  const body = await req.json();

  const request = new Request('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(body),
  });

  const res = await fetch(request);

  return Response.json({ 
    response: res,
    body
   });
}
