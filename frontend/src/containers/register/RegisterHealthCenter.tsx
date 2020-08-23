import React, { useState, useEffect, SyntheticEvent, useRef } from 'react';
import { FormRegisterHealthCenter } from '../../components/FormRegisterHealthCenter/FormRegisterHealthCenter';
import { useCookies } from 'react-cookie';
import { SnackBarAlert } from '../../util/Alert';
import { useInputValue } from '../../hooks/useInput';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../redux/types';
import {
  setMsgSuccessVisbility,
  setMsgErrorVisbility,
  SnackTitleMsg,
  SnackMsg,
} from '../../redux/actions';
import { TextMessage } from '../../lang/TextMessage';
import { Loading } from '../../components/Loading';
import { useHistory } from 'react-router';
import { IHealthCareCenter } from '../../data/IHealthCareCenter';
import { HTTP_HEALTH_CENTER } from '../../util/constants';
import { post } from '../../util/httpUtil';

export const RegisterHealthCenter = () => {
  const openMsgError = useSelector((state: IStore) => state.openMsgError);
  const openMsgSuccess = useSelector((state: IStore) => state.openMsgSuccess);
  const snackTitle = useSelector((state: IStore) => state.snackTitle);
  const snackMsg = useSelector((state: IStore) => state.snackMsg);
  const user = useSelector((state: IStore) => state.user);
  const [loading, setLoading] = useState(false);
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

  const [valide, setValide] = useState(false);
  const [token, setToken] = useState(cookie.token);

  const handleSubmit = async () => {
    setLoading(true);
    const healthCenter: IHealthCareCenter = {
      id: user.document,
      name: name.value,
      website: website.value,
      phone: phone.value,
      direction: direction.value,
      email: email.value,
      description: description.value,
    };

    const response = await post(HTTP_HEALTH_CENTER, { healthCenter }, token);
    if (response) {
      console.log(response);
      const { ok, message } = response;
      if (ok) {
        dispatch(SnackTitleMsg('register.success-title'));
        dispatch(SnackMsg(message));
        dispatch(setMsgSuccessVisbility(true));
        history.push('/');
      } else {
        dispatch(SnackTitleMsg('register.error-title'));
        dispatch(SnackMsg(message));
        dispatch(setMsgErrorVisbility(true));
      }
    } else {
      dispatch(SnackTitleMsg('register.error-title'));
      dispatch(SnackMsg('app.not-server'));
      dispatch(setMsgErrorVisbility(true));
    }
    setLoading(false);
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
      {loading ? (
        <Loading />
      ) : (
        <div className='flex justify-center items-center'>
          <FormRegisterHealthCenter
            onSubmit={handleSubmit}
            name={name}
            website={website}
            phone={phone}
            direction={direction}
            email={email}
            description={description}
            token={token}
          />
        </div>
      )}
    </>
  );
};
