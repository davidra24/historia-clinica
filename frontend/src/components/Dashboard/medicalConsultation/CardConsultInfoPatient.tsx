import React from 'react';
import { Card, Divider } from '@material-ui/core';
import { TextMessage } from '../../../lang/TextMessage';
import { IPerson } from '../../../data/IPerson';
import { DEFAULT_PROFILE_PIC } from '../../../util/constants';
import { birthday } from '../../../util/Util';

interface propsConsultPatient {
  patient: IPerson | any;
}

export const CardConsultInfoPatient = ({ patient }: propsConsultPatient) => (
  <Card className='flex flex-col justify-center w-10/12 md:w-7/12 h-full rounded-full mt-2 md:mt-6 ml-auto md:ml-1 md:mr-2 mr-auto pt-15 pb-15 md:p-5 items-center'>
    <h3 className='text-center text-xl mt-2 mb-1 md:mb-4 pt-8 md:pt-0'>
      <strong>{TextMessage('dashboard-professional.title-info')}</strong>
    </h3>
    <div className='flex flex-col w-full pb-10'>
      <div className='flex justify-center mb-4'>
        <img
          className='rounded-full w-24 h-24'
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
              {TextMessage('dashboard-professional.patient-consult-name')}
            </strong>
          </div>
          <div className='flex justify-center md:justify-end lg:mr-16 xl:mr-24'>
            <p className='text-base text-gray-700 flex'>
              {patient &&
                ` ${patient?.first_name} ${
                  patient?.second_name ? patient?.second_name : ''
                } ${patient?.last_name} ${
                  patient?.last_second_name ? patient?.last_second_name : ''
                }`}
            </p>
          </div>
        </div>
        <div className='flex flex-col md:flex-row w-full justify-between'>
          <div className='flex justify-center lg:justify-start lg:ml-16 xl:ml-24 mb-1'>
            <strong className='flex text-lg text-left'>
              {TextMessage('dashboard-professional.patient-consult-genre')}
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
              {TextMessage('dashboard-professional.patient-consult-birth')}
            </strong>
          </div>
          <div className='flex justify-center md:justify-end lg:mr-16 xl:mr-24'>
            <p className='text-base text-gray-700 flex'>
              {patient?.date_birth && `${birthday(patient?.date_birth)} `}
              {patient?.date_birth &&
                TextMessage('dashboard-professional.patient-consult-birth-age')}
            </p>
          </div>
        </div>
      </div>
    </div>
  </Card>
);
