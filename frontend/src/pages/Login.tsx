import React, { useState } from 'react';
import { TextMessage } from '../lang/TextMessage';
import { useDispatch } from 'react-redux';
import { Loading } from '../redux/actions';
import { FormSign } from '../components/FormSign';
import { useHistory } from 'react-router';
import { IUser } from '../data/IUser';
import { post } from '../util/httpUtil';
import { HTTP_LOGIN } from '../util/constants';
import { SnackBarAlert } from '../util/Alert';
import { useInputValue } from '../hooks/useInput';
import { useCookies } from 'react-cookie';

export const Login = () => {
  const [open, setOpen] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
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
    if (!response.ok) {
      setAlertTitle('signup.authError-title');
      setErrorMessage(response.message);
      setOpen(true);
    } else {
      const { token } = response.data;

      setCookie('token', token, { path: '/' });
      history.push('/');
    }
    dispatch(Loading(false));
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const volver = () => {
    history.push('/signup');
  };

  return (
    <>
      <SnackBarAlert
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        severity='error'
        title={TextMessage(alertTitle)}
        message={{
          children: TextMessage(errorMessage),
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
