import cryptoJS from 'crypto-js';
import { SECRET_PASS } from './constants';

export const encryptString = (data: string) => {
  return cryptoJS.AES.encrypt(data, SECRET_PASS).toString();
};
export const encrypt = (data: object) => {
  return cryptoJS.AES.encrypt(JSON.stringify(data), SECRET_PASS).toString();
};

export const decrypt = async (data: string) => {
  const result = cryptoJS.AES.decrypt(data, SECRET_PASS).toString(
    cryptoJS.enc.Utf8
  );
  return await JSON.parse(result);
};
