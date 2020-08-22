import React, { useEffect, useState } from 'react';
import {
  Card,
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
  validationsCivilState,
  validationsEmail,
  validationsPhone,
  validationsBirth,
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
} from '../../redux/actions';
import { IStore } from '../../redux/types';
import { Loading } from '../Loading';
import { IEPS } from '../../data/IEPS';
import { IProfessions } from '../../data/IProfessions';

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
  const { handleSubmit, register, errors } = useForm();
  const [epsList, setEpsList] = useState<Array<IEPS>>([]);
  const [professionList, setProfessionList] = useState<Array<IProfessions>>([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    fetchEPS();
    fetchProfessions();
    setLoading(false);
  }, []);

  const fetchEPS = async () => {
    const response = await get(HTTP_EPS, token);
    if (response) {
      const { message } = response;
      if (response.ok) {
        const { data } = response;
        setEpsList(data);
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
  };

  const fetchProfessions = async () => {
    const response = await get(HTTP_PROFESSION, token);
    if (response) {
      const { message } = response;
      if (response.ok) {
        const { data } = response;
        setProfessionList(data);
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
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='flex flex-col w-full'>
          <div className='flex flex-col justify-center space-y-5'>
            <h2 className='text-lg text-center'>
              <strong>{TextMessage('register.person')}</strong>
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                      inputRef={register(validationsFirstName)}
                      variant='outlined'
                      label={TextMessage('register.form-firstName')}
                      {...firstName}
                      disabled={disabled}
                    />
                    <span className='text-red-600'>
                      {errors.firstName && errors.firstName.message}
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
                      inputRef={register(validationsLastName)}
                      variant='outlined'
                      label={TextMessage('register.form-lastName')}
                      {...lastName}
                      disabled={disabled}
                    />
                    <span className='text-red-600'>
                      {errors.lastName && errors.lastName.message}
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
                      inputRef={register(validationsEmail)}
                      label={TextMessage('register.form-email')}
                      {...email}
                      disabled={disabled}
                    />
                    <span className='text-red-600'>
                      {errors.email && errors.email.message}
                    </span>
                  </FormControl>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <TextField
                      id='float-phone'
                      name='phone'
                      variant='outlined'
                      inputRef={register(validationsPhone)}
                      label={TextMessage('register.form-phone')}
                      {...phone}
                      disabled={disabled}
                    />
                    <span className='text-red-600'>
                      {errors.phone && errors.phone.message}
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
                      name='genre'
                      innerRef={register(validationsGenre)}
                      label='Genre'
                      {...genre}
                      disabled={disabled}
                    >
                      <MenuItem value={1}>
                        {TextMessage('register.form-GenreM')}
                      </MenuItem>
                      <MenuItem value={2}>
                        {TextMessage('register.form-GenreF')}
                      </MenuItem>
                      <MenuItem value={3}>
                        {TextMessage('register.form-GenreO')}
                      </MenuItem>
                    </Select>
                    <span className='text-red-600'>
                      {errors.genre && errors.genre.message}
                    </span>
                  </FormControl>
                  <FormControl variant='outlined' className='w-12/12 md:w-5/12'>
                    <InputLabel id='form-select-civilstate'>
                      {TextMessage('register.form-civilState')}
                    </InputLabel>
                    <Select
                      id='float-civilstate'
                      labelId='float-civilstate'
                      name='civilstate'
                      innerRef={register(validationsCivilState)}
                      label='CivilState'
                      {...civilState}
                      disabled={disabled}
                    >
                      <MenuItem value={1}>
                        {TextMessage('register.form-CivilStateC')}
                      </MenuItem>
                      <MenuItem value={2}>
                        {TextMessage('register.form-CivilStateD')}
                      </MenuItem>
                      <MenuItem value={3}>
                        {TextMessage('register.form-CivilStateS')}
                      </MenuItem>
                      <MenuItem value={4}>
                        {TextMessage('register.form-CivilStateU')}
                      </MenuItem>
                      <MenuItem value={5}>
                        {TextMessage('register.form-CivilStateV')}
                      </MenuItem>
                    </Select>
                    <span className='text-red-600'>
                      {errors.civilstate && errors.civilstate.message}
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
                      name='eps'
                      label='eps'
                      {...idEPS}
                      disabled={disabled}
                    >
                      {epsList
                        .sort((a, b) =>
                          a.name > b.name ? 1 : a.name < b.name ? -1 : 0
                        )
                        .map((eps: IEPS) => (
                          <MenuItem value={eps.id} key={eps.id}>
                            {eps.name}
                          </MenuItem>
                        ))}
                    </Select>
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
                      {professionList
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
                      {...stratum}
                      disabled={disabled}
                    >
                      <MenuItem value={1}>1</MenuItem>
                      <MenuItem value={2}>2</MenuItem>
                      <MenuItem value={3}>3</MenuItem>
                      <MenuItem value={4}>4</MenuItem>
                      <MenuItem value={5}>5</MenuItem>
                      <MenuItem value={5}>6</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                      <KeyboardDatePicker
                        inputVariant='outlined'
                        margin='normal'
                        name='datePicker'
                        inputRef={register(validationsBirth)}
                        id='date-picker-dialog'
                        label={TextMessage('register.form-dateBirth')}
                        format='dd/MM/yyyy'
                        {...dateBirth}
                        KeyboardButtonProps={{
                          'aria-label': 'change date',
                        }}
                        disabled={disabled}
                      />
                    </MuiPickersUtilsProvider>
                    <span className='text-red-600'>
                      {errors.datePicker && errors.datePicker.message}
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
