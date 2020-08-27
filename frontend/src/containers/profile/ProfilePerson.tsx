import React, { useState, useEffect } from 'react';
import { ShowProfilePerson } from '../../components/Profile/ShowProfilePerson';
import { EditProfilePerson } from '../../components/Profile/EditProfilePerson';
import { useSelector } from 'react-redux';
import { IPerson } from '../../data/IPerson';
import { IStore } from '../../redux/types';
import { IContact } from '../../data/IContact';
import { IEPS } from '../../data/IEPS';
import { IProfessions } from '../../data/IProfessions';
import { getOneOrMany } from '../../util/httpUtil';
import { HTTP_CONTACTS_BY_PERSON } from '../../util/constants';
import { useCookies } from 'react-cookie';
import { Loading } from '../../components/Loading';
import { HTTP_EPS, HTTP_PROFESSION } from '../../util/constants';
import { resolve } from 'url';

export const ProfilePerson = () => {
  const [show, setShow] = useState(true);
  const person: IPerson = useSelector((state: IStore) => state.person);
  const token: string = useSelector((state: IStore) => state.token);

  const [nameEPS, setNameEPS] = useState('');
  const [nameProfession, setNameProfession] = useState('');

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
    setLoading(true);
    if (getAllInfo()) {
      setLoading(false);
    }
  }, []);

  const getAllInfo = async (): Promise<boolean> => {
    setLoading(true);
    const [ContactInfo, EPSInfo, ProfessionInfo] = await Promise.all([
      await getOneOrMany<Array<IContact>>(
        HTTP_CONTACTS_BY_PERSON,
        person.document,
        token
      ),
      await getOneOrMany<IEPS>(HTTP_EPS, person.id_eps, token),
      await getOneOrMany<IProfessions>(
        HTTP_PROFESSION,
        person.id_profesion,
        token
      ),
    ]);
    if (EPSInfo.ok) {
      setNameEPS(EPSInfo.data.name);
    }
    if (ProfessionInfo.ok) {
      setNameProfession(ProfessionInfo.data.name);
    }
    if (ContactInfo.ok) {
      setContacts(ContactInfo.data);
    }
    setLoading(false);
    return await Promise.resolve(true);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : show ? (
        <ShowProfilePerson
          setShow={setShow}
          arrayContacts={contacts}
          EPSName={nameEPS}
          ProfessionName={nameProfession}
          person={person}
        />
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
