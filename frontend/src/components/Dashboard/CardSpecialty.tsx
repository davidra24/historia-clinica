import React from 'react';
import { Card, Divider } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { PropsCardSpecialty } from '../../data/PropsCardSpecialty';

export const CardSpecialty = ({
  name,
  description,
  healtCenter,
  onClick,
  active,
}: PropsCardSpecialty) => (
  <Card
    className={`flex flex-col w-full md:w-5/12 lg:w-3/12 min-h-56 max-h-full rounded-full m-4 p-2 ${
      !active ? 'opacity-25 cursor-not-allowed' : 'cursor-pointer'
    }`}
    onClick={onClick}
  >
    <div className='flex flex-col p-4'>
      <h2 className='text-lg text-center mb-2'>
        <strong>{name}</strong>
      </h2>
      <div className='flex justify-center'>
        <Divider className='w-10/12' />
      </div>
      <p className='flex text-sm text-justify m-2 items-center text-gray-700'>
        {description}
      </p>
      {healtCenter && (
        <p className='text-center text-xs text-gray-600'>{healtCenter}</p>
      )}
    </div>
  </Card>
);
