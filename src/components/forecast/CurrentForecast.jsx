/* eslint-disable react/jsx-indent-props*/
import React from 'react';

export default class CurrentForecast extends React.Component {
  render() {
    return (
      <div className='currentForecastContainer'>
        <div className='briefContainer--current'>
          <h1 className='briefContainer--current__header'>{'Current Weather'}</h1>
          <h2 className='briefContainer--current__descHeader'>{this.props.description}</h2>
        </div>
        <div className='iconContainer--current'>
          <img
            className='iconContainer--current__svg'
            src={this.props.icon}
          />
        </div>
      </div>
    );
  }
}

CurrentForecast.propTypes = {
  description: React.PropTypes.string.isRequired,
  icon: React.PropTypes.node.isRequired
};
