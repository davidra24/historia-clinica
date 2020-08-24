import React, { useState, useEffect } from 'react';
import { ShowProfilePerson } from '../../components/Profile/ShowProfilePerson';
import { EditProfilePerson } from '../../components/Profile/EditProfilePerson';
import { useSelector } from 'react-redux';
import { IPerson } from '../../data/IPerson';
import { IStore } from '../../redux/types';
import { IContact } from '../../data/IContact';
import { getOneOrMany } from '../../util/httpUtil';
import { HTTP_CONTACTS_BY_PERSON } from '../../util/constants';
import { useCookies } from 'react-cookie';
import { Loading } from '../../components/Loading';

export const ProfilePerson = () => {
  const [show, setShow] = useState(true);
  const person: IPerson = useSelector((state: IStore) => state.person);
  const [cookie, setCookie, removeCookie] = useCookies(['token']);

  const [contacts, setContacts] = useState<Array<IContact>>([]);
  const [loading, setLoading] = useState(false);

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

  useEffect(() => {
    getContacts();
  }, []);

  const getContacts = async () => {
    setLoading(true);
    const { token } = cookie;
    const response = await getOneOrMany<Array<IContact>>(
      HTTP_CONTACTS_BY_PERSON,
      person.document,
      token
    );
    if (response) {
      const { ok, data } = response;
      if (ok) {
        setContacts(data);
      }
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : show ? (
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
