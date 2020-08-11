import React from 'react';
import { TextMessage } from '../lang/TextMessage';

export const NotFound = () => (
  <>
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
    <h1 className='text__404'>
      <strong className='p-grid p-justify-center'>
        {TextMessage('state.404')}
      </strong>
    </h1>
  </>
);
