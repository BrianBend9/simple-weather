/* eslint-disable indent*/
import { EventEmitter } from 'events';
import { getWeatherData } from '../utils/DataHelpers';
import dispatcher from '../dispatchers/dispatcher';

class WeatherDataStore extends EventEmitter {
  constructor() {
    super();
    this.currentForecast = {};
    this.location = {};
    this.weekForecast = [];
  }

  updateLocation(location) {
    this.location = location;
  }

  getQueryData(location) {
    getWeatherData(location).then(data => {
      this.currentForecast = data[0];
      this.weekForecast = data[1];
    }).then(data => {
      this.emit('change');
      console.log('currentForecast', this.currentForecast);
    });
  }

  getAllStored() {
    return [this.location,
      this.currentForecast,
      this.weekForecast[0],
      this.weekForecast[1],
      this.weekForecast[2],
      this.weekForecast[3],
      this.weekForecast[4]
    ];
  }

  getStoredCurrentForecast() {
    console.log('getStoredCurrentForecast', this.currentForecast);
    return this.currentForecast;
  }

  getDayStored(dayQuery) {
    const dataArray = this.weekForecast;
    var result;

    for (let i = 0; i < dataArray.length; i++) {
      if (dataArray[i][i + 1]['dayOfWeek'] === dayQuery) {
        result = dataArray[i][i + 1];
      }
    }
    return result;
  }

  handleActions(action) {
    switch (action.type) {
      case 'GET_QUERY_DATA':
        this.getQueryData(action.location);
        break;
      case 'UPDATE_LOCATION':
        this.updateLocation(action.location);
        break;
    }
  }
}

const weatherDataStore = new WeatherDataStore();

dispatcher.register(weatherDataStore.handleActions.bind(weatherDataStore));

export default weatherDataStore;
