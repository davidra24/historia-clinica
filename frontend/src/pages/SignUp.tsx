import React, { useState, SyntheticEvent, useEffect } from 'react';
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
import { useInputValidator } from '../hooks/useInput';
import { HTTP_USERS, PATTERN_PASSWORD } from '../util/constants';
import { post } from '../util/httpUtil';
import { IUser } from '../data/IUser';
import { useAlert } from '../hooks/useAlert';

export const SignUp = () => {
  const dispatch = useDispatch();
  const alert = useAlert(dispatch);

  const [person, setPerson] = useState(true);

  const inputDocument = useInputValidator('');
  const inputPassword = useInputValidator('');
  const inputSecondPassword = useInputValidator('');
  const [valide, setValide] = useState(false);

  const history = useHistory();

  const validate = (): boolean => {
    const inputDocumentValidator =
      inputDocument.value !== null && inputDocument.value !== '';
    const inputPasswordValidator =
      inputPassword.value !== null && inputPassword.value !== '';
    const inputSecondPasswordValidator =
      inputSecondPassword.value !== null && inputSecondPassword.value !== 0;

    inputDocument.setValidator(inputDocumentValidator);
    inputPassword.setValidator(inputPasswordValidator);
    inputSecondPassword.setValidator(inputSecondPasswordValidator);

    const finalValidator =
      inputDocumentValidator &&
      inputPasswordValidator &&
      inputSecondPasswordValidator;

    setValide(finalValidator);
    return finalValidator;
  };
  useEffect(() => {}, [valide]);

  const signupPromise = async (): Promise<boolean> => {
    return new Promise(async (resolve) => {
      const document = inputDocument.value;
      const password = inputPassword.value;
      const secondPassword = inputSecondPassword.value;

      if (document.length < 6 || document.length > 15) {
        alert('signup.authError-title', 'document.invalid', 'error');
        return resolve(false);
      }

      if (!PATTERN_PASSWORD.test(password)) {
        alert('signup.authError-title', 'password.invalid', 'error');
        return resolve(false);
      }

      if (password !== secondPassword) {
        alert('signup.authError-title', 'password.invalid', 'error');
        return resolve(false);
      }

      dispatch(Loading(true));
      const user: IUser = {
        document,
        document_type: person,
        password,
        active: true,
      };
      const response = await post<any>(HTTP_USERS, { user });
      console.log('response', response);
      if (response) {
        const { message } = response;
        if (response.ok) {
          alert('signup.success-title', message, 'success');
          resolve(true);
          history.push('/login');
        } else {
          alert('signup.authError-title', message, 'error');
          resolve(false);
        }
      } else {
        alert('signup.authError-title', 'app.not-server', 'error');
        resolve(false);
      }
      dispatch(Loading(false));
    });
  };

  const signup = async (event: SyntheticEvent) => {
    event.preventDefault();
    const register = await signupPromise();
    if (validate()) {
      if (register) {
        history.push('/');
      }
    }
  };

  const volver = () => {
    history.push('/login');
  };

  return (
    <>
      <div className='flex justify-center pt-10 w-12/12 h-full mb-4'>
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
          inputSecondPassword={inputSecondPassword}
        />
      </div>
    </>
  );
};
