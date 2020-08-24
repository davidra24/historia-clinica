import React, { useState, useEffect } from 'react';
import { ShowProfilePerson } from '../../components/Profile/ShowProfilePerson';
import { EditProfilePerson } from '../../components/Profile/EditProfilePerson';
import { useSelector } from 'react-redux';
import { IPerson } from '../../data/IPerson';
import { IStore } from '../../redux/types';

export const ProfilePerson = () => {
  const [show, setShow] = useState(true);
  const person: IPerson = useSelector((state: IStore) => state.person);

  const [contacts, setContacts] = useState([]);

  const firstName = person.first_name;
  const secondName = person.second_name;
  const lastName = person.last_name;
  const lastSecondName = person.last_second_name;
  const email = person.email;
  const phone = person.phone;
  const photo = person.photo;
  const genre = person.genre;
  const civilState = person.civil_state;
  const eps = person.id_eps;
  const profession = person.id_profesion;
  const stratum = person.stratum;
  const dateBirth = person.date_birth;

  return (
    <>
      {show ? (
        <ShowProfilePerson setShow={setShow} />
      ) : (
        <EditProfilePerson
          setShow={setShow}
          firstName={firstName}
          secondName={secondName}
          lastName={lastName}
          lastSecondName={lastSecondName}
          email={email}
          phone={phone}
          photo={photo}
          genre={genre}
          civilState={civilState}
          eps={eps}
          profession={profession}
          stratum={stratum}
          dateBirth={dateBirth}
          arrayContacts={contacts}
        />
      )}
    </>
  );
};
