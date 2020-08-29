import React from 'react';
import { useSelector } from 'react-redux';
import { IStore } from '../../redux/types';
import { IPerson } from '../../data/IPerson';
import { CardConsultInfoPatient } from '../../components/Dashboard/medicalConsultation/CardConsultInfoPatient';
import { MedicalConsultation } from '../../components/Dashboard/MedicalConsultation';
import { useParams } from 'react-router';
import { Layout } from '../../components/App/Layout';

export const SpecialtiesPatient = () => {
  const person: IPerson = useSelector((state: IStore) => state.person);
  const { id } = useParams();

  return (
    <>
      <Layout
        title={'app.specialties-title'}
        subtitle={'app.specialties-subtitle'}
      >
        <div className='flex flex-col w-full'>
          <div className='flex justify-center w-full'>
            <CardConsultInfoPatient patient={person} />
          </div>
          <div className='flex justify-center w-full'>
            <div className='mt-16 mr-auto ml-auto w-full md:w-11/12'>
              <MedicalConsultation
                patient={person}
                readOnly={true}
                specialtyId={id}
              />
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};
