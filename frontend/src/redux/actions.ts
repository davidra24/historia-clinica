import {
  LOADING,
  AUTH,
  OPEN_MENU,
  LANG,
  SHOW_ERRROR_MSG,
  SHOW_SUCCESS_MSG,
  SNACK_TITLE,
  SNACK_MSG,
  SET_USER,
} from './constants.redux';
import { IUser } from '../data/IUser';

export const Loading = (payload: boolean) => ({ type: LOADING, payload });

export const auth = (payload: boolean) => ({ type: AUTH, payload });

export const setUser = (payload: IUser | any) => ({
  type: SET_USER,
  payload,
});

export const menu = (payload: boolean) => ({ type: OPEN_MENU, payload });

export const changeLang = (payload: any) => ({ type: LANG, payload });

export const setMsgErrorVisbility = (payload: boolean) => ({
  type: SHOW_ERRROR_MSG,
  payload,
});

export const setMsgSuccessVisbility = (payload: boolean) => ({
  type: SHOW_SUCCESS_MSG,
  payload,
});

export const SnackTitleMsg = (payload: any) => ({ type: SNACK_TITLE, payload });

export const SnackMsg = (payload: any) => ({ type: SNACK_MSG, payload });
