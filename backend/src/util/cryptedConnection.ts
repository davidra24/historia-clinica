import { Response, Request } from 'express';
import cryptoJS from 'crypto-js';
import { SECRET_PASS } from './constants';

export const cryptedResponse = async (
  res: Response,
  status: number,
  responseToSend: object
) => {
  const response = cryptoJS.AES.encrypt(
    JSON.stringify(responseToSend),
    SECRET_PASS
  ).toString();
  res.setHeader('content-type', 'text/plain');
  res.status(status).send(response);
};

export const decryptRequest = async (req: Request) => {
  const result = cryptoJS.AES.decrypt(req.body, SECRET_PASS).toString(
    cryptoJS.enc.Utf8
  );
  return await JSON.parse(result);
};
