import { LOADING, AUTH, OPEN_MENU, LANG } from './constants.redux';

export const Loading = (payload: boolean) => ({ type: LOADING, payload });

export const auth = (payload: boolean) => ({ type: AUTH, payload });

export const menu = (payload: boolean) => ({ type: OPEN_MENU, payload });

export const changeLang = (payload: any) => ({ type: LANG, payload });
