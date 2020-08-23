import { IUser } from '../data/IUser';
import { IPerson } from '../data/IPerson';
import { IHealthCareCenter } from '../data/IHealthCareCenter';
import { IEPS } from '../data/IEPS';
import { IProfessions } from '../data/IProfessions';
import { ISpecialty } from '../data/ISpecialty';

export interface IStore {
  loading: boolean;
  isAuth: boolean;
  openMenu: boolean;
  language: string;
  openMsgError: boolean;
  openMsgSuccess: boolean;
  snackTitle: string;
  snackMsg: string;
  user: IUser | any;
  person: IPerson | any;
  healthCenter: IHealthCareCenter | any;
  specialties: Array<ISpecialty>;
  listEPS: Array<IEPS>;
  listProfessions: Array<IProfessions>;
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
  user: null,
  person: null,
  healthCenter: null,
  specialties: [],
  listEPS: [],
  listProfessions: [],
};

export interface IAction {
  readonly type: string;
  readonly payload?: any;
}
