/* eslint-disable react/jsx-indent */
/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import MainSearch from './MainSearch';

export default class Home extends React.Component {
  render() {
    return (
      <div className="header--home">
        <h1 className="header--home__h1">{'Enter a City and Country.'}</h1>
        <MainSearch />
      </div>
    );
  }
}
