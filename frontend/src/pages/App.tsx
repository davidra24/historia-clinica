import React, { useEffect, useState } from 'react';
import { Loading } from '../components/loading';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../redux/types';
import { Router } from '../router';
import { Footer } from '../components/Footer';
import { LOCALES, LangProvider } from '../lang';
import {
  changeLang,
  Loading as setLoading,
  setUser,
  auth,
} from '../redux/actions';
import { useCookies } from 'react-cookie';
import { post } from '../util/httpUtil';
import { HTTP_VERIFY } from '../util/constants';

function App() {
  const [cookie, setCookie, removeCookie] = useCookies(['token']);
  const dispatch = useDispatch();
  const [load, setLoad] = useState(false);

  const lang = localStorage.getItem('language');

  if (!lang) {
    localStorage.setItem('language', LOCALES.SPANISH);
  } else {
    if (lang != LOCALES.SPANISH && lang != LOCALES.ENGLISH) {
      localStorage.setItem('language', LOCALES.SPANISH);
    }
  }

  const loading = useSelector((state: IStore) => state.loading);
  const language = useSelector((state: IStore) => state.language);

  dispatch(changeLang(localStorage.getItem('language')));

  useEffect(() => {
    const { token } = cookie;
    async function comprobeSession() {
      setLoad(true);
      const response = await post(HTTP_VERIFY, { token });
      if (response) {
        const {
          status,
          data: { user },
        } = response;
        if (status === 200) {
          dispatch(auth(true));
          dispatch(setUser(user));
        } else {
          removeCookie('token');
        }
      } else {
        removeCookie('token');
      }
      setLoad(false);
    }
    if (token) {
      comprobeSession();
    }
  }, []);

  return (
    <>
      <LangProvider locale={language}>
        {load ? (
          <Loading />
        ) : (
          <>
            <Router className='h-full' />
            <Footer />
          </>
        )}
      </LangProvider>
    </>
  );
}

export default App;
