import jwt, { Secret, SignOptions, VerifyOptions } from 'jsonwebtoken';

export const signToken = (
  payload: string | object | Buffer,
  secret: Secret,
  options?: SignOptions | undefined
): string => {
  return jwt.sign(payload, secret, options);
};

export const verifyToken = (
  token: string,
  secret: Secret,
  options?: VerifyOptions | undefined
): string | object => {
  return jwt.verify(token, secret, options);
};
