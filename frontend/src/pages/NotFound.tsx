import React from 'react';
import { TextMessage } from '../lang/TextMessage';
import { Drawer } from '../components/Drawer';
import error404 from '../assets/error-404.png';

export const NotFound = () => (
  <>
    <div className='flex flex-col items-center space-y-3'>
      <div className='sea'>
        <div className='circle-wrapper'>
          <div className='bubble' />
          <div className='submarine-wrapper'>
            <div className='submarine-body'>
              <div className='window' />
              <div className='engine' />
              <div className='light' />
            </div>
            <div className='helix' />
            <div className='hat'>
              <div className='leds-wrapper'>
                <div className='periscope' />
                <div className='leds' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <img
        src={error404}
        alt='err-404'
        className='w-8/12 md:w-4/12 lg:w-3/12 xl:w-2/12'
      />
      <h1 className='text__404 text-2xl'>
        <strong className='flex justify-center items-center'>
          {TextMessage('state.404')}
        </strong>
      </h1>
    </div>
  </>
);
