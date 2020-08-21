import React, { useEffect, useState } from 'react';
import { IStore } from '../redux/types';
import { useSelector, useDispatch } from 'react-redux';
import { getOne } from '../util/httpUtil';
import { HTTP_HEALTH_CENTER } from '../util/constants';
import { Loading } from '../components/Loading';
import { Redirect } from 'react-router';
import { menu } from '../redux/actions';

export const Dashboard = () => {
  const user = useSelector((state: IStore) => state.user);
  const person = useSelector((state: IStore) => state.person);
  const healthCenter = useSelector((state: IStore) => state.healthCenter);
  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    /*dispatch(menu(false));
    if (user?.documentType) {
      if (!person) {
        getPerson();
      }
    } else {
      if (!healthCenter) {
        getHealthCareCenter();
      }
    }*/
  }, []);

  const getPerson = async () => {
    setLoading(true);
    const response = await getOne(HTTP_HEALTH_CENTER, user?.document);
    console.log('Response', response);
    setLoading(false);
  };

  const getHealthCareCenter = async () => {
    setLoading(true);
    const response = await getOne(HTTP_HEALTH_CENTER, user?.document);
    console.log('Response', response);
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : !person || !healthCenter ? (
        <Redirect to='/completeRegister' />
      ) : (
        <h1>Bienvenido {name}</h1>
      )}
    </>
  );
};
