import React, { useState } from 'react';
import { IStore } from '../redux/types';
import { useSelector, useDispatch } from 'react-redux';
import { IPerson } from '../data/IPerson';
import { getOneOrMany } from '../util/httpUtil';
import {
  HTTP_PEOPLE,
  DEFAULT_PROFILE_PIC,
  HTTP_VIEW_CONSULT_GENERAL,
  HTTP_VIEW_CONSULT_PERSON,
  HTTP_VIEW_CONSULT_PERSON_SPECIALTY,
} from '../util/constants';
import { useCookies } from 'react-cookie';
import { FormControl, TextField, Card, Button } from '@material-ui/core';
import { TextMessage } from '../lang/TextMessage';
import { useInputValue } from '../hooks/useInput';
import { Loading } from '../components/Loading';
import { MedicalConsultation } from '../components/Dashboard/MedicalConsultation';
import { CardConsultInfoPatient } from '../components/Dashboard/medicalConsultation/CardConsultInfoPatient';
import { IViewAttentionCenter } from '../data/IViewAttentionCenter';
import { useAlert } from '../hooks/useAlert';

export const AttentionPatient = () => {
  const [patient, setPatient] = useState<IPerson | any>(null);
  const [loading, setLoading] = useState(false);
  const token: string = useSelector((state: IStore) => state.token);
  const dispatch = useDispatch();
  const alert = useAlert(dispatch);

  const personDocument = useInputValue('');

  const selectedAttentionCenter: IViewAttentionCenter = useSelector(
    (state: IStore) => state.selectedAttentionCenter
  );

  const getPatient = async (document: string) => {
    setLoading(true);
    const response = await getOneOrMany<IPerson>(HTTP_PEOPLE, document, token);
    if (response) {
      const { ok, data } = response;
      if (ok) {
        setPatient(data);
        alert('app.success', 'getPeople.get-Patient', 'success');
      } else {
        alert('app.error', 'getPeople.err-get-Patient', 'error');
        setPatient(null);
      }
    } else {
      alert('app.error', 'getPeople.err-get-Patient', 'error');
      setPatient(null);
    }
    setLoading(false);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (!personDocument.value) {
      return;
    }
    getPatient(personDocument.value);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='flex flex-col justify-center w-screen'>
          <div className='flex flex-col md:flex-row justify-center md:justify-around w-full mr-auto ml-auto'>
            <Card className='flex flex-col justify-center w-10/12 md:w-4/12 rounded-full mt-6 ml-auto md:ml-2 mr-auto md:mr-1 p-10 h-full'>
              <h3 className='text-center text-xl mt-2 mb-4'>
                <strong>
                  {TextMessage('dashboard-professional.title-consult')}
                </strong>
              </h3>
              <form className='w-full' onSubmit={handleSubmit}>
                <div className='flex flex-col justify-center items-center space-y-2 w-full'>
                  <FormControl className='w-full'>
                    <TextField
                      id='float-document'
                      name='document'
                      variant='outlined'
                      label={TextMessage(
                        'dashboard-professional.patient-document'
                      )}
                      {...personDocument}
                    />
                  </FormControl>
                  <Button
                    className='w-10/12'
                    variant='outlined'
                    color='primary'
                    type='submit'
                  >
                    {TextMessage('dashboard-professional.patient-consult')}
                  </Button>
                </div>
              </form>
            </Card>
            <CardConsultInfoPatient patient={patient} />
          </div>
          {patient && (
            <div className='mt-16 mr-auto ml-auto w-full md:w-11/12'>
              <MedicalConsultation
                patient={patient}
                readOnly={false}
                selectedAttentionCenter={selectedAttentionCenter}
                specialtyId={selectedAttentionCenter.specialty_id}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};
