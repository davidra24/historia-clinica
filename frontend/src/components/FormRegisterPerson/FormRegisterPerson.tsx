import React, { useEffect, useState } from 'react';
import {
  FormControl,
  TextField,
  Button,
  Select,
  MenuItem,
  InputLabel,
} from '@material-ui/core';
import { TextMessage } from '../../lang/TextMessage';
import { RegisterPersonTypes } from '../../data/registerPersonTypes';
import { useForm } from 'react-hook-form';
import {
  validationsFirstName,
  validationsLastName,
  validationsGenre,
  validationsEmail,
  validationsPhone,
} from '../../util/validations';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { get } from '../../util/httpUtil';
import { HTTP_EPS, HTTP_PROFESSION } from '../../util/constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  SnackTitleMsg,
  SnackMsg,
  setMsgErrorVisbility,
  selectEPS,
  selectProfessions,
} from '../../redux/actions';
import { Loading } from '../Loading';
import { IEPS } from '../../data/IEPS';
import { IProfessions } from '../../data/IProfessions';
import { IStore } from '../../redux/types';
import {
  ARRAY_GENRES,
  ARRAY_STRATES,
  ARRAY_CIVIL_STATE,
} from '../../util/ConstantsData';

export const FormRegisterPerson = ({
  onSubmit,
  firstName,
  secondName,
  lastName,
  lastSecondName,
  genre,
  civilState,
  email,
  dateBirth,
  phone,
  stratum,
  onChangePhoto,
  image,
  idEPS,
  idProfession,
  token,
  Stepper,
  disabled,
}: RegisterPersonTypes) => {
  //const { handleSubmit, register, errors, control } = useForm();

  const listEps = useSelector((state: IStore) => state.listEPS);
  const listProfessions = useSelector((state: IStore) => state.listProfessions);

  /*const [epsList, setEpsList] = useState<Array<IEPS>>([]);
  const [professionList, setProfessionList] = useState<Array<IProfessions>>([]);*/
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (listEps.length === 0) {
      fetchEPS();
    }
    if (listProfessions.length === 0) {
      fetchProfessions();
    }
  }, []);

  const fetchEPS = async () => {
    setLoading(true);
    const response = await get<Array<IEPS>>(HTTP_EPS, token);
    if (response) {
      const { message } = response;
      if (response.ok) {
        const { data } = response;
        dispatch(selectEPS(data));
      } else {
        dispatch(SnackTitleMsg('register.form-errFetchEPS'));
        dispatch(SnackMsg(message));
        dispatch(setMsgErrorVisbility(true));
      }
    } else {
      dispatch(SnackTitleMsg('register.form-errFetchEPS'));
      dispatch(SnackMsg('app.err-connect'));
      dispatch(setMsgErrorVisbility(true));
    }
    setLoading(false);
  };

  const fetchProfessions = async () => {
    setLoading(true);
    const response = await get<Array<IProfessions>>(HTTP_PROFESSION, token);
    if (response) {
      const { message } = response;
      if (response.ok) {
        const { data } = response;
        dispatch(selectProfessions(data));
      } else {
        dispatch(SnackTitleMsg('register.form-errFetchProfession'));
        dispatch(SnackMsg(message));
        dispatch(setMsgErrorVisbility(true));
      }
    } else {
      dispatch(SnackTitleMsg('register.form-errFetchProfession'));
      dispatch(SnackMsg('app.err-connect'));
      dispatch(setMsgErrorVisbility(true));
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className='h-screen flex opacity-100'>
          <Loading />
        </div>
      ) : (
        <div className={`flex flex-col w-full ${loading && 'opacity-0'}`}>
          <div className='flex flex-col justify-center space-y-5'>
            <h2 className='text-lg text-center'>
              <strong>{TextMessage('register.person')}</strong>
            </h2>
            <form onSubmit={onSubmit}>
              <div className='flex flex-col justify-center space-y-3'>
                <div className='flex justify-center'>
                  <Button component='label' disabled={disabled}>
                    <input
                      onChange={onChangePhoto}
                      accept='image/*'
                      type='file'
                      style={{ display: 'none' }}
                    />
                    <img
                      src={image}
                      alt='profile-picture'
                      className='w-20 h-20 rounded-full flex items-center justify-center'
                    />
                  </Button>
                </div>
                <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <TextField
                      id='float-firstName'
                      name='firstName'
                      variant='outlined'
                      label={TextMessage('register.form-firstName')}
                      {...firstName}
                      disabled={disabled}
                    />
                    <span className='text-red-600'>
                      {!firstName.validator &&
                        TextMessage('register.form-firstName-required')}
                    </span>
                  </FormControl>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <TextField
                      id='float-secondName'
                      name='secondName'
                      variant='outlined'
                      label={TextMessage('register.form-secondName')}
                      {...secondName}
                      disabled={disabled}
                    />
                  </FormControl>
                </div>
                <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <TextField
                      id='float-lastName'
                      name='lastName'
                      variant='outlined'
                      label={TextMessage('register.form-lastName')}
                      {...lastName}
                      disabled={disabled}
                    />
                    <span className='text-red-600'>
                      {!lastName.validator &&
                        TextMessage('register.form-lastName-required')}
                    </span>
                  </FormControl>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <TextField
                      id='float-lastSecondName'
                      name='lastSecondName'
                      variant='outlined'
                      label={TextMessage('register.form-lastSecondName')}
                      {...lastSecondName}
                      disabled={disabled}
                    />
                  </FormControl>
                </div>
                <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <TextField
                      id='float-email'
                      name='email'
                      variant='outlined'
                      label={TextMessage('register.form-email')}
                      {...email}
                      disabled={disabled}
                    />
                    <span className='text-red-600'>
                      {!email.validator &&
                        TextMessage('register.form-email-invalid')}
                    </span>
                  </FormControl>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <TextField
                      id='float-phone'
                      name='phone'
                      variant='outlined'
                      label={TextMessage('register.form-phone')}
                      disabled={disabled}
                      {...phone}
                    />
                    <span className='text-red-600'>
                      {!phone.validator &&
                        TextMessage('register.form-phone-required')}
                    </span>
                  </FormControl>
                </div>
                <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                  <FormControl variant='outlined' className='w-12/12 md:w-5/12'>
                    <InputLabel id='form-select-genre'>
                      {TextMessage('register.form-genre')}
                    </InputLabel>

                    <Select
                      id='float-genre'
                      labelId='float-genre'
                      label='Genre'
                      disabled={disabled}
                      name='genre'
                      {...genre}
                    >
                      {ARRAY_GENRES.map((genre: any) => (
                        <MenuItem key={genre.id} value={genre.id}>
                          {TextMessage(genre.name)}
                        </MenuItem>
                      ))}
                    </Select>

                    <span className='text-red-600'>
                      {!genre.validator &&
                        TextMessage('register.form-genre-required')}
                    </span>
                  </FormControl>
                  <FormControl variant='outlined' className='w-12/12 md:w-5/12'>
                    <InputLabel id='form-select-civilstate'>
                      {TextMessage('register.form-civilState')}
                    </InputLabel>

                    <Select
                      id='float-civilstate'
                      labelId='float-civilstate'
                      label='CivilState'
                      disabled={disabled}
                      value={civilState.value}
                      onChange={civilState.onChange}
                    >
                      {ARRAY_CIVIL_STATE.map((civilState: any) => (
                        <MenuItem key={civilState.id} value={civilState.id}>
                          {TextMessage(civilState.name)}
                        </MenuItem>
                      ))}
                    </Select>

                    <span className='text-red-600'>
                      {!civilState.validator &&
                        TextMessage('register.form-civilState-required')}
                    </span>
                  </FormControl>
                </div>
                <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                  <FormControl variant='outlined' className='w-12/12 md:w-5/12'>
                    <InputLabel id='form-select-eps'>
                      {TextMessage('register.form-idEPS')}
                    </InputLabel>

                    <Select
                      id='float-eps'
                      labelId='float-eps'
                      label='eps'
                      disabled={disabled}
                      value={idEPS.value}
                      onChange={idEPS.onChange}
                    >
                      {listEps
                        .sort((a, b) =>
                          a.name > b.name ? 1 : a.name < b.name ? -1 : 0
                        )
                        .map((eps: IEPS) => (
                          <MenuItem value={eps.id} key={eps.id}>
                            {eps.name}
                          </MenuItem>
                        ))}
                    </Select>
                    <span className='text-red-600'>
                      {!idEPS.validator &&
                        TextMessage('register.form-idEPS-required')}
                    </span>
                  </FormControl>
                  <FormControl variant='outlined' className='w-12/12 md:w-5/12'>
                    <InputLabel id='form-select-profession'>
                      {TextMessage('register.form-profession')}
                    </InputLabel>
                    <Select
                      id='float-profession'
                      labelId='float-profession'
                      name='profession'
                      label='profession'
                      {...idProfession}
                      disabled={disabled}
                    >
                      {listProfessions
                        .sort((a, b) =>
                          a.name > b.name ? 1 : a.name < b.name ? -1 : 0
                        )
                        .map((profession: IProfessions) => (
                          <MenuItem value={profession.id} key={profession.id}>
                            {profession.name}
                          </MenuItem>
                        ))}
                    </Select>
                  </FormControl>
                </div>
                <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                  <FormControl variant='outlined' className='w-12/12 md:w-5/12'>
                    <InputLabel id='form-select-stratum'>
                      {TextMessage('register.form-stratum')}
                    </InputLabel>
                    <Select
                      id='float-stratum'
                      labelId='float-stratum'
                      name='stratum'
                      label='stratum'
                      disabled={disabled}
                      value={stratum.value}
                      onChange={stratum.onChange}
                    >
                      {ARRAY_STRATES.map((strate: any) => (
                        <MenuItem key={strate.id} value={strate.id}>
                          {TextMessage(strate.name)}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        inputVariant='outlined'
                        margin='normal'
                        id='date-picker-dialog'
                        label={TextMessage('register.form-dateBirth')}
                        format='dd/MM/yyyy'
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        helperText={''}
                        disabled={disabled}
                        value={dateBirth.value}
                        onChange={dateBirth.onChange}
                      />
                    </MuiPickersUtilsProvider>

                    <span className='text-red-600'>
                      {!dateBirth.validator &&
                        TextMessage('register.form-dateBirth-required')}
                    </span>
                  </FormControl>
                </div>
                {!disabled && (
                  <div className='flex flex-col w-full'>
                    <div className='flex justify-center w-full'>{Stepper}</div>
                    <div className='flex justify-end'>
                      <Button variant='outlined' color='primary' type='submit'>
                        {TextMessage('register.form-next')}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
