/* eslint-disable react/jsx-indent-props*/
import React from 'react';

export default class ForecastDetail extends React.Component {
  render() {
    return (
      <div className='detailContainer'>

        <h4>{this.props.description}</h4>

        <ul className='tempContainer--detail'>
          <li className='tempContainer--detail__reading'>
            <h2 className='tempContainer--detail__heading'>{'Low'}</h2>
          </li>
          <li className='iconContainer--detail'>
            <img
              className='iconContainer--detail__svg'
              src={this.props.icon}
            />
          </li>
          <li className='tempContainer--detail__reading'>
            <h2 className='tempContainer--detail__heading'>{'High'}</h2>
            {this.props.high}
          </li>
        </ul>
      </div>
    );
  }
}

ForecastDetail.propTypes = {
  description: React.PropTypes.string,
  high: React.PropTypes.number,
  icon: React.PropTypes.node
};
