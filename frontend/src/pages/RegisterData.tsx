import React from 'react';
import { IStore } from '../redux/types';
import { useSelector } from 'react-redux';
import { RegisterPerson } from '../containers/register/RegisterPerson';
import { RegisterHealthCenter } from '../containers/register/RegisterHealthCenter';

export const RegisterData = () => {
  const user = useSelector((state: IStore) => state.user);

  return (
    <>
      <div className='w-full'>
        {user?.document_type ? <RegisterPerson /> : <RegisterHealthCenter />}
      </div>
    </>
  );
};
