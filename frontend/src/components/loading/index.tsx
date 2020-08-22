import React from 'react';
import { TextMessage } from '../../lang/TextMessage';

export const Loading = () => (
  <>
    <div className='loader__container flex flex-col justify-center items-center z-50'>
      <div className='loadingio-spinner-heart-cq15qnahe7'>
        <div className='ldio-8f0cckgxshs'>
          <div>
            <div></div>
          </div>
        </div>
      </div>
      <h1 className='text-5xl'>{TextMessage('app.loading')}</h1>
    </div>
  </>
);
