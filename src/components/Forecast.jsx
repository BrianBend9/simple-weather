/* eslint-disable no-undef */
/* eslint-disable react/no-set-state */
/* eslint-disable react/prop-types*/
/* eslint-disable react/jsx-indent-props*/
import React from 'react';
import {getWeatherData} from '../utils/DataHelpers';
import Temperatures from './forecast/Temperatures';
import DailyForecast from './forecast/DailyForecast';
import CurrentForecast from './forecast/CurrentForecast';
import CurrentTemperature from './forecast/CurrentTemperature';

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
          <h1 className='cityHeader'>{this.state.city}{', ' + this.state.country}</h1>

          <div className="dataDisplay--large">
            <CurrentForecast
              description={this.state.currentForecast.description}
              icon={this.state.currentForecast.icon}
            />
            <CurrentTemperature
              clouds={this.state.currentForecast.clouds}
              humidity={this.state.currentForecast.humidity}
              temp={this.state.currentForecast.temp}
              windDirection={this.state.currentForecast.windDirection}
              windSpeed={this.state.currentForecast.windSpeed}
            />
          </div>
        </div>
        <div className='dataContainer--5day'>

          <div className="dataDisplay">
            <DailyForecast
              dayOfWeek={this.state[0].dayOfWeek}
              description={this.state[0].description}
              icon={this.state[0].icon}
            />
            <Temperatures
              high={this.state[0].highTemp}
              low={this.state[0].lowTemp}
            />
          </div>

          <div className="dataDisplay">
            <DailyForecast
              dayOfWeek={this.state[1].dayOfWeek}
              description={this.state[1].description}
              icon={this.state[1].icon}
            />
            <Temperatures
              high={this.state[1].highTemp}
              low={this.state[1].lowTemp}
            />
          </div>

          <div className="dataDisplay">
            <DailyForecast
              dayOfWeek={this.state[2].dayOfWeek}
              description={this.state[2].description}
              icon={this.state[2].icon}
            />
            <Temperatures
              high={this.state[2].highTemp}
              low={this.state[2].lowTemp}
            />
          </div>

          <div className="dataDisplay">
            <DailyForecast
              dayOfWeek={this.state[3].dayOfWeek}
              description={this.state[3].description}
              icon={this.state[3].icon}
            />
            <Temperatures
              high={this.state[3].highTemp}
              low={this.state[3].lowTemp}
            />
          </div>

          <div className="dataDisplay">
            <DailyForecast
              dayOfWeek={this.state[4].dayOfWeek}
              description={this.state[4].description}
              icon={this.state[4].icon}
            />
            <Temperatures
              high={this.state[4].highTemp}
              low={this.state[4].lowTemp}
            />
          </div>
        </div>
      </div>
    );
  }
}

Forecast.contextTypes = {
  router: React.PropTypes.object.isRequired
};
