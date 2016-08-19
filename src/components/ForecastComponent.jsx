/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
import React from 'react';
import {getWeatherData} from '../utils/DataHelpers';

export default class ForecastComponent extends React.Component {
  componentDidMount() {
    var currentPath = this.props.location.pathname;
    var city = currentPath.slice(currentPath.match(/\/\w*\//)[0].length);

    getWeatherData(city);
  }

  render() {
    return (
      <div>{'ForecastComponent Container'}</div>
    );
  }
}

ForecastComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
};
