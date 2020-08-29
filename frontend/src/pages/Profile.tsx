import React, { useEffect } from 'react';
import { IStore } from '../redux/types';
import { useSelector, useDispatch } from 'react-redux';
import { IPerson } from '../data/IPerson';
import { ProfilePerson } from '../containers/profile/ProfilePerson';
import { ProfileHealthCenter } from '../containers/profile/ProfileHealthCenter';
import { menu } from '../redux/actions';
import { Layout } from '../components/App/Layout';

export const Profile = () => {
  const person: IPerson = useSelector((state: IStore) => state.person);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(menu(false));
  }, []);
  return (
    <>
      <Layout title={'app.profile-title'} subtitle={'app.profile-subtitle'}>
        {person ? <ProfilePerson /> : <ProfileHealthCenter />}
      </Layout>
    </>
  );
};
