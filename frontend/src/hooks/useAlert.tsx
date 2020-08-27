import { useDispatch } from 'react-redux';
import {
  SnackTitleMsg,
  SnackMsg,
  setMsgSuccessVisbility,
  setMsgErrorVisbility,
} from '../redux/actions';
import { Dispatch, useEffect } from 'react';

enum typeAlert {
  success = 'success',
  error = 'error',
}

export const useAlert = (dispatch: Dispatch<any>) => (
  title: string,
  message: string,
  type: 'success' | 'error'
) => {
  dispatch(SnackTitleMsg(title));
  dispatch(SnackMsg(message));
  switch (type) {
    case typeAlert.success:
      dispatch(setMsgSuccessVisbility(true));
      break;
    case typeAlert.error:
      dispatch(setMsgErrorVisbility(true));
      break;
    default:
      break;
  }
};
