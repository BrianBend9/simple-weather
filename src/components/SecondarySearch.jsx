/* eslint-disable react/jsx-sort-props */
/* eslint-disable react/jsx-indent-props */
import React from 'react';

export default class SecondarySearch extends React.Component {
  render() {
    return (
      <form className="secondarySearch">
        <input
          type="text"
          className="secondarySearch__textinput"
          name="city"
          placeholder="i.e. Toronto, Ontario"
        />
        <input
          type="submit"
          className="secondarySearch__submitbtn--large"
          value="Get Weather"
        />
      </form>
    );
  }
}
