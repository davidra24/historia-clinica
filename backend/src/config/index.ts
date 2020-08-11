export default {
  jwtSecret: process.env.JWT_SECRET || 'SECRET TOKEN CRYPTED',
  DB: `${process.env.DATABASE_URL}?ssl=true`,
};
