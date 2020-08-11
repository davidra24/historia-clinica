import { genSaltSync } from 'bcrypt';

export const SALT = genSaltSync(10);
export const SECRET_PASS = process.env.SECRET_PASS || 'SECRET';
