/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/no-set-state */
import React from 'react';

export default class MainSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      city: ''
    };
    this.handleOnUpdateCity = this.handleOnUpdateCity.bind(this);
    this.handleOnSubmitCity = this.handleOnSubmitCity.bind(this);
  }

  handleOnUpdateCity(event) {
    this.setState({
      city: event.target.value
    });
  }

  handleOnSubmitCity(event) {
    var city = this.state.city;

    event.preventDefault();
    this.setState({
      city: ''
    });
    this.context.router.push('/forecast/' + city);
  }

  render() {
    return (
      <form
        className="mainSearch"
        onSubmit={this.handleOnSubmitCity}
      >
        <input
          className="mainSearch__textinput"
          name="city"
          onChange={this.handleOnUpdateCity}
          placeholder="Toronto, Canada"
          type="text"
          value={this.state.city}
        /><br />
        <input
          className="mainSearch__submitbtn--large"
          type="submit"
          value="Get Weather"
        />
      </form>
    );
  }
}

MainSearch.contextTypes = {
  router: React.PropTypes.object.isRequired
};
