/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/no-set-state */
import React from 'react';
import SecondarySearch from './SecondarySearch';
var classNames = require('classNames');

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      hideMenuHeading: false,
      showSearchInput: false,
      menuHeadingClass: 'menu__heading',
      searchInputClass: 'secondarySearch__textinput'
    };

    this.computeClass = this.computeClass.bind(this);
    this.handleOnToggleSearch = this.handleOnToggleSearch.bind(this);
  }

  computeClass() {
    var newMenuHeadingClass,
      newSearchInputClass,
      newMenuHeadingState,
      newSearchInputState;

    newMenuHeadingState = !this.state.hideMenuHeading;
    newMenuHeadingClass = classNames({
      'menu__heading': true,
      'menu__heading--active': newMenuHeadingState
    });

    newSearchInputState = !this.state.showSearchInput;
    newSearchInputClass = classNames({
      'secondarySearch__textinput': true,
      'secondarySearch__textinput--active': newSearchInputState
    });

    this.setState({
      hideMenuHeading: newMenuHeadingState,
      showSearchInput: newSearchInputState,
      menuHeadingClass: newMenuHeadingClass,
      searchInputClass: newSearchInputClass
    });
  }

  handleOnToggleSearch(event) {
    console.log(this.state);
    this.computeClass();
    console.log(this.state);
  }

  render() {
    return (
      <div className="menu">
        <h1 className={this.state.menuHeadingClass}>{'Simple Weather'}</h1>
        <div className='menu__searchWrapper'>
          <SecondarySearch searchInputClass={this.state.searchInputClass} />
          <img
            className='menu__searchbtn'
            onClick={this.handleOnToggleSearch}
            src={require('../images/svg/search.svg')}
          />
        </div>
      </div>
    );
  }
}
