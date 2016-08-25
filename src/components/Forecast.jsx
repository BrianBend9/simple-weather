/* eslint-disable no-undef */
/* eslint-disable react/no-set-state */
/* eslint-disable react/prop-types*/
import React from 'react';
import {getWeatherData} from '../utils/DataHelpers';

export default class Forecast extends React.Component {
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
          <div className="dataDisplay--large">
          {'Current Weather'}
          </div>
        </div>
        <div className='dataContainer--5day'>

          <div className="dataDisplay">
            {this.state[0].dayOfWeek}<br />
            {this.state[0].description}<br />
            {this.state[0].lowTemp}<br />
            {this.state[0].highTemp}<br />
            <img src={this.state[0].icon} />
          </div>

          <div className="dataDisplay">
            {this.state[1].dayOfWeek}<br />
            {this.state[1].description}<br />
            {this.state[1].lowTemp}<br />
            {this.state[1].highTemp}
          </div>

          <div className="dataDisplay">
            {this.state[2].dayOfWeek}<br />
            {this.state[2].description}<br />
            {this.state[2].lowTemp}<br />
            {this.state[2].highTemp}
          </div>

          <div className="dataDisplay">
            {this.state[3].dayOfWeek}<br />
            {this.state[3].description}<br />
            {this.state[3].lowTemp}<br />
            {this.state[3].highTemp}
          </div>

          <div className="dataDisplay">
            {this.state[4].dayOfWeek}<br />
            {this.state[4].description}<br />
            {this.state[4].lowTemp}<br />
            {this.state[4].highTemp}
          </div>
        </div>
      </div>
    );
  }
}

Forecast.contextTypes = {
  router: React.PropTypes.object.isRequired
};
