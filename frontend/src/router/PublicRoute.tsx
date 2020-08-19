import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IStore } from '../redux/types';

export const PublicRoute = ({ component: Component, ...props }: any) => {
  const isAuthenticated = useSelector((state: IStore) => state.isAuth);

  return (
    <Route
      {...props}
      component={(props: any) =>
        !isAuthenticated ? <Component {...props} /> : <Redirect to='/' />
      }
    ></Route>
  );
};
