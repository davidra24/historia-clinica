import React, { useRef, useState } from 'react';

import {
  Card,
  FormControl,
  TextField,
  Switch,
  Button,
} from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';

import logo from '../../assets/logo.svg';
import { signTypes } from '../../data/formTypes';
import { TextMessage } from '../../lang/TextMessage';
import {
  validationsDocument,
  validationsPasswordUser,
} from '../../util/validations';

export const FormSign = ({
  title,
  leftButton,
  rightButton,
  onSubmit,
  person,
  setPerson,
  inputDocument,
  inputPassword,
}: signTypes) => {
  const { handleSubmit, register, errors } = useForm();

  return (
    <>
      <div className='h-12 w-auto w-12/12 md:w-10/12 lg:w-8/12 xl:w-6/12'>
        <Card className='flex flex-col justify-center'>
          <div className='flex justify-center'>
            <img className='login__logo' src={logo} alt='heartbeat' />
          </div>
          <div className='login__title flex justify-center'>
            <h1>
              <strong>{title}</strong>
            </h1>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex flex-col justify-center space-y-2 px-10 mb-5'>
              <FormControl className='login__input'>
                <TextField
                  id='float-document'
                  name='document'
                  inputRef={register(validationsDocument)}
                  variant='outlined'
                  label={TextMessage('signForm.document')}
                  type={person !== undefined && person ? 'number' : 'text'}
                  {...inputDocument}
                />
              </FormControl>
              <span className='text-red-600'>
                {errors.document && errors.document.message}
              </span>
              <FormControl className='login__input'>
                <TextField
                  id='float-password'
                  name='password'
                  inputRef={register(validationsPasswordUser)}
                  variant='outlined'
                  type='password'
                  label={TextMessage('signForm.password')}
                  {...inputPassword}
                />
              </FormControl>
              <span className='text-red-600'>
                {errors.password && errors.password.message}
              </span>
            </div>
            {person !== undefined && setPerson && (
              <div className='p-col-10 p-offset-2 login__input'>
                <div className='flex justify-around'>
                  <div className='flex items-center'>
                    <label htmlFor='input-people'>
                      {TextMessage('signForm.people')}
                    </label>
                    <div className='p-col-7'>
                      <Switch
                        name='person'
                        color='secondary'
                        checked={person}
                        onChange={() => {
                          setPerson(!person);
                        }}
                      />
                    </div>
                  </div>
                  <div className='flex items-center'>
                    <label htmlFor='input-healtCare'>
                      {TextMessage('signForm.healtCarecenter')}
                    </label>
                    <div className='p-col-6 p-md-9'>
                      <Switch
                        name='healtcarecenter'
                        color='secondary'
                        checked={!person}
                        onChange={() => {
                          setPerson(!person);
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className='flex justify-around my-10'>
              <div className='p-col-12 p-md-6'>
                <Button variant='outlined' color='secondary' {...leftButton}>
                  {leftButton.label}
                </Button>
              </div>
              <div className='p-col-12 p-md-6'>
                <Button variant='outlined' color='primary' type='submit'>
                  {rightButton.label}
                </Button>
              </div>
            </div>
          </form>
        </Card>
      </div>
    </>
  );
};
