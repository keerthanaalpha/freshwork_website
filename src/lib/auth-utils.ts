// src/lib/auth-utils.ts
import bcrypt from "bcryptjs";

export function hashPassword(password: string) {
  return bcrypt.hash(password, 12);
}

export function verifyPassword(password: string, hashed: string) {
  return bcrypt.compare(password, hashed);
}
