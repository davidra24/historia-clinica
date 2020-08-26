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
import { ILogin } from '../data/ILoginResponse';

export const Login = () => {
  const inputDocument = useInputValue('');
  const inputPassword = useInputValue('');
  const [cookie, setCookie, removeCookie] = useCookies(['token']);

  const dispatch = useDispatch();
  const history = useHistory();

  const login = async () => {
    const logged = await loginPromise();
    if (logged) {
      history.push('/');
    }
  };

  const loginPromise = async () =>
    new Promise(async (resolve, reject) => {
      const document = inputDocument.value;
      const password = inputPassword.value;
      const user: IUser = { document, password };
      dispatch(Loading(true));
      const response = await post<ILogin>(HTTP_LOGIN, user);
      if (response) {
        const { message } = response;
        if (response.ok) {
          const { token, user } = response.data;
          setCookie('token', token, { path: '/' });
          dispatch(setUser(user));
          dispatch(auth(true));
          dispatch(Loading(false));
          resolve(true);
        } else {
          dispatch(SnackTitleMsg('login.authError-title'));
          dispatch(SnackMsg(message));
          dispatch(setMsgErrorVisbility(true));
          resolve(false);
        }
      } else {
        dispatch(SnackTitleMsg('login.authError-title'));
        dispatch(SnackMsg('app.not-server'));
        dispatch(setMsgErrorVisbility(true));
        resolve(false);
      }
      dispatch(Loading(false));
    });

  const volver = () => {
    history.push('/signup');
  };

  return (
    <>
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
