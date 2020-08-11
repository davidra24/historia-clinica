import { LOADING, AUTH } from './constants.redux';

export const Loading = (payload: boolean) => ({ type: LOADING, payload });

export const auth = (payload: boolean) => ({ type: AUTH, payload });
