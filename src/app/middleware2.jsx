import { useSession } from "next-auth/react";

export function middleware(request) {
  const { session } = useSession();
  // const currentUser = request.cookies.get('currentUser')?.value
  const currentUser = session;
  if (currentUser && request.nextUrl.pathname.startsWith('/inicio')) {
    return Response.redirect(new URL('/', request.url))
  }
  if (currentUser && request.nextUrl.pathname.startsWith('/servicios')) {
    return Response.redirect(new URL('/servicios', request.url))
  }
 

 
  if (!currentUser && !request.nextUrl.pathname.startsWith('/login')) {
    return Response.redirect(new URL('/login', request.url))
  }
}
 
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
}