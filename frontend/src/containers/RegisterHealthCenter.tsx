import React from 'react';
import { FormRegisterPatient } from '../components/FormRegister/FormRegisterPatient';

export const RegisterHealthCenter = () => {
  return (
    <>
      <div className='flex h-full justify-center items-center'>
        <FormRegisterPatient onSubmit={null} />
      </div>
    </>
  );
};
