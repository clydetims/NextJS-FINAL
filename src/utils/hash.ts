// utils/hash.ts
import bcrypt from 'bcryptjs';

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10)
}


export async function comparedPassword(plain: string, hashed: string) {
    return bcrypt.compare(plain, hashed)
}