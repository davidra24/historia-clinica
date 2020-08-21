import { IUser } from '../data/IUser';
import { IPerson } from '../data/IPerson';
import { IHealthCareCenter } from '../data/IHealthCareCenter';

export interface IStore {
  loading: boolean;
  isAuth: boolean;
  openMenu: boolean;
  language: string;
  openMsgError: boolean;
  openMsgSuccess: boolean;
  snackTitle: string;
  snackMsg: string;
  user?: IUser;
  person?: IPerson;
  healthCenter?: IHealthCareCenter;
}

export const defaultStore: IStore = {
  loading: false,
  isAuth: false,
  openMenu: false,
  language: '',
  openMsgError: false,
  openMsgSuccess: false,
  snackTitle: '',
  snackMsg: '',
  user: undefined,
  person: undefined,
  healthCenter: undefined,
};

export interface IAction {
  readonly type: string;
  readonly payload?: any;
}
