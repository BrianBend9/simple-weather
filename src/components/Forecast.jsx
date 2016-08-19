/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-set-state */
import React from 'react';
import {getWeatherData} from '../utils/DataHelpers';

export default class ForecastComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentForecat: '',
      fiveDayForecast: ''
    };
  }

  componentDidMount() {
    var currentPath = this.props.location.pathname;
    var city = currentPath.slice(currentPath.match(/\/\w*\//)[0].length);

    getWeatherData(city).then(dataObject => {
      console.log(dataObject);
      this.setState({
        currentForecat: (dataObject[1].list) ? dataObject[0] : dataObject[1].list,
        fiveDayForcast: (dataObject[1].list) ? dataObject[1].list : dataObject[0]
      });
    });

  }

  render() {
    return (
      <div className='dataContainer'>
        <div className='dataContainer--current'>
          <h1 className='cityHeader'>{'ForecastComponent Container'}</h1>
          <div className="dataDisplay--large">{'div1'}</div>
        </div>
        <div className='dataContainer--5day'>
          <div className="dataDisplay">{'div2'}</div>
          <div className="dataDisplay">{'div3'}</div>
          <div className="dataDisplay">{'div4'}</div>
          <div className="dataDisplay">{'div5'}</div>
          <div className="dataDisplay">{'div6'}</div>
        </div>
      </div>
    );
  }
}

ForecastComponent.contextTypes = {
  router: React.PropTypes.object.isRequired
};
