import React, { useState } from 'react';
import { IStore } from '../redux/types';
import { useSelector } from 'react-redux';
import { IPerson } from '../data/IPerson';
import { getOneOrMany } from '../util/httpUtil';
import { HTTP_PEOPLE, DEFAULT_PROFILE_PIC } from '../util/constants';
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

export const AttentionPatient = () => {
  const [patient, setPatient] = useState<IPerson>();
  const [loading, setLoading] = useState(false);
  const [cookie, setCookie, removeCookie] = useCookies(['token']);

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
            <Card className='flex flex-col justify-center w-10/12 md:w-7/12 h-full rounded-full mt-2 md:mt-6 ml-auto md:ml-1 md:mr-2 mr-auto pt-15 pb-15 md:p-5 items-center'>
              <h3 className='text-center text-xl mt-2 mb-1 md:mb-4 pt-8 md:pt-0'>
                <strong>
                  {TextMessage('dashboard-professional.title-info')}
                </strong>
              </h3>
              <div className='flex flex-col w-full pb-10'>
                <div className='flex justify-center mb-4'>
                  <img
                    className='rounded-full w-16 h-16'
                    src={patient?.photo ? patient?.photo : DEFAULT_PROFILE_PIC}
                    alt={patient?.document}
                  />
                </div>
                <div className='flex justify-center mb-2'>
                  <Divider className='w-8/12' />
                </div>
                <div className='flex flex-col mr-auto ml-auto w-full'>
                  <div className='flex flex-col md:flex-row w-full justify-between'>
                    <div className='flex justify-center lg:justify-start lg:ml-16 xl:ml-24 mb-1'>
                      <strong className='flex text-lg text-left'>
                        {TextMessage(
                          'dashboard-professional.patient-consult-name'
                        )}
                      </strong>
                    </div>
                    <div className='flex justify-center md:justify-end lg:mr-16 xl:mr-24'>
                      <p className='text-base text-gray-700 flex'>
                        {patient &&
                          ` ${patient?.first_name} ${
                            patient?.second_name ? patient?.second_name : ''
                          } ${patient?.last_name} ${
                            patient?.last_second_name
                              ? patient?.last_second_name
                              : ''
                          }`}
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row w-full justify-between'>
                    <div className='flex justify-center lg:justify-start lg:ml-16 xl:ml-24 mb-1'>
                      <strong className='flex text-lg text-left'>
                        {TextMessage(
                          'dashboard-professional.patient-consult-genre'
                        )}
                      </strong>
                    </div>
                    <div className='flex justify-center md:justify-end lg:mr-16 xl:mr-24'>
                      <p className='text-base text-gray-700 flex'>
                        {patient && Number(patient?.genre) === 1
                          ? TextMessage('register.form-GenreM')
                          : Number(patient?.genre) === 2
                          ? TextMessage('register.form-GenreF')
                          : Number(patient?.genre) === 3
                          ? TextMessage('register.form-GenreO')
                          : ''}
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row w-full justify-between'>
                    <div className='flex justify-center lg:justify-start lg:ml-16 xl:ml-24 mb-1'>
                      <strong className='flex text-lg text-left'>
                        {TextMessage(
                          'dashboard-professional.patient-consult-birth'
                        )}
                      </strong>
                    </div>
                    <div className='flex justify-center md:justify-end lg:mr-16 xl:mr-24'>
                      <p className='text-base text-gray-700 flex'>
                        {patient?.date_birth &&
                          `${birthday(patient?.date_birth)} `}
                        {patient?.date_birth &&
                          TextMessage(
                            'dashboard-professional.patient-consult-birth-age'
                          )}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className='mt-16 mr-auto ml-auto w-full md:w-11/12'>
            <MedicalConsultation />
          </div>
        </div>
      )}
    </>
  );
};
