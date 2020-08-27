import React, { useState } from 'react';
import { TextField, FormControl, Switch, Divider } from '@material-ui/core';
import { TextMessage } from '../../../lang/TextMessage';
import 'react-quill/dist/quill.snow.css';
import { AnotationModal } from './AnotationModal';
import { IViewGeneralFeatures } from '../../../data/IViewGeneralFeatures';
import { useInputValue, useCheckValue } from '../../../hooks/useInput';
import { propsFeatures } from '../../../data/propsFeatures';

export const GeneralMedicalFeatures = ({
  infoGeneral,
  readOnly,
}: propsFeatures) => {
  const height = useInputValue(infoGeneral?.pacient_height || '');
  const weight = useInputValue(infoGeneral?.pacient_weight || '');
  const drink = useCheckValue(infoGeneral?.pacient_drink || false);
  const smokes = useCheckValue(infoGeneral?.pacient_smoke || false);

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
                {...height}
                disabled={readOnly}
              />
            </FormControl>
            <FormControl className='w-full md:w-3/12'>
              <TextField
                id='float-document'
                name='document'
                variant='outlined'
                label={TextMessage('evolution.generalfeature-weight')}
                {...weight}
                disabled={readOnly}
              />
            </FormControl>
            <FormControl className='w-full md:w-2/12 lg:w-1/12'>
              <div className='flex flex-col space-y-1 items-center'>
                <label htmlFor='input-people'>
                  {TextMessage('evolution.generalfeature-drink')}
                </label>
                <div className='p-col-7'>
                  <Switch
                    name='person'
                    color='primary'
                    {...drink}
                    disabled={readOnly}
                  />
                </div>
              </div>
            </FormControl>
            <FormControl className='w-full md:w-2/12 lg:w-1/12'>
              <div className='flex flex-col space-y-1 items-center'>
                <label htmlFor='input-people'>
                  {TextMessage('evolution.generalfeature-smokes')}
                </label>
                <div className='p-col-7'>
                  <Switch
                    name='person'
                    color='primary'
                    {...smokes}
                    disabled={readOnly}
                  />
                </div>
              </div>
            </FormControl>
          </div>
        </div>
        <div className='flex flex-wrap w-full h-full justify-around'>
          <AnotationModal
            readOnly={readOnly}
            disableButton
            titleCard={TextMessage('evolution.generalfeature-vices')}
            valueAnnotation={infoGeneral?.pacient_vices}
            buttonText={TextMessage(
              'dashboard-health.professional-openAnotation'
            )}
            onSaveAnnotation={() => {}}
            saveText={TextMessage('evolution.generalfeature-save-or-update')}
          ></AnotationModal>
          <AnotationModal
            readOnly={readOnly}
            disableButton
            titleCard={TextMessage('evolution.generalfeature-manias')}
            valueAnnotation={infoGeneral?.pacient_manias}
            buttonText={TextMessage(
              'dashboard-health.professional-openAnotation'
            )}
            onSaveAnnotation={() => {}}
            saveText={TextMessage('evolution.generalfeature-save-or-update')}
          ></AnotationModal>
          <AnotationModal
            readOnly={readOnly}
            disableButton
            titleCard={TextMessage(
              'evolution.generalfeature-family-background'
            )}
            valueAnnotation={infoGeneral?.pacient_family_background}
            buttonText={TextMessage(
              'dashboard-health.professional-openAnotation'
            )}
            onSaveAnnotation={() => {}}
            saveText={TextMessage('evolution.generalfeature-save-or-update')}
          ></AnotationModal>
          <AnotationModal
            readOnly={readOnly}
            disableButton
            titleCard={TextMessage('evolution.generalfeature-medical')}
            valueAnnotation={infoGeneral?.pacient_medical_history}
            buttonText={TextMessage(
              'dashboard-health.professional-openAnotation'
            )}
            onSaveAnnotation={() => {}}
            saveText={TextMessage('evolution.generalfeature-save-or-update')}
          ></AnotationModal>
          <AnotationModal
            readOnly={readOnly}
            disableButton
            titleCard={TextMessage('evolution.generalfeature-quirurjical')}
            valueAnnotation={infoGeneral?.pacient_surgery_history}
            buttonText={TextMessage(
              'dashboard-health.professional-openAnotation'
            )}
            onSaveAnnotation={() => {}}
            saveText={TextMessage('evolution.generalfeature-save-or-update')}
          ></AnotationModal>
          <AnotationModal
            readOnly={readOnly}
            disableButton
            titleCard={TextMessage(
              'evolution.generalfeature-traimatic_background'
            )}
            valueAnnotation={infoGeneral?.pacient_traumatic_background}
            buttonText={TextMessage(
              'dashboard-health.professional-openAnotation'
            )}
            onSaveAnnotation={() => {}}
            saveText={TextMessage('evolution.generalfeature-save-or-update')}
          ></AnotationModal>
          <AnotationModal
            readOnly={readOnly}
            disableButton
            titleCard={TextMessage('evolution.generalfeature-allergy-history')}
            valueAnnotation={infoGeneral?.pacient_allergy_history}
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
