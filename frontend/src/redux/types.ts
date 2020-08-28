import { IUser } from '../data/IUser';
import { IPerson } from '../data/IPerson';
import { IHealthCareCenter } from '../data/IHealthCareCenter';
import { IEPS } from '../data/IEPS';
import { IProfessions } from '../data/IProfessions';
import { ISpecialty } from '../data/ISpecialty';
import { IAttentionCenter } from '../data/IAttentionCenter';
import { IViewAttentionCenter } from '../data/IViewAttentionCenter';

export interface IStore {
  loading: boolean;
  isAuth: boolean;
  openMenu: boolean;
  language: string;
  openMsgError: boolean;
  openMsgSuccess: boolean;
  snackTitle: string;
  snackMsg: string;
  reloadRoute: string;
  user: IUser | any;
  person: IPerson | any;
  selectedDashProfessional: number;
  healthCenter: IHealthCareCenter | any;
  selectedAttentionCenter: IViewAttentionCenter | any;
  viewAttentionCenter: Array<IViewAttentionCenter>;
  specialties: Array<ISpecialty>;
  listEPS: Array<IEPS>;
  listProfessions: Array<IProfessions>;
  listAttentionsCenter: Array<IAttentionCenter>;
  token: string;
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
  reloadRoute: '',
  user: null,
  person: null,
  healthCenter: null,
  selectedAttentionCenter: null,
  selectedDashProfessional: 0,
  viewAttentionCenter: [],
  specialties: [],
  listEPS: [],
  listProfessions: [],
  listAttentionsCenter: [],
  token: '',
};

export interface IAction {
  readonly type: string;
  readonly payload?: any;
}
