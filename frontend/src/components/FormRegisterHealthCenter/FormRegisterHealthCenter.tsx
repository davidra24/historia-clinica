import { TextMessage } from '../../lang/TextMessage';
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
import { IHealthCareCenter } from '../../data/IHealthCareCenter';
import { useForm } from 'react-hook-form';
import {validationsCenterName, validationsPhone, validationsDirection} from '../../util/validations';
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

export const FormRegisterHealthCenter = ({
  onSubmit,
  name,
  website,
  phone,
  direction,
  email,
  description,
  token,
  disabled,
}: IHealthCareCenter) => {
  const { handleSubmit, register, errors } = useForm();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setLoading(false);
  }, []);

  return (
    <>
  <Card className='w-12/12 md:10/12 lg:8/12 xl:6/12'>
    <div className='flex justify-center mb-2'>
      {loading ? (
        <Loading />
      ) : (
        <div className='flex flex-col w-full'>
          <div className='flex flex-col justify-center space-y-5'>
            <h1 className='text-2xl text-lg text-center'>
            <strong>{TextMessage('register.healthCenter')}</strong>
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col justify-center space-y-3'>
                <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <TextField
                      id='float-centerName'
                      name='centerName'
                      inputRef={register(validationsCenterName)}
                      variant='outlined'
                      label={TextMessage('register.form-nameCenter')}
                      {...name}
                      disabled={disabled}
                    />
                    <span className='text-red-600'>
                      {errors.centerName && errors.centerName.message}
                    </span>
                  </FormControl>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <TextField
                      id='float-website'
                      name='website'
                      variant='outlined'
                      label={TextMessage('register.form-website')}
                      {...website}
                      disabled={disabled}
                    />
                  </FormControl>
                </div>
                <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <TextField
                      id='float-phone'
                      name='phone'
                      inputRef={register(validationsPhone)}
                      variant='outlined'
                      label={TextMessage('register.form-phoneCenter')}
                      {...phone}
                      disabled={disabled}
                    />
                    <span className='text-red-600'>
                      {errors.phone && errors.phone.message}
                    </span>
                  </FormControl>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <TextField
                      id='float-direction'
                      name='direction'
                      variant='outlined'
                      inputRef={register(validationsDirection)}
                      label={TextMessage('register.form-directionCenter')}
                      {...direction}
                      disabled={disabled}
                    />
                    <span className='text-red-600'>
                      {errors.direction && errors.direction.message}
                    </span>
                  </FormControl>
                </div>
                <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                <FormControl className='w-12/12 md:w-5/12'>
                    <TextField
                      id='float-email'
                      name='email'
                      variant='outlined'
                      label={TextMessage('register.form-emailCenter')}
                      {...email}
                      disabled={disabled}
                    />
                  </FormControl>
                  <FormControl className='w-12/12 md:w-5/12'>
                    <TextField
                      id='float-description'
                      name='description'
                      variant='outlined'
                      label={TextMessage('register.form-descriptionCenter')}
                      {...description}
                      disabled={disabled}
                    />
                  </FormControl>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
        </div>
      </Card>
    </>
  );
};