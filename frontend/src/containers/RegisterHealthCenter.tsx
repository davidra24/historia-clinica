import React from 'react';
import { FormRegisterHealthCenter } from '../components/FormRegister/FormRegisterHealthCenter';

export const RegisterHealthCenter = () => {
  return (
    <>
      <div className='flex h-full justify-center items-center'>
        <FormRegisterHealthCenter onSubmit={null} />
      </div>
    </>
  );
};
