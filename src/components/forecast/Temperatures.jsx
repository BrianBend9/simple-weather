import React from 'react';

export default class Temperatures extends React.Component {
  render() {
    return (
      <ul className='tempContainer'>
        <li className='tempContainer__reading tempContainer__reading--low'>
          <h4 className='tempContainer__heading'>{'Low'}</h4>
          <p>{this.props.low + ' °C'}</p>
        </li>
        <li className='tempContainer__reading tempContainer__reading--high'>
          <h4 className='tempContainer__heading'>{'High'}</h4>
          <p>{this.props.high + ' °C'}</p>
        </li>
      </ul>
    );
  }
}

Temperatures.propTypes = {
  high: React.PropTypes.number,
  low: React.PropTypes.number
};
