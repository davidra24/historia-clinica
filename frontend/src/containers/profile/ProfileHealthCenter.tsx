import React, { useState, useEffect } from 'react';
import { ShowProfileHealthCenter } from '../../components/Profile/ShowProfileHealthCenter';
import { EditProfileHealthCenter } from '../../components/Profile/EditProfileHealthCenter';
import { useSelector } from 'react-redux';
import { IPerson } from '../../data/IPerson';
import { IStore } from '../../redux/types';
import { IHealthCareCenter } from '../../data/IHealthCareCenter';
import { getOneOrMany } from '../../util/httpUtil';
import { HTTP_CONTACTS_BY_PERSON } from '../../util/constants';
import { useCookies } from 'react-cookie';
import { Loading } from '../../components/Loading';

export const ProfileHealthCenter = () => {
  const [show, setShow] = useState(true);
  const healthCareCenter: IHealthCareCenter = useSelector(
    (state: IStore) => state.healthCenter
  );
  const [cookie, setCookie, removeCookie] = useCookies(['token']);

  const [loading, setLoading] = useState(false);

  const name = healthCareCenter.name;
  const website = healthCareCenter.website;
  const phone = healthCareCenter.phone;
  const direction = healthCareCenter.direction;
  const email = healthCareCenter.email;
  const description = healthCareCenter.description;

  return (
    <>
      {loading ? (
        <Loading />
      ) : show ? (
        <ShowProfileHealthCenter setShow={setShow} />
      ) : (
        <EditProfileHealthCenter
          setShow={setShow}
          name={name}
          website={website}
          phone={phone}
          direction={direction}
          email={email}
          description={description}
        />
      )}
    </>
  );
};
