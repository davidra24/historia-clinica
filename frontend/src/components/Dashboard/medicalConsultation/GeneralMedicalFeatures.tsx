import React, { useState } from 'react';
import { TextField, FormControl, Switch, Divider } from '@material-ui/core';
import { TextMessage } from '../../../lang/TextMessage';
import 'react-quill/dist/quill.snow.css';
import { AnotationModal } from './AnotationModal';

export const GeneralMedicalFeatures = () => {
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
        <div className='flex flex-wrap w-full h-full justify-around'>
          <AnotationModal
            titleCard={TextMessage('evolution.generalfeature-vices')}
            valueAnnotation={''}
            buttonText={TextMessage(
              'dashboard-health.professional-openAnotation'
            )}
            onSaveAnnotation={() => {}}
            saveText={TextMessage('evolution.generalfeature-save-or-update')}
          ></AnotationModal>
          <AnotationModal
            titleCard={TextMessage('evolution.generalfeature-manias')}
            valueAnnotation={''}
            buttonText={TextMessage(
              'dashboard-health.professional-openAnotation'
            )}
            onSaveAnnotation={() => {}}
            saveText={TextMessage('evolution.generalfeature-save-or-update')}
          ></AnotationModal>
          <AnotationModal
            titleCard={TextMessage(
              'evolution.generalfeature-family-background'
            )}
            valueAnnotation={''}
            buttonText={TextMessage(
              'dashboard-health.professional-openAnotation'
            )}
            onSaveAnnotation={() => {}}
            saveText={TextMessage('evolution.generalfeature-save-or-update')}
          ></AnotationModal>
          <AnotationModal
            titleCard={TextMessage('evolution.generalfeature-medical')}
            valueAnnotation={''}
            buttonText={TextMessage(
              'dashboard-health.professional-openAnotation'
            )}
            onSaveAnnotation={() => {}}
            saveText={TextMessage('evolution.generalfeature-save-or-update')}
          ></AnotationModal>
          <AnotationModal
            titleCard={TextMessage('evolution.generalfeature-quirurjical')}
            valueAnnotation={''}
            buttonText={TextMessage(
              'dashboard-health.professional-openAnotation'
            )}
            onSaveAnnotation={() => {}}
            saveText={TextMessage('evolution.generalfeature-save-or-update')}
          ></AnotationModal>
          <AnotationModal
            titleCard={TextMessage(
              'evolution.generalfeature-traimatic_background'
            )}
            valueAnnotation={''}
            buttonText={TextMessage(
              'dashboard-health.professional-openAnotation'
            )}
            onSaveAnnotation={() => {}}
            saveText={TextMessage('evolution.generalfeature-save-or-update')}
          ></AnotationModal>
          <AnotationModal
            titleCard={TextMessage('evolution.generalfeature-allergy-history')}
            valueAnnotation={''}
            buttonText={TextMessage(
              'dashboard-health.professional-openAnotation'
            )}
            onSaveAnnotation={() => {}}
            saveText={TextMessage('evolution.generalfeature-save-or-update')}
          ></AnotationModal>
        </div>
      </div>
    </>
  );
};
