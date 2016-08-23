/* eslint-disable no-undef */
/* eslint-disable react/no-set-state */
/* eslint-disable react/prop-types*/
import React from 'react';
import {getWeatherData} from '../utils/DataHelpers';

export default class ForecastComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
      country: '',
      currentForecast: '',
      0: '',
      1: '',
      2: '',
      3: '',
      4: ''
    };
  }

  componentDidMount() {
    var currentPath = this.props.location.pathname;
    var city = currentPath.slice(currentPath.match(/\/\w*\//)[0].length);

    getWeatherData(city).then(dataObjectsArray => {
      dataObjectsArray.forEach(dataObject => this.setState(dataObject));
    });
  }

  render() {
    return (
      <div className='dataContainer'>
        <div className='dataContainer--current'>
          <h1 className='cityHeader'>{this.state.city}</h1>
          <h2>{'Select a day'}</h2>
          <div className="dataDisplay--large">{'div1'} </div>
        </div>
        <div className='dataContainer--5day'>
          <div className="dataDisplay">{this.state[0].description}</div>
          <div className="dataDisplay">{'div3'}</div>
          <div className="dataDisplay">{'div4'}</div>
          <div className="dataDisplay">{'div5'}</div>
          <div className="dataDisplay">{'div6'}</div>
        </div>
      </div>
    );
  }
}

ForecastComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
};
