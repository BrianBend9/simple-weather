/* eslint-disable react/jsx-indent-props*/
/* eslint-disable react/prop-types*/
import React from 'react';
import WeatherDataStore from '../stores/WeatherDataStore';

export default class ForecastDetail extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    const day = this.props.params.day;
    const dayData = WeatherDataStore.getDayStored(day);

    this.setState(dayData);
  }

  render() {
    return (
      <div className='detailContainer'>

        <h1 className='detailContainer__date'>{this.state.fullDate}</h1>
        <p className='detailContainer__description'>{this.state.description}</p>

        <ul className='tempContainer--detail'>
          <li className='tempContainer--detail__reading'>
            <h2 className='tempContainer--detail__heading'>{'Low'}</h2>
            <h1 className='tempContainer--detail__temp'>{this.state.lowTemp + ' °C'}</h1>
          </li>
          <li className='iconContainer--detail'>
            <img
              className='iconContainer--detail__svg'
              src={this.state.icon}
            />
          </li>
          <li className='tempContainer--detail__reading'>
            <h2 className='tempContainer--detail__heading'>{'High'}</h2>
            <h1 className='tempContainer--detail__temp'>{this.state.highTemp + ' °C'}</h1>
          </li>
        </ul>

        <ul className='envContainer--detail'>
          <li className='envContainer--detail__reading'>
            <h3 className='envContainer--detail__header'>{'humidity'}</h3>
            {this.state.humidity + ' %'}
          </li>
          <li className='envContainer--detail__reading'>
            <h3 className='envContainer--detail__header'>{'cloudiness'}</h3>
            {this.state.clouds + ' %'}
          </li>
          <li className='envContainer--detail__reading'>
            <h3 className='envContainer--detail__header'>{'wind speed'}</h3>
            {this.state.windSpeed + ' m/sec'}
          </li>
          <li className='envContainer--detail__reading'>
            <h3 className='envContainer--detail__header'>{'wind direction'}</h3>
            {this.state.windDirection + ' °'}
          </li>
        </ul>
      </div>
    );
  }
}
