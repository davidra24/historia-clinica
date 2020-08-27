import React, { useState } from 'react';
import { IStore } from '../redux/types';
import { useSelector } from 'react-redux';
import { IPerson } from '../data/IPerson';
import { getOneOrMany } from '../util/httpUtil';
import {
  HTTP_PEOPLE,
  DEFAULT_PROFILE_PIC,
  HTTP_VIEW_CONSULT_GENERAL,
  HTTP_VIEW_CONSULT_PERSON,
} from '../util/constants';
import { useCookies } from 'react-cookie';
import {
  FormControl,
  TextField,
  Card,
  Button,
  Avatar,
  Divider,
} from '@material-ui/core';
import { TextMessage } from '../lang/TextMessage';
import { useInputValue } from '../hooks/useInput';
import { Loading } from '../components/Loading';
import { toRedableDate, birthday } from '../util/Util';
import { MedicalConsultation } from '../components/Dashboard/MedicalConsultation';
import { IViewGeneralFeatures } from '../data/IViewGeneralFeatures';
import { IViewQueries } from '../data/IViewQueries';
import { CardConsultInfoPatient } from '../components/Dashboard/medicalConsultation/CardConsultInfoPatient';

export const AttentionPatient = () => {
  const [patient, setPatient] = useState<IPerson>();
  const [loading, setLoading] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies(['token']);
  const [infoGeneral, setInfoGeneral] = useState<IViewGeneralFeatures | any>(
    null
  );
  const [infoQueries, setInfoQueries] = useState<Array<IViewQueries>>([]);

  const personDocument = useInputValue('');

  const selectedAttentionCenter = useSelector(
    (state: IStore) => state.selectedAttentionCenter
  );

  const getPatient = async (document: string) => {
    setLoading(true);
    const { token } = cookie;
    const response = await getOneOrMany<IPerson>(HTTP_PEOPLE, document, token);
    if (response) {
      const { ok, data } = response;
      if (ok) {
        setPatient(data);
        await getInfoConsult(data.document, token);
      }
    }
    setLoading(false);
  };

  const getInfoConsult = async (id: string, token: string) => {
    console.log('entra a promises.all');

    setLoading(true);
    const [infoGeneralView, infoQueriesView] = await Promise.all([
      getOneOrMany<IViewGeneralFeatures>(HTTP_VIEW_CONSULT_GENERAL, id, token),
      getOneOrMany<Array<IViewQueries>>(HTTP_VIEW_CONSULT_PERSON, id, token),
    ]);
    if (infoGeneralView) {
      const { ok, data } = infoGeneralView;
      if (ok) {
        console.log('data', data);

        setInfoGeneral(data);
      }
    }
    if (infoQueriesView) {
      const { ok, data } = infoQueriesView;
      if (ok) {
        setInfoQueries(data);
      }
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
                infoGeneral={infoGeneral}
                infoQueries={infoQueries}
                readOnly={false}
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};
