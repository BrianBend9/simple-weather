import React from 'react';

export default class Temperatures extends React.Component {
  render() {
    return (
      <ul className='tempContainer'>
        <li className='tempContainer__reading tempContainer__reading--low'>
          <h4 className='tempContainer__heading'>{'Low'}</h4>
          {this.props.low + ' °C'}
        </li>
        <li className='tempContainer__reading tempContainer__reading--high'>
          <h4 className='tempContainer__heading'>{'High'}</h4>
          {this.props.high + ' °C'}
        </li>
      </ul>
    );
  }
}

Temperatures.propTypes = {
  high: React.PropTypes.number.isRequired,
  low: React.PropTypes.number.isRequired
};
