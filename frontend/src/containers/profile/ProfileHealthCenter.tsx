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

  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading ? (
        <Loading />
      ) : show ? (
        <ShowProfileHealthCenter setShow={setShow} />
      ) : (
        <EditProfileHealthCenter
          setShow={setShow}
          name={healthCareCenter?.name}
          website={healthCareCenter?.website}
          phone={healthCareCenter?.phone}
          direction={healthCareCenter?.direction}
          email={healthCareCenter?.email}
          description={healthCareCenter?.description}
        />
      )}
    </>
  );
};
