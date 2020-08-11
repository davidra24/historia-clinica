import React, { useRef } from 'react';
import { Card } from 'primereact/card';
import { TextMessage } from '../lang/TextMessage';
import { useDispatch } from 'react-redux';
import { Loading } from '../redux/actions';
import { FormSign } from '../components/FormSign';
import { useHistory } from 'react-router';
import { useInputValue } from '../hooks/useInput';
import { IUser } from '../data/IUser';
import { post } from '../util/httpUtil';
import { HTTP_LOGIN } from '../util/constants';
import { Messages } from 'primereact/messages';
import { errorMessage } from '../util/UtilMsgs';

export const Login = () => {
  const inputDocument = useInputValue('');
  const inputPassword = useInputValue('');
  const dispatch = useDispatch();
  const history = useHistory();
  let messages = useRef<any>(null);

  const login = async (e: any) => {
    e.preventDefault();
    dispatch(Loading(true));
    const user: IUser = {
      document: inputDocument.value,
      password: inputPassword.value,
    };
    const data = await post(HTTP_LOGIN, user);
    if (!data.ok) {
      errorMessage(
        messages,
        TextMessage('login.authError-title'),
        TextMessage(data.message)
      );
    }
    dispatch(Loading(false));
  };

  const volver = () => {
    history.push('/signup');
  };

  return (
    <div className='p-grid p-justify-center p-align-center'>
      <Messages className='p-col-10 p-md-8 p-lg-7' ref={messages} />
      <Card className='p-col-10 p-md-8 p-lg-6'>
        <FormSign
          title={TextMessage('login.title')}
          inputDocument={inputDocument}
          inputPassword={inputPassword}
          leftButton={{
            onClick: volver,
            label: TextMessage('login.signup'),
            className: 'p-button-success',
          }}
          rightButton={{ onSubmit: login, label: TextMessage('login.signin') }}
        />
      </Card>
    </div>
  );
};
