import React from 'react';
import { TextMessage } from '../../lang/TextMessage';

export const NoSpecialties = ({ isHealthProfessional }: any) => (
  <>
    {isHealthProfessional ? (
      <h3 className='text-xl text-center mt-4'>
        <strong>{TextMessage('dashboard-professional.no-specialties')}</strong>
      </h3>
    ) : (
      <h3 className='text-xl text-center mt-4'>
        <strong>{TextMessage('dashboard-patient.no-specialties')}</strong>
      </h3>
    )}
  </>
);
