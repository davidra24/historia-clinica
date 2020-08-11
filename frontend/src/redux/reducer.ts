import { createStore } from 'redux';
import { IStore, defaultStore, IAction } from './types';
import { LOADING, AUTH } from './constants.redux';

const store: any = (state: IStore = defaultStore, action: IAction): IStore => {
  switch (action.type) {
    case LOADING:
      return { ...state, loading: action.payload };
    case AUTH:
      return { ...state, isAuth: action.payload };
    default:
      return state;
  }
};

export default createStore(store);
