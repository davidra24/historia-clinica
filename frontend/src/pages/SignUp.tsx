import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Loading,
  setMsgErrorVisbility,
  setMsgSuccessVisbility,
  SnackTitleMsg,
  SnackMsg,
} from '../redux/actions';
import { FormSign } from '../components/FormSign';
import { TextMessage } from '../lang/TextMessage';
import { useHistory } from 'react-router';
import { useInputValue } from '../hooks/useInput';
import { HTTP_USERS, PATTERN_PASSWORD } from '../util/constants';
import { post } from '../util/httpUtil';
import { IUser } from '../data/IUser';
import { SnackBarAlert } from '../util/Alert';
import { IStore } from '../redux/types';

export const SignUp = () => {
  const openMsgError = useSelector((state: IStore) => state.openMsgError);
  const openMsgSuccess = useSelector((state: IStore) => state.openMsgSuccess);
  const snackTitle = useSelector((state: IStore) => state.snackTitle);
  const snackMsg = useSelector((state: IStore) => state.snackMsg);

  const dispatch = useDispatch();

  const [person, setPerson] = useState(true);

  const inputDocument = useInputValue('');
  const inputPassword = useInputValue('');

  const history = useHistory();

  const signup = async () => {
    const document = inputDocument.value;
    const password = inputPassword.value;

    if (document.length < 6 || document.length > 15) {
      dispatch(SnackTitleMsg('signup.authError-title'));
      dispatch(SnackMsg('document.invalid'));
      dispatch(setMsgErrorVisbility(true));
      return;
    }

    if (!PATTERN_PASSWORD.test(password)) {
      dispatch(SnackTitleMsg('signup.authError-title'));
      dispatch(SnackMsg('password.invalid'));
      dispatch(setMsgErrorVisbility(true));
      return;
    }

    dispatch(Loading(true));
    const user: IUser = {
      document,
      documenttype: person,
      password,
      active: true,
    };
    const response = await post(HTTP_USERS, { user });
    console.log('response', response);
    if (response) {
      const { message } = response;
      if (response.ok) {
        dispatch(SnackTitleMsg('signup.success-title'));
        dispatch(SnackMsg(message));
        dispatch(setMsgSuccessVisbility(true));
        history.push('/login');
      } else {
        dispatch(SnackTitleMsg('signup.authError-title'));
        dispatch(SnackMsg(message));
        dispatch(setMsgErrorVisbility(true));
      }
    } else {
      dispatch(SnackTitleMsg('signup.authError-title'));
      dispatch(SnackMsg('app.not-server'));
      dispatch(setMsgErrorVisbility(true));
    }
    dispatch(Loading(false));
  };

  const volver = () => {
    history.push('/login');
  };

  const handleClose = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }
    dispatch(setMsgSuccessVisbility(false));
    dispatch(setMsgErrorVisbility(false));
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
          title={TextMessage('signup.title')}
          leftButton={{
            onClick: volver,
            label: TextMessage('signup.back'),
            className: 'p-button-warning',
          }}
          rightButton={{
            label: TextMessage('signup.signup'),
          }}
          onSubmit={signup}
          person={person}
          setPerson={setPerson}
          inputDocument={inputDocument}
          inputPassword={inputPassword}
        />
      </div>
    </>
  );
};
