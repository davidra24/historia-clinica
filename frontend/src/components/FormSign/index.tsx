import React, { useRef, useState } from 'react';
import { TextMessage } from '../../lang/TextMessage';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { InputSwitch } from 'primereact/inputswitch';
import { Button } from 'primereact/button';
import { signTypes } from '../../data/formTypes';
import logo from '../../assets/logo.svg';
import { isEmpty } from 'lodash';
import { ifError } from 'assert';
import { validationsPasswordUser } from '../../util/validations';

export const FormSign = ({
  title,
  inputDocument,
  inputPassword,
  leftButton,
  rightButton,
  person,
  setPerson,
}: signTypes) => {
  return (
    <>
      <div className='p-grid p-justify-center'>
        <img className='login__logo' src={logo} alt='heartbeat' />
      </div>
      <div className='login__title'>
        <h2 className='p-grid p-justify-center'>{title}</h2>
      </div>
      <form className='p-grid p-fluid' onSubmit={rightButton.onSubmit}>
        <div className='p-col-8 p-offset-2 login__input p-field'>
          <span className='p-float-label'>
            <InputText id='float-document' {...inputDocument} name='document' />
            <label htmlFor='float-document'>
              {TextMessage('signForm.document')}
            </label>
          </span>
        </div>
        <div className='p-col-8 p-offset-2 login__input p-field'>
          <span className='p-float-label'>
            <Password
              id='float-password'
              feedback={false}
              {...inputPassword}
              name='password'
            />
            <label htmlFor='float-password'>
              {TextMessage('signForm.password')}
            </label>
          </span>
        </div>
        {person !== undefined && setPerson && (
          <div className='p-col-10 p-offset-2 login__input'>
            <div className='p-grid p-fluid p-justify-center'>
              <div className='p-col-12 p-md-6'>
                <div className='p-grid p-fuild'>
                  <div className='p-col-4'>
                    <label htmlFor='input-people'>
                      {TextMessage('signForm.people')}
                    </label>
                  </div>
                  <div className='p-col-7'>
                    <InputSwitch
                      checked={person}
                      onChange={() => {
                        setPerson(!person);
                      }}
                    />
                  </div>
                </div>
              </div>
              <div className='p-col-12 p-md-6'>
                <div className='p-grid p-fuild'>
                  <div className='p-col-6 p-md-3'>
                    <label htmlFor='input-healtCare'>
                      {TextMessage('signForm.healtCarecenter')}
                    </label>
                  </div>
                  <div className='p-col-6 p-md-9'>
                    <InputSwitch
                      checked={!person}
                      onChange={() => {
                        setPerson(!person);
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        <div className='p-col-8 p-offset-2 login__input'>
          <div className='p-grid p-fluid'>
            <div className='p-col-12 p-md-6'>
              <Button {...leftButton} />
            </div>
            <div className='p-col-12 p-md-6'>
              <Button label={rightButton.label} type='submit' />
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
