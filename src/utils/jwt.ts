// utils/jwt.ts
// import jwt from 'jsonwebtoken'


// export function generateToken(payload: object) {
//   return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '7d' })
// }


import jwt from 'jsonwebtoken'

const SECRET = process.env.JWT_SECRET as string;

export function generateToken(payload: object) {
  return jwt.sign(payload, SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string) {
  try {
    return jwt.verify(token, SECRET) as any;

  } catch (err) {
    return null;
  }
}
