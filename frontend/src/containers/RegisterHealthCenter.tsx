import React, { useState, useEffect, SyntheticEvent, useRef } from 'react';
import { FormRegisterHealthCenter } from '../components/FormRegisterHealthCenter/FormRegisterHealthCenter';
import { toBase64 } from '../util/Util';
import { useCookies } from 'react-cookie';
import { SnackBarAlert } from '../util/Alert';
import {
  useInputValue,
  useSelectValue,
} from '../hooks/useInput';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../redux/types';
import { Loading as setLoading } from '../redux/actions';
import { setMsgSuccessVisbility, setMsgErrorVisbility } from '../redux/actions';
import { TextMessage } from '../lang/TextMessage';
import { Card } from '@material-ui/core';
import { FormRegisterContact } from '../components/FormRegisterPerson/FormRegisterContact';
import { ContainerLastStep } from '../components/FormRegisterPerson/ContainerLastStep';
import { Loading } from '../components/Loading';
import { post } from '../util/httpUtil';
import {HTTP_HEALTH_CENTER} from '../util/constants';
import { IResponse } from '../data/IResponse';
import { IHealthCareCenter } from '../data/IHealthCareCenter';
import { useHistory } from 'react-router';
import { isValid } from 'date-fns';

export const RegisterHealthCenter = () => {
  const openMsgError = useSelector((state: IStore) => state.openMsgError);
  const openMsgSuccess = useSelector((state: IStore) => state.openMsgSuccess);
  const snackTitle = useSelector((state: IStore) => state.snackTitle);
  const snackMsg = useSelector((state: IStore) => state.snackMsg);
  const user = useSelector((state: IStore) => state.healthCenter);
  const history = useHistory();
  const dispatch = useDispatch();

  //Health center data
  const name = useInputValue('');
  const website = useInputValue('');
  const phone = useInputValue('');
  const direction = useInputValue('');
  const email = useInputValue('');
  const description = useInputValue('');

  const [cookie] = useCookies(['token']);

  const [valide, setValide] = useState(false)
  const [token, setToken] = useState(cookie.token);

  const handleSubmit = async() => {
    /*
      dispatch(setLoading(true));
      const healthCenter: IHealthCareCenter = {
        document: user?.document,
        name: name.value,
        website: website.value,
        phone: phone.value,
        direction: direction.value,
        email: email.value,
        description: description.value
      };
      console.log('HCC', healthCenter);
      const response = await post(HTTP_HEALTH_CENTER, { healthCenter }, token);
      if (response) {
        const { message } = response;
        if (response.ok) {
          console.log("ok");
          
          dispatch(SnackTitleMsg('register.success-title'));
          dispatch(SnackMsg(message));
          dispatch(setMsgSuccessVisbility(true));
       
        } else {
          console.log("no ok");
          
          dispatch(SnackTitleMsg('register.error-title'));
          dispatch(SnackMsg(message));
          dispatch(setMsgErrorVisbility(true));
          
        }
      } else {
        console.log("no response");
        
        dispatch(SnackTitleMsg('register.error-title'));
        dispatch(SnackMsg('app.not-server'));
        dispatch(setMsgErrorVisbility(true));
        
      }
      dispatch(setLoading(false));
      */

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
