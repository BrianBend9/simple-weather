/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/jsx-indent-props */
import React from 'react';

export default class SecondarySearch extends React.Component {
  render() {
    return (
      <form className='secondarySearch'>
        <input
          type='text'
          className={this.props.searchInputClass}
          name='city'
          placeholder='Toronto, Canada'
        />
        <input
          type='submit'
          className='secondarySearch__submitbtn'
          value='Get Weather'
        />
      </form>
    );
  }
}

SecondarySearch.propTypes = {
  searchInputClass: React.PropTypes.string.isRequired
};
