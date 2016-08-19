/* eslint-disable react/jsx-sort-props */

import React from 'react';
import SecondarySearch from './SecondarySearch';

export default class Menu extends React.Component {
  render() {
    return (
      <div className="menu">
        <h1 className="menu__heading">{'Simple-Weather'}</h1>
        <SecondarySearch />
      </div>

    );
  }
}
