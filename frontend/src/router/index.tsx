import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { NotFound } from '../pages/NotFound';
import { Dashboard } from '../pages/Dashboard';
import { PrivateRoute } from './PrivateRoute';

export const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login} exact />
      <Route path='/signup' component={SignUp} exact />
      <PrivateRoute path='/' component={Dashboard} exact />
      <Route path='/404' component={NotFound} />
      <Redirect to='/404' />
    </Switch>
  </BrowserRouter>
);
