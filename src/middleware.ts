// /middleware.ts
import { NextResponse, NextRequest } from "next/server";
import { verifyToken } from '@/utils/jwt'

const protectedRoutes = ['/admin', '/financial'];

export function middleware(req: NextRequest) {
  const { pathname } =req.nextUrl;

  if(!protectedRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  const token = req.cookies.get('token')?.value;

  if(!token) {
    return NextResponse.redirect(new URL('/login', req.url));

  }

  const user = verifyToken(token);
  
  if (!user) {
    return NextResponse.redirect(new URL('/login', req.url));

  }

  if(
    pathname.startsWith('/admin') && user.role !== 'admin' ||
    pathname.startsWith('/financial') && user.role !== 'financial'
  ) {
    return NextResponse.redirect(new URL('/unauthorized', req.url))
  }

  return NextResponse.next()
}



