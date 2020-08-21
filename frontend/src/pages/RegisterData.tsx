import React from 'react';
import { IStore } from '../redux/types';
import { useSelector } from 'react-redux';
import { RegisterPerson } from '../containers/RegisterPerson';
import { RegisterHealthCenter } from '../containers/RegisterHealthCenter';

export const RegisterData = () => {
  const user = useSelector((state: IStore) => state.user);

  console.log(user);

  return (
    <>
      <div className='h-full w-full'>
        {user?.documenttype ? <RegisterPerson /> : <RegisterHealthCenter />}
      </div>
    </>
  );
};
