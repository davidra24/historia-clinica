import React, { useState } from 'react';
import { FormRegisterPerson } from '../components/FormRegister/FormRegisterPerson';
import { useInputValue, useDatePicker } from '../hooks/useInput';
import { toBase64 } from '../util/Util';
import defaultImage from '../assets/default-profile.png';
import { useCookies } from 'react-cookie';
import { SnackBarAlert } from '../util/Alert';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../redux/types';
import { setMsgSuccessVisbility, setMsgErrorVisbility } from '../redux/actions';
import { TextMessage } from '../lang/TextMessage';

export const RegisterPerson = () => {
  const openMsgError = useSelector((state: IStore) => state.openMsgError);
  const openMsgSuccess = useSelector((state: IStore) => state.openMsgSuccess);
  const snackTitle = useSelector((state: IStore) => state.snackTitle);
  const snackMsg = useSelector((state: IStore) => state.snackMsg);
  const dispatch = useDispatch();

  const firstName = useInputValue('');
  const secondName = useInputValue('');
  const lastName = useInputValue('');
  const lastSecondName = useInputValue('');
  const genre = useInputValue('');
  const civilState = useInputValue('');
  const email = useInputValue('');
  const dateBirth = useDatePicker(new Date());
  const phone = useInputValue('');
  const stratum = useInputValue('');
  const idProfession = useInputValue('');
  const idEPS = useInputValue('');
  const [cookie] = useCookies(['token']);
  const isHealtCareTeam = false;

  const [image, setImage] = useState<any>(defaultImage);
  const [token, setToken] = useState(cookie.token);

  const onChangePhoto = (event: any) => {
    const ph = event.target.files[0];
    toBase64(ph).then((res) => setImage(res));
  };
  const handleSubmit = () => {};

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
      <div className='flex justify-center items-center'>
        <FormRegisterPerson
          onSubmit={handleSubmit}
          firstName={firstName}
          secondName={secondName}
          lastName={lastName}
          lastSecondName={lastSecondName}
          genre={genre}
          civilState={civilState}
          email={email}
          dateBirth={dateBirth}
          phone={phone}
          stratum={stratum}
          onChangePhoto={onChangePhoto}
          image={image}
          idProfession={idProfession}
          idEPS={idEPS}
          token={token}
        />
      </div>
    </>
  );
};
