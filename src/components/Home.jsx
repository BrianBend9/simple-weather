/* eslint-disable react/jsx-indent */
/* eslint-disable react/jsx-indent-props */
import React from 'react';
import Search from './Search';

export default class Home extends React.Component {
  render() {
    return (
      <div className="header--home">
        <h1 className="header--home__h1">{'Enter a City and Country.'}</h1>
        <Search
          formClass='mainSearch'
          searchInputClass='mainSearch__textinput'
          submitBtnClass='mainSearch__submitbtn--large'
        />
      </div>
    );
  }
}
