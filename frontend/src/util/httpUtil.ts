import { HTTP_SERVICE } from './constants';
import { decrypt, encrypt } from './cryptedUtil';
import { IResponse } from '../data/IResponse';

export const get = async <T>(
  service: string,
  token?: string
): Promise<IResponse<T>> => {
  try {
    const options = {
      method: 'GET',
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
    const data = await decrypt(response);
    return data;
  } catch (error) {
    return error;
  }
};

export const getOneOrMany = async <T>(
  service: string,
  id: any,
  token?: string,
  secondParameter = ''
): Promise<IResponse<T>> => {
  try {
    const options = {
      method: 'GET',
      headers: new Headers({
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
        Authorization: token ? `Bearer ${token}` : '',
      }),
    };
    const response = await fetch(
      `${HTTP_SERVICE}/${service}/${id}/${secondParameter}`,
      options
    ).then((response) => response.text());
    const data = await decrypt(response);
    return data;
  } catch (error) {
    return error;
  }
};

export const post = async <T>(
  service: string,
  body: any,
  token?: string,
  secondParameter = ''
): Promise<IResponse<T>> => {
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
      `${HTTP_SERVICE}/${service}/${secondParameter}`,
      options
    ).then((response) => response.text());
    const data = await decrypt(response);
    return data;
  } catch (error) {
    console.log('error??', error);
    return error;
  }
};

export const put = async <T>(
  service: string,
  id: any,
  body: any,
  token?: string,
  secondParameter = ''
): Promise<IResponse<T>> => {
  try {
    const options = {
      method: 'PUT',
      body: encrypt(body),
      headers: new Headers({
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
        Authorization: token ? `Bearer ${token}` : '',
      }),
    };
    const response = await fetch(
      `${HTTP_SERVICE}/${service}/${id}/${secondParameter}`,
      options
    ).then((response) => response.text());
    const data = await decrypt(response);
    return data;
  } catch (error) {
    console.log('error??', error);
    return error;
  }
};

export const deleteRecord = async <T>(
  service: string,
  id: any,
  token?: string
): Promise<IResponse<T>> => {
  try {
    const options = {
      method: 'DELETE',
      headers: new Headers({
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': '*',
        Authorization: token ? `Bearer ${token}` : '',
      }),
    };
    const response = await fetch(
      `${HTTP_SERVICE}/${service}/${id}`,
      options
    ).then((response) => response.text());
    const data = await decrypt(response);
    return data;
  } catch (error) {
    console.log('error??', error);
    return error;
  }
};
