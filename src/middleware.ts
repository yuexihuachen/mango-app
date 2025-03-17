import { NextRequest, NextResponse } from 'next/server'
import { cookies } from 'next/headers'
 
// 公共路由和受保护路由
const protectedRoutes = ['/note','/category']
// const publicRoutes = ['/login', '/signup', '/']
 
export default async function middleware(req: NextRequest) {
  const newHeaders = new Headers(req.headers);
  
  // 检查路由是公共的还是受保护的
  const path = req.nextUrl.pathname
  const isProtectedRoute = protectedRoutes.includes(path)
  // const isPublicRoute = publicRoutes.includes(path)
 
  // 3. Decrypt the session from the cookie
  const cookie = (await cookies()).get('at')?.value

  newHeaders.set('x-middleware-auth', cookie as string);
 
  // 4. Redirect to /login if the user is not authenticated
  if (isProtectedRoute && !cookie) {
    return NextResponse.redirect(new URL('/signin', req.nextUrl))
  }
 
  // 5. Redirect to /dashboard if the user is authenticated
  // if (
  //   isPublicRoute &&
  //   cookie &&
  //   !req.nextUrl.pathname.startsWith('/dashboard')
  // ) {
  //   return NextResponse.redirect(new URL('/dashboard', req.nextUrl))
  // }
 
  return NextResponse.next()
}
 
// Routes Middleware should not run on
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}