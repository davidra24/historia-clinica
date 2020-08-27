import React, { useState } from 'react';
import { TextField, FormControl, Switch, Button } from '@material-ui/core';
import { TextMessage } from '../../../lang/TextMessage';
import 'react-quill/dist/quill.snow.css';
import { AnotationModal } from './AnotationModal';
import {
  useInputValue,
  useCheckValue,
  useQuillValue,
} from '../../../hooks/useInput';
import { propsFeatures } from '../../../data/propsFeatures';
import { post, put } from '../../../util/httpUtil';
import { IViewGeneralFeatures } from '../../../data/IViewGeneralFeatures';
import { IGeneralFeatures } from '../../../data/IGeneralFeatures';
import { IQueries } from '../../../data/IQueries';
import { HTTP_QUERIES, HTTP_GENERAL_FEATURES } from '../../../util/constants';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../../../redux/types';
import { useAlert } from '../../../hooks/useAlert';

export const GeneralMedicalFeatures = ({
  infoGeneral,
  readOnly,
  makeQuery,
  setInfoGeneral,
  patient,
  setLoading,
}: propsFeatures) => {
  const token: string = useSelector((state: IStore) => state.token);
  const dispatch = useDispatch();
  const alert = useAlert(dispatch);

  const height = useInputValue(infoGeneral?.pacient_height || '');
  const weight = useInputValue(infoGeneral?.pacient_weight || '');
  const drink = useCheckValue(infoGeneral?.pacient_drink || false);
  const smokes = useCheckValue(infoGeneral?.pacient_smoke || false);
  const pacient_vices = useQuillValue(infoGeneral?.pacient_vices || '');
  const pacient_manias = useQuillValue(infoGeneral?.pacient_manias || '');
  const pacient_family_background = useQuillValue(
    infoGeneral?.pacient_family_background || ''
  );
  const pacient_medical_history = useQuillValue(
    infoGeneral?.pacient_medical_history || ''
  );
  const pacient_surgery_history = useQuillValue(
    infoGeneral?.pacient_surgery_history || ''
  );
  const pacient_traumatic_background = useQuillValue(
    infoGeneral?.pacient_traumatic_background || ''
  );
  const pacient_allergy_history = useQuillValue(
    infoGeneral?.pacient_allergy_history || ''
  );

  const saveOrUpdate = async () => {
    if (infoGeneral) {
      await putGeneralMedicalFeatures();
    } else {
      await postGeneralMedicalFeatures();
    }
  };

  const makeGeneralFeature = (id_query: string): IGeneralFeatures => ({
    id_query,
    height: height.value,
    weight: weight.value,
    drink: drink.value || false,
    smoke: smokes.value || false,
    vices: pacient_vices.value,
    manias: pacient_manias.value,
    family_background: pacient_family_background.value,
    medical_history: pacient_medical_history.value,
    surgery_history: pacient_surgery_history.value,
    traumatic_background: pacient_traumatic_background.value,
    allergy_history: pacient_allergy_history.value,
  });

  const postGeneralMedicalFeatures = async () => {
    setLoading(true);
    const query = makeQuery('CMG');
    const response = await post<string>(HTTP_QUERIES, { query }, token);
    if (response) {
      const { ok, data, message } = response;
      console.log('date query', data);
      if (ok) {
        const generalMedicalFeatures = makeGeneralFeature(data);
        const document = patient.document;
        const response = await post<IViewGeneralFeatures>(
          HTTP_GENERAL_FEATURES,
          { generalMedicalFeatures, document },
          token
        );
        if (response) {
          const { ok, data, message } = response;
          if (ok) {
            setInfoGeneral(data);
            alert('app.success', message, 'success');
          } else {
            alert('app.error', message, 'error');
          }
        } else {
          alert('app.error', message, 'error');
        }
      } else {
        alert('app.error', message, 'error');
      }
    } else {
      alert('app.error', 'app.nocomplete', 'error');
    }
    setLoading(false);
  };

  const putGeneralMedicalFeatures = async () => {
    setLoading(true);
    const generalMedicalFeatures = makeGeneralFeature(infoGeneral.query_id);
    const document = patient.document;
    const response = await put<IViewGeneralFeatures>(
      HTTP_GENERAL_FEATURES,
      infoGeneral.id_features,
      { generalMedicalFeatures, document },
      token
    );
    if (response) {
      const { ok, data, message } = response;
      if (ok) {
        setInfoGeneral(data);
        alert('app.success', message, 'success');
      } else {
        alert('app.error', message, 'error');
      }
    } else {
      alert('app.error', 'app.nocomplete', 'error');
    }
    setLoading(false);
  };

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
                type='number'
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
                type='number'
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
            annotation={pacient_vices}
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
            annotation={pacient_manias}
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
            annotation={pacient_family_background}
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
            annotation={pacient_medical_history}
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
            annotation={pacient_surgery_history}
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
            annotation={pacient_traumatic_background}
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
            annotation={pacient_allergy_history}
            buttonText={TextMessage(
              'dashboard-health.professional-openAnotation'
            )}
            onSaveAnnotation={() => {}}
            saveText={TextMessage('evolution.generalfeature-save-or-update')}
          ></AnotationModal>
        </div>
        {!readOnly && (
          <div className='flex justify-center my-2'>
            <Button variant='contained' color='primary' onClick={saveOrUpdate}>
              {TextMessage('evolution.generalfeature-save-or-update')}
            </Button>
          </div>
        )}
      </div>
    </>
  );
};
