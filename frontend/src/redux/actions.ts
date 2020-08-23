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
  SET_SPECIALTIES,
  SET_ATTENTION_CENTER,
  SET_PATH_RELOAD,
} from './constants.redux';
import { IUser } from '../data/IUser';
import { IPerson } from '../data/IPerson';
import { IHealthCareCenter } from '../data/IHealthCareCenter';
import { ISpecialty } from '../data/ISpecialty';
import { IEPS } from '../data/IEPS';
import { IProfessions } from '../data/IProfessions';
import { IAttentionCenter } from '../data/IAttentionCenter';

export const Loading = (payload: boolean) => ({ type: LOADING, payload });

export const auth = (payload: boolean) => ({ type: AUTH, payload });

export const setUser = (payload: IUser | any) => ({
  type: SET_USER,
  payload,
});

export const setPerson = (payload: IPerson | any) => ({
  type: SET_PERSON,
  payload,
});
export const setHealthCenter = (payload: IHealthCareCenter | any) => ({
  type: SET_HEALTH_CENTER,
  payload,
});

export const setSpecialties = (payload: Array<ISpecialty>) => ({
  type: SET_SPECIALTIES,
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

export const setReloadPath = (payload: string) => ({
  type: SET_PATH_RELOAD,
  payload,
});

export const SnackTitleMsg = (payload: any) => ({ type: SNACK_TITLE, payload });

export const SnackMsg = (payload: any) => ({ type: SNACK_MSG, payload });

export const selectEPS = (payload: Array<IEPS>) => ({
  type: SELECT_EPS,
  payload,
});

export const selectProfessions = (payload: Array<IProfessions>) => ({
  type: SELECT_PROFESSION,
  payload,
});

export const setCenterAttenttion = (payload: Array<IAttentionCenter>) => ({
  type: SET_ATTENTION_CENTER,
  payload,
});
