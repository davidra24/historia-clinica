import React from 'react';
import { IStore } from '../redux/types';
import { useSelector } from 'react-redux';
import { IPerson } from '../data/IPerson';
import { Redirect } from 'react-router';
import { SpecialtiesPatient } from '../containers/specialties/SpecialtiesPatient';

export const Specialties = () => {
  const person: IPerson = useSelector((state: IStore) => state.person);

  return (
    <>
      {!person || (person.is_healt_care_team && <Redirect to='/' />)}
      <SpecialtiesPatient />
    </>
  );
};
