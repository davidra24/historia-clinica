import { createStore } from 'redux';
import { IStore, defaultStore, IAction } from './types';
import { LOADING, AUTH, OPEN_MENU, LANG } from './constants.redux';

const store: any = (state: IStore = defaultStore, action: IAction): IStore => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    case AUTH:
      return { ...state, isAuth: action.payload };
    case OPEN_MENU:
      return { ...state, openMenu: action.payload };
    case LANG:
      return { ...state, language: action.payload };
    default:
      return state;
  }
};

export default createStore(store);
