



import { NextResponse, NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const secret = new TextEncoder().encode(process.env.JWT_SECRET);

// Define allowed routes per role
const roleRoutes: Record<string, string[]> = {
  guest: ['/', '/about', '/contact'],
  financial: ['/financial', '/financial/*'],
  admin: ['/admin'],
};

interface UserPayload {
  user_id: string;
  email: string;
  role: string;
  iat?: number;
  exp?: number;
}


// Public paths that should be skipped by middleware
const publicPaths = ['/login', '/unauthorized', '/api', '/_next', '/favicon.ico'];

  async function verifyToken(token: string): Promise<UserPayload | null> {
    try {
      const { payload } = await jwtVerify(token, secret);
      console.log('verify token success');

      // Assert unknown first
      const user = payload as unknown as UserPayload;

      // Optional: verify required fields exist
      if (
        typeof user.user_id === 'string' &&
        typeof user.email === 'string' &&
        typeof user.role === 'string'
      ) {
        return user;
      }

      // If validation fails, treat as null
      return null;

    } catch (err) {
      console.log('verify token failed', err);
      return null;
    }
  }


export async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;
  console.log('Request Path:', pathname);

  // ✅ Skip middleware for public paths (to avoid infinite redirects)
  if (
    publicPaths.some((publicPath) =>
      pathname === publicPath || pathname.startsWith(`${publicPath}/`)
    )
  ) {
    return NextResponse.next();
  }

  const token = req.cookies.get('token')?.value;
  console.log('Middleware token:', token);

  // ❌ No token → treat as guest
  if (!token) {
    console.log('No valid token');

    if (roleRoutes.guest.some((route) => pathname.startsWith(route))) {
      return NextResponse.next();
    }

    // 🚫 Guest trying to access protected route
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // ✅ Token exists → verify
  const user: UserPayload | null = await verifyToken(token);

  if (!user) {
    if (roleRoutes.guest.some((route) => pathname.startsWith(route))) {
      return NextResponse.next();
    }

    console.log('Unverified user:', user);
    return NextResponse.redirect(new URL('/login', req.url));
  }

  // ✅ Check if role is allowed
  const allowedRoutes = roleRoutes[user.role] || [];

  if (
    allowedRoutes.some((route) =>
      pathname === route || pathname.startsWith(`${route}/`)
    )
  ) {
    return NextResponse.next();
  }

  if(user.role === 'financial') return NextResponse.redirect(new URL('/financial', req.url));


  // 🚫 Role mismatch
  console.log('Unauthorized user role:', user.role);
  return NextResponse.redirect(new URL('/unauthorized', req.url));
}
