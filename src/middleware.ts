// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const isLoggedIn = request.cookies.get('token') // or session key
  const isDashboard = request.nextUrl.pathname.startsWith('/dashboard')

  if (isDashboard && !isLoggedIn) {
    return NextResponse.redirect(new URL('/auth/login', request.url))
  }

  return NextResponse.next()
}
