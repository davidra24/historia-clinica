import React, { useState, useRef } from 'react';
import { Card } from 'primereact/card';
import { useDispatch } from 'react-redux';
import { Loading } from '../redux/actions';
import { FormSign } from '../components/FormSign';
import { TextMessage } from '../lang/TextMessage';
import { useHistory } from 'react-router';
import { useInputValue } from '../hooks/useInput';
import { HTTP_USERS } from '../util/constants';
import { post } from '../util/httpUtil';
import { IUser } from '../data/IUser';
import { Messages } from 'primereact/messages';
import { errorMessage, successMessage } from '../util/UtilMsgs';

export const SignUp = () => {
  const [person, setPerson] = useState(true);
  const inputDocument = useInputValue('');
  const inputPassword = useInputValue('');
  const dispatch = useDispatch();
  const history = useHistory();
  let messages = useRef<any>(null);

  const signup = async (e: any) => {
    e.preventDefault();
    dispatch(Loading(true));
    const user: IUser = {
      document: inputDocument.value,
      documentType: person,
      password: inputPassword.value,
      active: true,
    };
    const data = await post(HTTP_USERS, { user });
    if (data.ok) {
      if (data.status === 500 || data.status === 400) {
        errorMessage(
          messages,
          TextMessage('signup.authError-title'),
          TextMessage(data.message)
        );
      }
      if (data.status === 200) {
        successMessage(
          messages,
          TextMessage('signup.success-title'),
          TextMessage(data.message)
        );
      }
    }
    dispatch(Loading(false));
  };

  const volver = () => {
    history.push('/login');
  };

  return (
    <div className='p-grid p-justify-center p-align-center'>
      <Messages className='p-col-10 p-md-8 p-lg-7' ref={messages} />
      <Card className='p-col-10 p-md-8 p-lg-6'>
        <FormSign
          title={TextMessage('signup.title')}
          inputDocument={inputDocument}
          inputPassword={inputPassword}
          leftButton={{
            onClick: volver,
            label: TextMessage('signup.back'),
            className: 'p-button-warning',
          }}
          rightButton={{
            onSubmit: signup,
            label: TextMessage('signup.signup'),
          }}
          person={person}
          setPerson={setPerson}
        />
      </Card>
    </div>
  );
};
