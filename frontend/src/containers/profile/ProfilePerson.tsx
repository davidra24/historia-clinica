import React, { useState, useEffect } from 'react';
import { ShowProfilePerson } from '../../components/Profile/ShowProfilePerson';
import { EditProfilePerson } from '../../components/Profile/EditProfilePerson';
import { useSelector } from 'react-redux';
import { IPerson } from '../../data/IPerson';
import { IStore } from '../../redux/types';

export const ProfilePerson = () => {
  const [show, setShow] = useState(true);
  const person: IPerson = useSelector((state: IStore) => state.person);

  console.log(person);

  return <>{show ? <ShowProfilePerson /> : <EditProfilePerson />}</>;
};
