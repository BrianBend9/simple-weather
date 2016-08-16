/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/jsx-max-props-per-line */

import React from 'react';
import {Route, Router, IndexRoute, browserHistory} from 'react-router';
import Main from '../components/Main';
import Home from '../components/Home';

export var routes = (
  <Router>
    <Route path='/' component={Main}>
      <Route path='home' component={Home} />
    </Route>
  </Router>
);
