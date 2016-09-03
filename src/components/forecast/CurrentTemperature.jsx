import React from 'react';

export default class CurrentTemperature extends React.Component {
  render() {
    return (
      <div className='tempContainer--current'>
        <div className='tempContainer--current__reading'>
          <h1 className='tempContainer--current__reading--large'>
            {this.props.temp}
          </h1>
          <span className='tempContainer--current__readingUnit'>{'°C'}</span>
        </div>
        <div className='envContainer--current__wrapper'>
          <ul className='envContainer--current'>
            <li className='envContainer--current__reading'>
              <h4 className='envContainer--current__header'>{'humidity'}</h4>
              {this.props.humidity + ' %'}
            </li>
            <li className='envContainer--current__reading'>
              <h4 className='envContainer--current__header'>{'cloudiness'}</h4>
              {this.props.clouds + ' %'}
            </li>
            <li className='envContainer--current__reading'>
              <h4 className='envContainer--current__header'>{'wind speed'}</h4>
              {this.props.windDirection + ' m/sec'}
            </li>
            <li className='envContainer--current__reading'>
              <h4 className='envContainer--current__header'>{'wind direction'}</h4>
              {this.props.windSpeed + ' °'}
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

CurrentTemperature.propTypes = {
  clouds: React.PropTypes.number,
  humidity: React.PropTypes.number,
  temp: React.PropTypes.number,
  windDirection: React.PropTypes.number,
  windSpeed: React.PropTypes.number
};
