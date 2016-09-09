/* eslint-disable react/jsx-indent-props */
/* eslint-disable react/no-set-state */
import React from 'react';
import * as WeatherDataActions from '../actions/WeatherDataActions';

export default class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      location: ''
    };

    this.handleOnUpdateLocation = this.handleOnUpdateLocation.bind(this);
    this.handleOnSubmitLocation = this.handleOnSubmitLocation.bind(this);
  }

  handleOnUpdateLocation(event) {
    this.setState({
      location: event.target.value
    });
  }

  handleOnSubmitLocation(event) {
    var location = this.state.location;

    event.preventDefault();
    this.setState({
      location: ''
    });

    this.context.router.push('/forecast/' + location);
    WeatherDataActions.getQueryData(location);
  }

  render() {
    return (
      <form
        className={this.props.formClass}
        onSubmit={this.handleOnSubmitLocation}
      >
        <input
          className={this.props.searchInputClass}
          name='location'
          onChange={this.handleOnUpdateLocation}
          placeholder='Toronto, Canada'
          type='text'
          value={this.state.location}
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
