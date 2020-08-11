import React from 'react';
import { Loading } from '../components/loading';
import { useSelector } from 'react-redux';
import { IStore } from '../redux/types';
import { Router } from '../router';
function App() {
  const loading = useSelector((state: IStore) => state.loading);

  return (
    <>
      <Router />
      {loading && <Loading />}
    </>
  );
}

export default App;
