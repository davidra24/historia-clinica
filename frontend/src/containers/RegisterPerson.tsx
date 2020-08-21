import React from 'react';
import { FormRegisterPerson } from '../components/FormRegister/FormRegisterPerson';

export const RegisterPerson = () => {
  return (
    <>
      <div className='flex h-full justify-center items-center'>
        <FormRegisterPerson onSubmit={null} />
      </div>
    </>
  );
};
