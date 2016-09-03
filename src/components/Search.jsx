/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/no-set-state */
import React from 'react';

export default class Search extends React.Component {
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
        className={this.props.formClass}
        onSubmit={this.handleOnSubmitCity}
      >
        <input
          className={this.props.searchInputClass}
          name='city'
          onChange={this.handleOnUpdateCity}
          placeholder='Toronto, Canada'
          type='text'
          value={this.state.city}
        />
        <input
          className={this.props.submitBtnClass}
          type='submit'
          value='Get Weather'
        />
      </form>
    );
  }
}

Search.contextTypes = {
  router: React.PropTypes.object.isRequired
};

Search.propTypes = {
  formClass: React.PropTypes.string.isRequired,
  searchInputClass: React.PropTypes.string.isRequired,
  submitBtnClass: React.PropTypes.string.isRequired
};
