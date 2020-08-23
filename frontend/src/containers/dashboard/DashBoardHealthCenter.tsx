import React from 'react';
import { IStore } from '../../redux/types';
import { useSelector } from 'react-redux';
import { TextMessage } from '../../lang/TextMessage';

export const DashBoardHealthCenter = () => {
  const healthCenter = useSelector((state: IStore) => state.healthCenter);
  return (
    <>
      <div className='h-full'>
        <h1>
          {TextMessage('app.welcome')}
          {healthCenter && ` ${healthCenter.name}`}
        </h1>
      </div>
    </>
  );
};
