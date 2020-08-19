export default {
  jwtSecret: process.env.JWT_SECRET || 'r5Iw6SbVlMBXHxyNtQk9WehmaO1CopEi',
  DB: `${process.env.DATABASE_URL}?ssl=true`,
};
