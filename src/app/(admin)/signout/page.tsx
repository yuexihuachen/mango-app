import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

export default async function Page() {
  const cookieStore = await cookies()
  cookieStore.delete('at')
  cookieStore.delete('rt')
  return redirect('/signin');
}