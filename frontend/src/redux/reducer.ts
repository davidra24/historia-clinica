import { createStore } from 'redux';
import { IStore, defaultStore, IAction } from './types';
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
    case SHOW_ERRROR_MSG:
      return { ...state, openMsgError: action.payload };
    case SHOW_SUCCESS_MSG:
      return { ...state, openMsgSuccess: action.payload };
    case SNACK_TITLE:
      return { ...state, snackTitle: action.payload };
    case SNACK_MSG:
      return { ...state, snackMsg: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default createStore(store);
