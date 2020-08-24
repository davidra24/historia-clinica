import React from 'react';
import { IStore } from '../../redux/types';
import { useSelector } from 'react-redux';
import { HeaderWelcomePerson } from '../../components/Dashboard/HeaderWelcomePerson';

export const DashBoardProfessional = () => {
  const person = useSelector((state: IStore) => state.person);
  return (
    <>
      <div className='flex flex-col h-full'>
        <HeaderWelcomePerson
          person={person}
          principalTitle='dashboard-professional.specialties'
          principalDescription='dashboard-professional.specialties-description'
          ourPriority='dashboard-professional.specialties-description-end'
        />
      </div>
    </>
  );
};
