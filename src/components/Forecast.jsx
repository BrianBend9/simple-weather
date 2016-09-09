/* eslint-disable no-undef */
/* eslint-disable react/no-set-state */
/* eslint-disable react/prop-types*/
/* eslint-disable react/jsx-indent-props*/
import React from 'react';
import Temperatures from './forecast/Temperatures';
import DailyForecast from './forecast/DailyForecast';
import CurrentForecast from './forecast/CurrentForecast';
import CurrentTemperature from './forecast/CurrentTemperature';
import WeatherDataStore from '../stores/WeatherDataStore';
import * as WeatherDataActions from '../actions/WeatherDataActions';
import { Link } from 'react-router';

export default class Forecast extends React.Component {
  constructor() {
    super();
    this.state = {
      location: '',
      currentForecast: {},
      1: {},
      2: {},
      3: {},
      4: {},
      5: {}
    };
    this.updateWeatherState = this.updateWeatherState.bind(this);
  }

  componentWillMount() {
    const location = this.props.params.location;

    WeatherDataActions.getQueryData(location);
  }

  componentDidMount() {
    WeatherDataStore.on('change', this.updateWeatherState);
  }

  componentWillUnmount() {
    WeatherDataStore.removeListener('change', this.updateWeatherState);
  }

  updateWeatherState() {
    const queryData = WeatherDataStore.getAllStored();

    queryData.forEach(dataObject => this.setState(dataObject));
    console.log('updateWeatherState', this.state);
  }

  render() {
    return (
      <div className='dataContainer'>
        <div className='dataContainer--current'>
          <h1 className='locationHeader'>{this.state.location}</h1>

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

          <div className='dataDisplay'>
            <Link to={`/forecast/${this.state.location}/${this.state[1].dayOfWeek}/`}>
              <div className='dataDisplay__mask' />
            </Link>
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

          <div className='dataDisplay'>
            <Link to={`/forecast/${this.state.location}/${this.state[2].dayOfWeek}/`}>
              <div className='dataDisplay__mask' />
            </Link>
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

          <div className='dataDisplay'>
            <Link to={`/forecast/${this.state.location}/${this.state[3].dayOfWeek}/`}>
              <div className='dataDisplay__mask' />
            </Link>
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

          <div className='dataDisplay'>
            <Link to={`/forecast/${this.state.location}/${this.state[4].dayOfWeek}/`}>
              <div className='dataDisplay__mask' />
            </Link>
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

          <div className='dataDisplay'>
            <Link to={`/forecast/${this.state.location}/${this.state[5].dayOfWeek}/`}>
              <div className='dataDisplay__mask' />
            </Link>
            <DailyForecast
              dayOfWeek={this.state[5].dayOfWeek}
              description={this.state[5].description}
              icon={this.state[5].icon}
            />
            <Temperatures
              high={this.state[5].highTemp}
              low={this.state[5].lowTemp}
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
