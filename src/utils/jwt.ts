import jwt, { JwtPayload } from 'jsonwebtoken';

// Check once at module load time that SECRET is defined
const SECRET = process.env.JWT_SECRET;
if (!SECRET) {
  throw new Error('JWT_SECRET environment variable is not set');
}

interface JwtPayloadType extends JwtPayload {
  [key: string]: unknown;
}

export function generateToken(payload: JwtPayloadType): string {
  if (!SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }
  return jwt.sign(payload, SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): JwtPayloadType | null {
  if (!SECRET) {
    throw new Error('JWT_SECRET is not defined');
  }
  try {
    return jwt.verify(token, SECRET) as JwtPayloadType;
  } catch {
    return null;
  }
}
