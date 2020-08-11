import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export const PrivateRoute = (props: any) => {
  return <Route {...props}></Route>;
};
