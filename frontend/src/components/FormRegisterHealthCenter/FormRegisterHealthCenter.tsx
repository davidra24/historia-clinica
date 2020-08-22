import React from 'react';
import { Card } from '@material-ui/core';
import { TextMessage } from '../../lang/TextMessage';

export const FormRegisterHealthCenter = ({ onSubmit }: any) => {
  return (
    <>
      <Card className='w-12/12 md:10/12 lg:8/12 xl:6/12'>
        <div className='flex justify-center mb-2'>
          <h1 className='text-2xl'>
            <strong>{TextMessage('register')}</strong>
          </h1>
        </div>
      </Card>
    </>
  );
};
