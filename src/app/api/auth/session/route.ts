// // /api/auth/session/route.ts
// import { verifyToken } from "@/utils/jwt";
// import { NextResponse, NextRequest } from "next/server";

// export async function GET(req: NextRequest) {
//   const token = req.headers.get('authorization')?.replace('Bearer ', '');

//   if(!token) {
//     return NextResponse.json({ user:null }, { status: 401 });
//   }

//   const user = verifyToken(token);

//   if(!user) {
//     return NextResponse.json({ user:null }, { status:401 });
//   }
//   return NextResponse.json({ user })
// }

import { verifyToken } from "@/utils/jwt";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const token = req.cookies.get('token')?.value;

  if(!token){
    return NextResponse.json({ user:null}, { status: 401 });
  }

  const user = verifyToken(token);
  if (!user){
    return NextResponse.json({ user: null }, { status: 401 });

  }

  return NextResponse.json({ user });
}
