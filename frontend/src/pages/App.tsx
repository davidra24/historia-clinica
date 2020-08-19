import React from 'react';
import { Loading } from '../components/Loading';
import { useSelector, useDispatch } from 'react-redux';
import { IStore } from '../redux/types';
import { Router } from '../router';
import { Footer } from '../components/Footer';
import { LOCALES, LangProvider } from '../lang';
import { changeLang } from '../redux/actions';
function App() {
  const dispatch = useDispatch();

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

  return (
    <>
      <LangProvider locale={language}>
        {loading && <Loading />}
        <Router />
        <Footer />
      </LangProvider>
    </>
  );
}

export default App;
