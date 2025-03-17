export async function POST() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
 
  // Transform or forward the response
  const data = await response.json();
  const transformed = { ...data, source: 'proxied-through-nextjs' };
 
  return new Response(JSON.stringify(transformed), {
    headers: { 'Content-Type': 'application/json' },
  });
}
