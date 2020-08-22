import React, { useEffect, useState } from 'react';
import { IStore } from '../redux/types';
import { useSelector, useDispatch } from 'react-redux';
import { getOne } from '../util/httpUtil';
import { HTTP_HEALTH_CENTER, HTTP_PEOPLE } from '../util/constants';
import { Loading } from '../components/loading';
import { Redirect } from 'react-router';
import { menu } from '../redux/actions';
import { useCookies } from 'react-cookie';

export const Dashboard = () => {
  const user = useSelector((state: IStore) => state.user);
  const person = useSelector((state: IStore) => state.person);
  const healthCenter = useSelector((state: IStore) => state.healthCenter);

  const [cookie, setCookie, removeCookie] = useCookies(['token']);

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const { token } = cookie;
    console.log(token);

    dispatch(menu(false));
    console.log('user', user);

    if (user?.document_type) {
      if (!person) {
        getPerson(token);
      }
    } else {
      if (!healthCenter) {
        getHealthCareCenter(token);
      }
    }
  }, []);

  const getPerson = async (token: string) => {
    setLoading(true);
    const response = await getOne(HTTP_PEOPLE, user?.document, token);
    console.log('Response', response);
    setLoading(false);
  };

  const getHealthCareCenter = async (token: string) => {
    setLoading(true);
    const response = await getOne(HTTP_HEALTH_CENTER, user?.document, token);
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
