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
  SELECT_EPS,
  SELECT_PROFESSION,
  SET_PERSON,
  SET_HEALTH_CENTER,
  SET_SPECIALTIES,
  SET_ATTENTION_CENTER,
  SET_PATH_RELOAD,
  SET_VIEW_ATTENTION_CENTER,
  SET_ONE_ATTENTION_CENTER,
  SET_SELECTION_HEALTH_PROFESSIONAL,
  DEFAULT_STATE,
  SET_TOKEN,
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
    case SET_PATH_RELOAD:
      return { ...state, reloadRoute: action.payload };
    case SET_USER:
      return { ...state, user: action.payload };
    case SET_PERSON:
      return { ...state, person: action.payload };
    case SET_HEALTH_CENTER:
      return { ...state, healthCenter: action.payload };
    case SET_SPECIALTIES:
      return { ...state, specialties: action.payload };
    case SELECT_EPS:
      return { ...state, listEPS: action.payload };
    case SELECT_PROFESSION:
      return { ...state, listProfessions: action.payload };
    case SET_ATTENTION_CENTER:
      return { ...state, listAttentionsCenter: action.payload };
    case SET_VIEW_ATTENTION_CENTER:
      return { ...state, viewAttentionCenter: action.payload };
    case SET_ONE_ATTENTION_CENTER:
      return { ...state, selectedAttentionCenter: action.payload };
    case SET_SELECTION_HEALTH_PROFESSIONAL:
      return { ...state, selectedDashProfessional: action.payload };
    case SET_TOKEN:
      return { ...state, token: action.payload };
    case DEFAULT_STATE:
      return { ...action.payload };
    default:
      return state;
  }
};

export default createStore(store);
