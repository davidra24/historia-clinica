export interface IStore {
  loading: boolean;
  isAuth: boolean;
  openMenu: boolean;
  user: string;
}

export interface IAction {
  readonly type: string;
  readonly payload?: any;
}

export const defaultStore: IStore = {
  loading: false,
  isAuth: false,
  openMenu: false,
  user: '',
};
