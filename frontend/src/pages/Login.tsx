import React, { useState, useEffect, SyntheticEvent } from 'react';
import { TextMessage } from '../lang/TextMessage';
import { useDispatch, useSelector } from 'react-redux';
import {
  Loading,
  setMsgErrorVisbility,
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
import { useInputValidator } from '../hooks/useInput';
import { useCookies } from 'react-cookie';
import { ILogin } from '../data/ILoginResponse';
import { useAlert } from '../hooks/useAlert';

export const Login = () => {
  const inputDocument = useInputValidator('');
  const inputPassword = useInputValidator('');
  const [cookie, setCookie, removeCookie] = useCookies(['token']);
  const [valide, setValide] = useState(false);

  const dispatch = useDispatch();
  const alert = useAlert(dispatch);
  const history = useHistory();

  const login = async (event: SyntheticEvent) => {
    event.preventDefault();
    const logged = await loginPromise();
    if (validate()) {
      if (logged) {
        history.push('/');
      }
    }
  };
  const validate = (): boolean => {
    const inputDocumentValidator =
      inputDocument.value !== null && inputDocument.value !== '';
    const inputPasswordValidator =
      inputPassword.value !== null && inputPassword.value !== '';

    inputDocument.setValidator(inputDocumentValidator);
    inputPassword.setValidator(inputPasswordValidator);

    const finalValidator = inputDocumentValidator && inputPasswordValidator;

    setValide(finalValidator);
    return finalValidator;
  };
  useEffect(() => {}, [valide]);

  const loginPromise = async (): Promise<boolean> =>
    new Promise(async (resolve) => {
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
          alert('login.authError-title', message, 'error');
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
