import React from 'react';
import { IStore } from '../redux/types';
import { useSelector } from 'react-redux';
import { RegisterPerson } from '../containers/register/RegisterPerson';
import { RegisterHealthCenter } from '../containers/register/RegisterHealthCenter';
import { Layout } from '../components/App/Layout';

export const RegisterData = () => {
  const user = useSelector((state: IStore) => state.user);

  return (
    <>
      <Layout title={'app.register-title'} subtitle={'app.register-subtitle'}>
        <div className='w-full'>
          {user.document_type ? (
            <RegisterPerson isEdit={false} />
          ) : (
            <RegisterHealthCenter isEdit={false} />
          )}
        </div>
      </Layout>
    </>
  );
};
