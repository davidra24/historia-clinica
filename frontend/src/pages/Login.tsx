import React from 'react';
import { TextMessage } from '../lang/TextMessage';
import { useDispatch, useSelector } from 'react-redux';
import {
  Loading,
  setMsgErrorVisbility,
  setMsgSuccessVisbility,
  SnackTitleMsg,
  SnackMsg,
  auth,
  setUser,
} from '../redux/actions';
import { FormSign } from '../components/FormSign';
import { useHistory } from 'react-router';
import { IUser } from '../data/IUser';
import { post } from '../util/httpUtil';
import { HTTP_LOGIN } from '../util/constants';
import { SnackBarAlert } from '../util/Alert';
import { useInputValue } from '../hooks/useInput';
import { useCookies } from 'react-cookie';
import { IStore } from '../redux/types';

export const Login = () => {
  const openMsgError = useSelector((state: IStore) => state.openMsgError);
  const openMsgSuccess = useSelector((state: IStore) => state.openMsgSuccess);
  const snackTitle = useSelector((state: IStore) => state.snackTitle);
  const snackMsg = useSelector((state: IStore) => state.snackMsg);

  const inputDocument = useInputValue('');
  const inputPassword = useInputValue('');
  const [cookie, setCookie, removeCookie] = useCookies(['token']);

  const dispatch = useDispatch();
  const history = useHistory();

  const login = async () => {
    const document = inputDocument.value;
    const password = inputPassword.value;
    const user: IUser = { document, password };
    dispatch(Loading(true));
    const response = await post(HTTP_LOGIN, user);
    if (response) {
      const { message } = response;
      if (response.ok) {
        const { token, user } = response.data;
        setCookie('token', token, { path: '/' });
        dispatch(Loading(false));
        dispatch(auth(true));
        dispatch(setUser(user));
        history.push('/');
      } else {
        dispatch(SnackTitleMsg('login.authError-title'));
        dispatch(SnackMsg(message));
        dispatch(setMsgErrorVisbility(true));
      }
    } else {
      dispatch(SnackTitleMsg('login.authError-title'));
      dispatch(SnackMsg('app.not-server'));
      dispatch(setMsgErrorVisbility(true));
    }
    dispatch(Loading(false));
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setMsgSuccessVisbility(false));
    dispatch(setMsgErrorVisbility(false));
  };

  const volver = () => {
    history.push('/signup');
  };

  return (
    <>
      <SnackBarAlert
        open={openMsgError}
        autoHideDuration={6000}
        onClose={handleClose}
        severity='error'
        title={TextMessage(snackTitle)}
        message={{
          children: TextMessage(snackMsg),
        }}
      />
      <SnackBarAlert
        open={openMsgSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
        severity='success'
        title={TextMessage(snackTitle)}
        message={{
          children: TextMessage(snackMsg),
        }}
      />
      <div className='flex justify-center pt-10 w-12/12 h-screen'>
        <FormSign
          title={TextMessage('login.title')}
          leftButton={{
            onClick: volver,
            label: TextMessage('login.signup'),
            className: 'p-button-success',
          }}
          onSubmit={login}
          rightButton={{ label: TextMessage('login.signin') }}
          inputDocument={inputDocument}
          inputPassword={inputPassword}
        />
      </div>
    </>
  );
};
