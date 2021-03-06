import React, { useState, useEffect, SyntheticEvent } from 'react';
import { TextMessage } from '../lang/TextMessage';
import { useDispatch } from 'react-redux';
import { Loading, auth, setUser, setToken } from '../redux/actions';
import { FormSign } from '../components/FormSign';
import { useHistory } from 'react-router';
import { IUser } from '../data/IUser';
import { post } from '../util/httpUtil';
import { HTTP_LOGIN } from '../util/constants';
import { useInputValidator } from '../hooks/useInput';
import { useCookies } from 'react-cookie';
import { ILogin } from '../data/ILoginResponse';
import { useAlert } from '../hooks/useAlert';
import { Layout } from '../components/App/Layout';

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
          dispatch(setToken(token));
          dispatch(setUser(user));
          dispatch(auth(true));
          dispatch(Loading(false));
          resolve(true);
        } else {
          alert('login.authError-title', message, 'error');
          resolve(false);
        }
      } else {
        alert('login.authError-title', 'app.not-server', 'error');
        resolve(false);
      }
      dispatch(Loading(false));
    });

  const volver = () => {
    history.push('/signup');
  };

  return (
    <>
      <Layout title={'app.login-title'} subtitle={'app.login-subtitle'}>
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
      </Layout>
    </>
  );
};
