import { TextMessage } from '../../lang/TextMessage';
import React from 'react';
import {
  Card,
  FormControl,
  TextField,
  Button,
  TextareaAutosize,
} from '@material-ui/core';
import { IHealthCareCenterTypes } from '../../data/IHealthCareCenter';
import { useForm } from 'react-hook-form';
import {
  validationsCenterName,
  validationsPhone,
  validationsDirection,
} from '../../util/validations';
import { useDispatch } from 'react-redux';

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
}: IHealthCareCenterTypes) => {
  const { handleSubmit, register, errors } = useForm();
  const dispatch = useDispatch();
  return (
    <>
      <Card className='flex justify-center w-11/12 md:w-10/12 lg:w-8/12 xl:w-6/12 pt-3 pr-10 pl-10 pb-10'>
        <div className='flex justify-center mb-2 w-full'>
          <div className='flex flex-col w-full'>
            <div className='flex flex-col justify-center space-y-5'>
              <h2 className='text-lg text-center'>
                <strong>{TextMessage('register-healthCenter')}</strong>
              </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='flex flex-col space-y-3'>
                  <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                    <FormControl className='w-12/12 md:w-5/12'>
                      <TextField
                        id='float-centerName'
                        name='centerName'
                        inputRef={register(validationsCenterName)}
                        variant='outlined'
                        label={TextMessage('register-form-nameCenter')}
                        disabled={disabled}
                        {...name}
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
                        label={TextMessage('register-form-website')}
                        disabled={disabled}
                        {...website}
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
                        label={TextMessage('register-form-phoneCenter')}
                        disabled={disabled}
                        {...phone}
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
                        label={TextMessage('register-form-directionCenter')}
                        disabled={disabled}
                        {...direction}
                      />
                      <span className='text-red-600'>
                        {errors.direction && errors.direction.message}
                      </span>
                    </FormControl>
                  </div>
                  <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                    <FormControl className='w-12/12 md:w-11/12'>
                      <TextField
                        id='float-email'
                        name='email'
                        variant='outlined'
                        label={TextMessage('register-form-emailCenter')}
                        disabled={disabled}
                        {...email}
                      />
                    </FormControl>
                  </div>
                  <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                    <FormControl className='w-12/12 md:w-11/12 p-64'>
                      <TextField
                        id='float-description'
                        name='description'
                        variant='outlined'
                        multiline
                        rows={4}
                        label={TextMessage('register-form-descriptionCenter')}
                        disabled={disabled}
                        {...description}
                      />
                    </FormControl>
                  </div>
                  <div className='flex justify-end mt-8'>
                    <Button variant='outlined' color='primary' type='submit'>
                      {TextMessage('register.form-save')}
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};
