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
  setHealthCenter,
} from '../../redux/actions';
import { TextMessage } from '../../lang/TextMessage';
import { Loading } from '../../components/Loading';
import { useHistory } from 'react-router';
import { IHealthCareCenter } from '../../data/IHealthCareCenter';
import { HTTP_HEALTH_CENTER } from '../../util/constants';
import { IRegisterHealthCenter } from '../../data/IRegisterHealthCenter';
import { post, put, deleteRecord } from '../../util/httpUtil';
import { useAlert } from '../../hooks/useAlert';

export const RegisterHealthCenter = ({
  isEdit,
  nameInfo,
  websiteInfo,
  phoneInfo,
  directionInfo,
  emailInfo,
  descriptionInfo,
  setShow,
}: IRegisterHealthCenter) => {
  const user = useSelector((state: IStore) => state.user);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();
  const alert = useAlert(dispatch);

  //Health center data
  const name = useInputValue(nameInfo || '');
  const website = useInputValue(websiteInfo || '');
  const phone = useInputValue(phoneInfo || '');
  const direction = useInputValue(directionInfo || '');
  const email = useInputValue(emailInfo || '');
  const description = useInputValue(descriptionInfo || '');

  const [cookie] = useCookies(['token']);

  const [valide, setValide] = useState(false);
  const [token, setToken] = useState(cookie.token);

  const handleSubmit = async () => {
    const healthCenter: IHealthCareCenter = {
      id: user.document,
      name: name.value,
      website: website.value,
      phone: phone.value,
      direction: direction.value,
      email: email.value,
      description: description.value,
    };
    if (!isEdit) {
      await postHealthCareCenterData(healthCenter);
    } else {
      await pullHealthCareCenterData(healthCenter);
    }
  };

  const postHealthCareCenterData = async (healthCenter: IHealthCareCenter) => {
    setLoading(true);
    const response = await post(HTTP_HEALTH_CENTER, { healthCenter }, token);
    if (response) {
      console.log(response);
      const { ok, message } = response;
      if (ok) {
        alert('register.success-title', message, 'success');
        history.push('/');
      } else {
        alert('register.error-title', message, 'error');
      }
    } else {
      alert('register.error-title', 'app.not-server', 'error');
    }
    setLoading(false);
  };

  const pullHealthCareCenterData = async (healthCenter: IHealthCareCenter) => {
    setLoading(true);
    const response = await put<IHealthCareCenter>(
      HTTP_HEALTH_CENTER,
      healthCenter.id,
      { healthCenter },
      token
    );
    if (response) {
      const { message, data } = response;
      if (response.ok) {
        dispatch(setHealthCenter(data));
        alert('register.success-title', message, 'success');
        setShow(true);
        setLoading(false);
      } else {
        alert('register.error-title', message, 'error');
        setLoading(false);
      }
    } else {
      alert('register.error-title', 'app.not-server', 'error');
      setLoading(false);
    }
  };

  return (
    <>
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
            update={isEdit}
            setShow={setShow}
          />
        </div>
      )}
    </>
  );
};
