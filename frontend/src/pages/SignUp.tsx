import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Loading } from '../redux/actions';
import { FormSign } from '../components/FormSign';
import { TextMessage } from '../lang/TextMessage';
import { useHistory } from 'react-router';
import { useInputValue } from '../hooks/useInput';
import { HTTP_USERS } from '../util/constants';
import { post } from '../util/httpUtil';
import { IUser } from '../data/IUser';
import { SnackBarAlert } from '../util/Alert';

export const SignUp = () => {
  const [person, setPerson] = useState(true);
  const [open, setOpen] = useState(false);
  const [alertTitle, setAlertTitle] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [document, setDocument] = useState('');
  const inputDocument = useInputValue('');
  const inputPassword = useInputValue('');

  const dispatch = useDispatch();
  const history = useHistory();

  const signup = async () => {
    const document = inputDocument.value;
    const password = inputPassword.value;
    console.log('document', document);
    console.log('password', password);

    dispatch(Loading(true));
    setDocument(document);
    const user: IUser = {
      document,
      documentType: person,
      password,
      active: true,
    };
    const data = await post(HTTP_USERS, { user });
    if (data.ok) {
      if (data.status === 500 || data.status === 400) {
        setAlertTitle('signup.authError-title');
        setErrorMessage(data.message);
        setOpen(true);
      }
      if (data.status === 200) {
        setAlertTitle('signup.success-title');
        setErrorMessage(data.message);
        setOpen(true);
        history.push('/login');
      }
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
    setOpen(false);
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
          children: TextMessage(errorMessage, { document }),
        }}
      />
      <div className='flex justify-center items-center'>
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
