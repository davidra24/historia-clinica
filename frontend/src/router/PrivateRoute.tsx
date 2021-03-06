import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { IStore } from '../redux/types';
import { Container } from '../containers';

export const PrivateRoute = ({ component: Component, ...props }: any) => {
  const isAuthenticated = useSelector((state: IStore) => state.isAuth);

  return (
    <Route
      {...props}
      component={(props: any) =>
        isAuthenticated ? (
          <Container>
            <Component {...props} />
          </Container>
        ) : (
          <Redirect to='/login' />
        )
      }
    ></Route>
  );
};
