/* eslint-disable indent*/
import { EventEmitter } from 'events';
import { getWeatherData } from '../utils/DataHelpers';
import dispatcher from '../dispatchers/dispatcher';

class WeatherDataStore extends EventEmitter {
  constructor() {
    super();
    this.weatherData = '';
  }

  getQueryData(queryCity, action) {
    return getWeatherData(queryCity).then(dataObjectsArray => {
      this.weatherData = dataObjectsArray;
    }).then(() =>{
        this.emit('change');
      }
    );
  }

  getAllStored() {
    return this.weatherData;
  }

  handleActions(action) {
    switch (action.type) {
      case 'GET_QUERY_DATA':
        this.getQueryData(action.queryCity);
        break;
    }
  }
}

const weatherDataStore = new WeatherDataStore();

dispatcher.register(weatherDataStore.handleActions.bind(weatherDataStore));
export default weatherDataStore;
