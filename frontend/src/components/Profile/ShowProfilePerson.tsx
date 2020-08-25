import React, { useState, useEffect } from 'react';
import { profilePersonShowTypes } from '../../data/profileTypes';
import { useCookies } from 'react-cookie';
import { HTTP_EPS, HTTP_PROFESSION } from '../../util/constants';
import { useDispatch, useSelector } from 'react-redux';
import {
  SnackTitleMsg,
  SnackMsg,
  setMsgErrorVisbility,
  selectEPS,
  selectProfessions,
  setProfession,
  setEps,
} from '../../redux/actions';
import { IStore } from '../../redux/types';
import { IPerson } from '../../data/IPerson';
import { Loading } from '../Loading';
import { IEPS } from '../../data/IEPS';
import { IProfessions } from '../../data/IProfessions';
import { TextMessage } from '../../lang/TextMessage';
import { useHistory } from 'react-router';
import { getOneOrMany } from '../../util/httpUtil';

export const ShowProfilePerson = ({
  setShow,
  arrayContacts,
}: profilePersonShowTypes) => {
  const [cookie] = useCookies(['token']);
  const person: IPerson = useSelector((state: IStore) => state.person);
  const [token, setToken] = useState(cookie.token);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const listEps = useSelector((state: IStore) => state.listEPS);
  const listProfessions = useSelector((state: IStore) => state.listProfessions);
  const history = useHistory();

  useEffect(() => {
    if (listEps.length === 0) {
      fetchEPS();
    }
    if (listProfessions.length === 0) {
      fetchProfessions();
    }
  }, []);

  const fetchEPS = async () => {
    setLoading(true);
    const response = await getOneOrMany<IEPS>(HTTP_EPS, person.id_eps, token);
    if (response) {
      const { message } = response;
      if (response.ok) {
        const { data } = response;
        console.log(data.name);
        dispatch(setEps(data));
      } else {
        dispatch(SnackTitleMsg('register.form-errFetchEPS'));
        dispatch(SnackMsg(message));
        dispatch(setMsgErrorVisbility(true));
      }
    } else {
      dispatch(SnackTitleMsg('register.form-errFetchEPS'));
      dispatch(SnackMsg('app.err-connect'));
      dispatch(setMsgErrorVisbility(true));
    }
    setLoading(false);
  };

  const fetchProfessions = async () => {
    setLoading(true);
    const response = await getOneOrMany<IProfessions>(
      HTTP_PROFESSION,
      person.id_profesion,
      token
    );
    if (response) {
      const { message } = response;
      if (response.ok) {
        const { data } = response;
        dispatch(setProfession(data));
      } else {
        dispatch(SnackTitleMsg('register.form-errFetchProfession'));
        dispatch(SnackMsg(message));
        dispatch(setMsgErrorVisbility(true));
      }
    } else {
      dispatch(SnackTitleMsg('register.form-errFetchProfession'));
      dispatch(SnackMsg('app.err-connect'));
      dispatch(setMsgErrorVisbility(true));
    }
    setLoading(false);
  };

  return (
    <>
      {loading ? (
        <div className='h-screen flex opacity-100'>
          <Loading />
        </div>
      ) : (
        <div className='flex justify-center items-center'>
          <div className='container mx-auto px-4'>
            <div className='flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-20'>
              <div className='px-6'>
                <div className='flex flex-wrap justify-center'>
                  <div className='w-full lg:w-3/12 px-4 lg:order-2 flex justify-center'>
                    <div className=''>
                      <img
                        alt='...'
                        src={person.photo}
                        className='shadow-xl rounded-full h-auto align-middle border-none absolute w-24 -m-16 -ml-20 lg:-ml-16'
                      />
                    </div>
                  </div>
                </div>
                <div className='text-center mt-12'>
                  <h3 className='text-4xl font-semibold leading-normal mb-2 text-gray-800'>
                    {`${person.first_name} ${
                      person.second_name ? person.second_name : ''
                    } ${person.last_name} ${
                      person.last_second_name ? person.last_second_name : ''
                    }`}
                  </h3>
                  <div className='text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase'>
                    <i className='fas fa-map-marker-alt mr-2 text-lg text-gray-500'></i>{' '}
                    {person.document}
                  </div>
                </div>
                <div className='mt-10 py-10 border-t border-gray-300 text-center'>
                  <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                    <div className='w-full lg:w-9/12 px-4'>
                      <p className='mb-1 text-lg leading-relaxed'>
                        <strong>{TextMessage('profile.email')}</strong>
                      </p>
                      <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                        {person.email}
                      </p>
                    </div>
                    <div className='w-full lg:w-9/12 px-4'>
                      <p className='mb-1 text-lg leading-relaxed'>
                        <strong>{TextMessage('profile.phone')}</strong>
                      </p>
                      <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                        {person.phone}
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                    <div className='w-full lg:w-9/12 px-4'>
                      <p className='mb-1 text-lg leading-relaxed'>
                        <strong>{TextMessage('profile.genre')}</strong>
                      </p>
                      <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                        {person.genre == 1
                          ? TextMessage('register.form-GenreM')
                          : person.genre == 2
                          ? TextMessage('register.form-GenreF')
                          : person.genre == 3
                          ? TextMessage('register.form-GenreO')
                          : ''}
                      </p>
                    </div>
                    <div className='w-full lg:w-9/12 px-4'>
                      <p className='mb-1 text-lg leading-relaxed'>
                        <strong>{TextMessage('profile.civil-state')}</strong>
                      </p>
                      <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                        {person.civil_state == 'S'
                          ? TextMessage('register.form-CivilStateS')
                          : person.civil_state == 'C'
                          ? TextMessage('register.form-CivilStateC')
                          : person.civil_state == 'D'
                          ? TextMessage('register.form-CivilStateD')
                          : person.civil_state == 'V'
                          ? TextMessage('register.form-CivilStateV')
                          : person.civil_state == 'U'
                          ? TextMessage('register.form-CivilStateU')
                          : ''}
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                    <div className='w-full lg:w-9/12 px-4'>
                      <p className='mb-1 text-lg leading-relaxed'>
                        <strong>{TextMessage('profile.eps')}</strong>
                      </p>
                      <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                        {person.id_eps}
                      </p>
                    </div>
                    <div className='w-full lg:w-9/12 px-4'>
                      <p className='mb-1 text-lg leading-relaxed'>
                        <strong>{TextMessage('profile.stratum')}</strong>
                      </p>
                      <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                        {person.stratum}
                      </p>
                    </div>
                  </div>
                  <div className='flex flex-col md:flex-row space-y-1 justify-around md:items-baseline'>
                    <div className='w-full lg:w-9/12 px-4'>
                      <p className='mb-1 text-lg leading-relaxed'>
                        <strong>{TextMessage('profile.dateBirth')}</strong>
                      </p>
                      <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                        {person.date_birth.toString().substring(8, 10) +
                          '/' +
                          person.date_birth.toString().substring(5, 7) +
                          '/' +
                          person.date_birth.toString().substring(0, 4)}
                      </p>
                    </div>
                    <div className='w-full lg:w-9/12 px-4'>
                      <p className='mb-1 text-lg leading-relaxed'>
                        <strong>{TextMessage('profile.profession')}</strong>
                      </p>
                      <p className='mb-4 text-sm leading-relaxed text-gray-600'>
                        {}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
