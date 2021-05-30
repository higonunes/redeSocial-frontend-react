import React from 'react';

import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login/index';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} isPublic />{' '}
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
};

export default Routes;
