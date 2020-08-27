import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Login } from '../pages/Login';
import { SignUp } from '../pages/SignUp';
import { NotFound } from '../pages/NotFound';
import { Dashboard } from '../pages/Dashboard';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { RegisterData } from '../pages/RegisterData';
import { Specialties } from '../pages/Specialties';
import ScrollToTop from '../components/ScrollTop';
import { Profile } from '../pages/Profile';
import { AttentionPatient } from '../pages/AttentionPatient';

export const Router = (props: any) => (
  <BrowserRouter>
    <ScrollToTop>
      <Switch>
        <PublicRoute path='/login' component={Login} exact />
        <PublicRoute path='/signup' component={SignUp} exact />
        <PrivateRoute path='/' component={Dashboard} exact />
        <PrivateRoute path='/profile' component={Profile} exact />
        <PrivateRoute path='/specialty/:id' component={Specialties} exact />
        <PrivateRoute path='/attention' component={AttentionPatient} exact />
        <PrivateRoute path='/completeRegister' component={RegisterData} exact />
        <Route path='/404' component={NotFound} />
        <Redirect to='/404' />
      </Switch>
    </ScrollToTop>
  </BrowserRouter>
);
