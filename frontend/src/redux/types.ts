export interface IStore {
  loading: boolean;
  isAuth: boolean;
  openMenu: boolean;
  user: string;
  language: string;
}

export const defaultStore: IStore = {
  loading: false,
  isAuth: true,
  openMenu: false,
  user: '',
  language: '',
};

export interface IAction {
  readonly type: string;
  readonly payload?: any;
}
