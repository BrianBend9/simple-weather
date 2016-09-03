/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-indent */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/jsx-max-props-per-line */

import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, IndexRoute, hashHistory} from 'react-router';
import MainContainer from './containers/MainContainer';
import Home from './components/Home';
import Forecast from './components/Forecast';
import ForecastDetail from './components/ForecastDetail';

ReactDOM.render((
    <Router history={hashHistory}>
      <Route path='/' component={MainContainer} >
        <IndexRoute component={Home} />
        <Route path='forecast/:city' component={Forecast} />
        <Route path='forecast/:day' component={ForecastDetail} />
      </Route>
    </Router>
  ), document.getElementById('app')
);
