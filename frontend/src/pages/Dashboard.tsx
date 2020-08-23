import React, { useEffect, useState } from 'react';
import { IStore } from '../redux/types';
import { useSelector, useDispatch } from 'react-redux';
import { setPerson, setHealthCenter } from '../redux/actions';
import { getOne } from '../util/httpUtil';
import { HTTP_HEALTH_CENTER, HTTP_PEOPLE } from '../util/constants';
import { Loading } from '../components/Loading';
import { Redirect } from 'react-router';
import { menu } from '../redux/actions';
import { useCookies } from 'react-cookie';
import { TextMessage } from '../lang/TextMessage';
import { useHistory } from 'react-router';

export const Dashboard = () => {
  const user = useSelector((state: IStore) => state.user);
  const person = useSelector((state: IStore) => state.person);
  const healthCenter = useSelector((state: IStore) => state.healthCenter);
  const history = useHistory();

  const [cookie, setCookie, removeCookie] = useCookies(['token']);

  const [name, setName] = useState('');
  const [loading, setLoading] = useState(true);
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
      setLoading(false);
    } else {
      if (!healthCenter) {
        getHealthCareCenter(token);
      }
      setLoading(false);
    }
  }, []);

  const getPerson = async (token: string) => {
    const response = await getOne(HTTP_PEOPLE, user?.document, token);
    if (response) {
      const { ok, data } = response;
      if (ok) {
        dispatch(setPerson(data));
      } else {
        history.push('/completeRegister');
      }
    }
  };

  const getHealthCareCenter = async (token: string) => {
    const response = await getOne(HTTP_HEALTH_CENTER, user?.document, token);
    if (response) {
      const { ok, data } = response;
      if (ok) {
        dispatch(setHealthCenter(data));
      } else {
        history.push('/completeRegister');
      }
    }
  };

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className='h-full'>
          <h1>
            {TextMessage('app.welcome')}
            {(person && ` ${person.first_name} ${person.last_name}`) ||
              (healthCenter && `${healthCenter.name}`)}
          </h1>
        </div>
      )}
    </>
  );
};
