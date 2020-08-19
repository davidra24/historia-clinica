import { HTTP_SERVICE } from './constants';
import { decrypt, encrypt } from './cryptedUtil';

export const get = async (service: string) => {
  try {
    const response = await fetch(
      `${HTTP_SERVICE}/${service}`
    ).then((response) => response.text());
    const data = await decrypt(response);
    return data;
  } catch (error) {
    return error;
  }
};

export const post = async (service: string, body: any, token?: string) => {
  try {
    const options = {
      method: 'POST',
      body: encrypt(body),
      headers: new Headers({
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
        Authorization: token ? `Bearer ${token}` : '',
      }),
    };
    const response = await fetch(
      `${HTTP_SERVICE}/${service}`,
      options
    ).then((response) => response.text());
    console.log('response', response);
    const data = await decrypt(response);
    return data;
  } catch (error) {
    return error;
  }
};