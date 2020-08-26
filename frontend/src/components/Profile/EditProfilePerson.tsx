import React from 'react';
import { profilePersonEditTypes } from '../../data/profileTypes';
import { RegisterPerson } from '../../containers/register/RegisterPerson';

export const EditProfilePerson = ({
  setShow,
  firstName,
  secondName,
  lastName,
  lastSecondName,
  email,
  phone,
  photo,
  genre,
  civilState,
  eps,
  profession,
  stratum,
  dateBirth,
  arrayContacts,
}: profilePersonEditTypes) => {
  return (
    <>
      <div className='w-full'>
        <RegisterPerson
          isEdit={true}
          firstNameInfo={firstName}
          secondNameInfo={secondName}
          lastNameInfo={lastName}
          lastSecondNameInfo={lastSecondName}
          emailInfo={email}
          phoneInfo={phone}
          photoInfo={photo}
          genreInfo={genre}
          civilStateInfo={civilState}
          epsInfo={eps}
          professionInfo={profession}
          stratumInfo={stratum}
          dateBirthInfo={dateBirth}
          arrayContacts={arrayContacts}
          setShow={setShow}
        />
      </div>
    </>
  );
};
