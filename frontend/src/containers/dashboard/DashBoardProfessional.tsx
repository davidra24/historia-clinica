import React from 'react';
import { IStore } from '../../redux/types';
import { useSelector } from 'react-redux';
import { TextMessage } from '../../lang/TextMessage';

export const DashBoardProfessional = () => {
  const person = useSelector((state: IStore) => state.person);
  return (
    <>
      <div className='h-full'>
        <h1>
          {TextMessage('app.welcome')}
          {person && ` ${person.first_name} ${person.last_name}`}
        </h1>
      </div>
    </>
  );
};
