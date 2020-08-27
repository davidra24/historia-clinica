import React, { useEffect, useState } from 'react';
import { IStore } from '../redux/types';
import { useSelector, useDispatch } from 'react-redux';
import { setPerson, setHealthCenter, setReloadPath } from '../redux/actions';
import { getOneOrMany } from '../util/httpUtil';
import { HTTP_HEALTH_CENTER, HTTP_PEOPLE } from '../util/constants';
import { Loading } from '../components/Loading';
import { menu } from '../redux/actions';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router';
import { DashBoardHealthCenter } from '../containers/dashboard/DashBoardHealthCenter';
import { DashBoardProfessional } from '../containers/dashboard/DashBoardProfessional';
import { DashBoardPatient } from '../containers/dashboard/DashBoardPatient';
import { IPerson } from '../data/IPerson';
import { IHealthCareCenter } from '../data/IHealthCareCenter';
import { DashboardSelection } from '../containers/dashboard/DashboardSelection';

export const Dashboard = () => {
  const user = useSelector((state: IStore) => state.user);
  const person = useSelector((state: IStore) => state.person);
  const healthCenter = useSelector((state: IStore) => state.healthCenter);
  const reloadRoute = useSelector((state: IStore) => state.reloadRoute);
  const token: string = useSelector((state: IStore) => state.token);
  const history = useHistory();

  //TODO -> Eliminar en producción
  //history.push(reloadRoute);

  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(menu(false));
    if (user.document_type) {
      if (!person) {
        getPerson();
      }
    } else {
      if (!healthCenter) {
        getHealthCareCenter();
      }
    }
  }, []);

  const getPerson = async () => {
    setLoading(true);
    const response = await getOneOrMany<IPerson>(
      HTTP_PEOPLE,
      user.document,
      token
    );
    if (response) {
      const { ok, data } = response;
      if (ok) {
        dispatch(setPerson(data));
        console.log('person', data);
      } else {
        history.push('/completeRegister');
      }
    }
    setLoading(false);
  };

  const getHealthCareCenter = async () => {
    setLoading(true);
    const response = await getOneOrMany<IHealthCareCenter>(
      HTTP_HEALTH_CENTER,
      user.document,
      token
    );
    if (response) {
      console.log('response health', response);
      const { ok, data } = response;
      if (ok) {
        dispatch(setHealthCenter(data));
      } else {
        history.push('/completeRegister');
      }
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {person ? (
            !person.is_health_care_team ? (
              <DashBoardPatient />
            ) : (
              <DashboardSelection />
            )
          ) : (
            <DashBoardHealthCenter />
          )}
        </>
      )}
    </>
  );
};
