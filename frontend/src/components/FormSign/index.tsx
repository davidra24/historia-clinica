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
import { IStore } from '../../redux/types';
import { useSelector } from 'react-redux';
import { Loading } from '../loading';

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
  const loading = useSelector((state: IStore) => state.loading);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='h-12 w-auto w-12/12 md:w-10/12 lg:w-8/12 xl:w-6/12'>
          <Card className='flex flex-col justify-center'>
            <div className='flex justify-center pt-2'>
              <img src={logo} alt='heartbeat' />
            </div>
            <div className='flex justify-center mb-2'>
              <h1 className='text-2xl'>
                <strong>{title}</strong>
              </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className='flex flex-col justify-center space-y-2 px-10 mb-5'>
                <FormControl>
                  <TextField
                    id='float-document'
                    name='document'
                    inputRef={register(validationsDocument)}
                    variant='outlined'
                    label={TextMessage('signForm.document')}
                    type={person !== undefined && person ? 'number' : 'text'}
                    disabled={loading}
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
                    disabled={loading}
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
                          disabled={loading}
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
                          disabled={loading}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}
              <div className='flex justify-around my-10'>
                <Button
                  variant='outlined'
                  color='secondary'
                  disabled={loading}
                  {...leftButton}
                >
                  {leftButton.label}
                </Button>
                <Button
                  variant='outlined'
                  color='primary'
                  disabled={loading}
                  type='submit'
                >
                  {rightButton.label}
                </Button>
              </div>
            </form>
          </Card>
        </div>
      )}
    </>
  );
};
