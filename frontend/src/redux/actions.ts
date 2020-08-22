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
  SELECT_EPS,
  SELECT_PROFESSION,
  SET_PERSON,
  SET_HEALTH_CENTER,
} from './constants.redux';
import { IUser } from '../data/IUser';
import { IPerson } from '../data/IPerson';
import { IHealthCareCenter } from '../data/IHealthCareCenter';

export const Loading = (payload: boolean) => ({ type: LOADING, payload });

export const auth = (payload: boolean) => ({ type: AUTH, payload });

export const setUser = (payload: IUser | any) => ({
  type: SET_USER,
  payload,
});

export const setPerson = (payload: IPerson) => ({
  type: SET_PERSON,
  payload,
});
export const setHealthCenter = (payload: IHealthCareCenter) => ({
  type: SET_HEALTH_CENTER,
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

export const selectEPS = (payload: any) => ({ type: SELECT_EPS, payload });

export const selectProfessions = (payload: any) => ({
  type: SELECT_PROFESSION,
  payload,
});
