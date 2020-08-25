import React, { useState } from 'react';
import { TextField, FormControl, Switch, Divider } from '@material-ui/core';
import { TextMessage } from '../../../lang/TextMessage';
import 'react-quill/dist/quill.snow.css';

export const GeneralMedicalFeatures = () => {
  const ReactQuill = require('react-quill');
  const [value, setValue] = useState('');

  return (
    <>
      <div className='flex flex-col w-full justify-center'>
        <div className='flex flex-row w-full justify-center items-center'>
          <div className='w-11/12 md:w-8/12 lg:w-6/12 flex flex-col md:flex-row justify-center md:justify-around'>
            <FormControl className='w-full md:w-3/12'>
              <TextField
                id='float-document'
                name='document'
                variant='outlined'
                label={TextMessage('evolution.generalfeature-height')}
              />
            </FormControl>
            <FormControl className='w-full md:w-3/12'>
              <TextField
                id='float-document'
                name='document'
                variant='outlined'
                label={TextMessage('evolution.generalfeature-weight')}
              />
            </FormControl>
            <FormControl className='w-full md:w-2/12 lg:w-1/12'>
              <div className='flex flex-col space-y-1 items-center'>
                <label htmlFor='input-people'>
                  {TextMessage('evolution.generalfeature-drink')}
                </label>
                <div className='p-col-7'>
                  <Switch name='person' color='primary' />
                </div>
              </div>
            </FormControl>
            <FormControl className='w-full md:w-2/12 lg:w-1/12'>
              <div className='flex flex-col space-y-1 items-center'>
                <label htmlFor='input-people'>
                  {TextMessage('evolution.generalfeature-smokes')}
                </label>
                <div className='p-col-7'>
                  <Switch name='person' color='primary' />
                </div>
              </div>
            </FormControl>
          </div>
        </div>
        <div></div>
        <div className='flex flex-col justify-center md:justify-around'>
          <div className='flex flex-col md:flex-row w-full h-full justify-around mt-6 md:mb-6 md:pb-10'>
            <div className='w-full h-40 pb-16 md:pb-3'>
              <h4 className='text-center'>
                <strong>{TextMessage('evolution.generalfeature-vices')}</strong>
              </h4>
              <ReactQuill
                className='w-10/12 mr-auto ml-auto mt-auto mb-auto h-full pb-10'
                theme='snow'
                value={value}
                onChange={setValue}
              />
            </div>
            <div className='w-full h-40 pb-16 md:pb-3'>
              <h4 className='text-center'>
                <strong>
                  {TextMessage('evolution.generalfeature-manias')}
                </strong>
              </h4>
              <ReactQuill
                className='w-10/12 mr-auto ml-auto mt-auto mb-auto h-full pb-10'
                theme='snow'
                value={value}
                onChange={setValue}
              />
            </div>
            <div className='w-full h-40 pb-16 md:pb-3'>
              <h4 className='text-center'>
                <strong>
                  {TextMessage('evolution.generalfeature-family-background')}
                </strong>
              </h4>
              <ReactQuill
                className='w-10/12 mr-auto ml-auto mt-auto mb-auto h-full pb-10'
                theme='snow'
                value={value}
                onChange={setValue}
              />
            </div>
          </div>
          <div className='flex flex-col md:flex-row w-full h-full justify-around mt-6 mb-6 pb-10'>
            <div className='w-full h-40 pb-16 md:pb-3'>
              <h4 className='text-center'>
                <strong>
                  {TextMessage(
                    'evolution.generalfeature-medical-and surgery-history'
                  )}
                </strong>
              </h4>
              <ReactQuill
                className='w-10/12 mr-auto ml-auto mt-auto mb-auto h-full pb-10'
                theme='snow'
                value={value}
                onChange={setValue}
              />
            </div>
            <div className='w-full h-40 pb-16 md:pb-3'>
              <h4 className='text-center'>
                <strong>
                  {TextMessage('evolution.generalfeature-traimatic_background')}
                </strong>
              </h4>
              <ReactQuill
                className='w-10/12 mr-auto ml-auto mt-auto mb-auto h-full pb-10'
                theme='snow'
                value={value}
                onChange={setValue}
              />
            </div>
            <div className='w-full h-40 pb-16 md:pb-3'>
              <h4 className='text-center'>
                <strong>
                  {TextMessage('evolution.generalfeature-allergy-history')}
                </strong>
              </h4>
              <ReactQuill
                className='w-10/12 mr-auto ml-auto mt-auto mb-auto h-full pb-10'
                theme='snow'
                value={value}
                onChange={setValue}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
