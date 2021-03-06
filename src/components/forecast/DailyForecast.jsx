/* eslint-disable react/jsx-indent-props*/
import React from 'react';

export default class DailyForecast extends React.Component {
  render() {
    return (
      <div className='dailyForecastContainer'>
        <div className='briefContainer--daily'>
          <h2 className='briefContainer--daily__dayHeader'>{this.props.dayOfWeek}</h2>
          <p className='briefContainer--daily__descHeader'>{this.props.description}</p>
        </div>
        <div className='iconContainer--daily'>
          <img
            className='iconContainer--daily__svg'
            src={this.props.icon}
          />
        </div>
      </div>
    );
  }
}

DailyForecast.propTypes = {
  dayOfWeek: React.PropTypes.string,
  description: React.PropTypes.string,
  icon: React.PropTypes.string
};
