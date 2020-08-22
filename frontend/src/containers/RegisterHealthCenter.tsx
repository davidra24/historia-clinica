import React, { useState, SyntheticEvent } from 'react';
import { FormRegisterHealthCenter } from '../components/FormRegisterHealthCenter/FormRegisterHealthCenter';
import { useInputValue, useDatePicker } from '../hooks/useInput';
import { toBase64 } from '../util/Util';
import { useCookies } from 'react-cookie';
import { SnackBarAlert } from '../util/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../redux/types';
import { Loading as setLoading } from '../redux/actions';
import { setMsgSuccessVisbility, setMsgErrorVisbility } from '../redux/actions';
import { TextMessage } from '../lang/TextMessage';
import { Card } from '@material-ui/core';
import { FormRegisterContact } from '../components/FormRegisterPerson/FormRegisterContact';
import { ContainerLastStep } from '../components/FormRegisterPerson/ContainerLastStep';
import { Loading } from '../components/Loading';

export const RegisterHealthCenter = () => {
  const openMsgError = useSelector((state: IStore) => state.openMsgError);
  const openMsgSuccess = useSelector((state: IStore) => state.openMsgSuccess);
  const snackTitle = useSelector((state: IStore) => state.snackTitle);
  const snackMsg = useSelector((state: IStore) => state.snackMsg);
  const loading = useSelector((state: IStore) => state.loading);
  const dispatch = useDispatch();

  //Health center data
  const name = useInputValue('');
  const website = useInputValue('');
  const phone = useInputValue('');
  const direction = useInputValue('');
  const email = useInputValue('');
  const description = useInputValue('');
  const [cookie] = useCookies(['token']);
  const [token, setToken] = useState(cookie.token);

  const handleSubmit = () => {
    //TODO -> ALMACENAR DATOS EN SERVIDOR
  };

  return (
    <>
      <div className='flex justify-center items-center'>
        <FormRegisterHealthCenter onSubmit={handleSubmit}
                name={name}
                website={website}
                phone={phone}
                direction={direction}
                email={email}
                description={description}
                token={token}/>
      </div>
    </>
  );
};
