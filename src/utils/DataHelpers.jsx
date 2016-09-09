/* eslint-disable consistent-return */
/* eslint-disable max-len */
/* eslint-disable indent */
import {getWeatherIcon} from './IconHelper';
import * as WeatherDataActions from '../actions/WeatherDataActions';
require('es6-promise').polyfill();

function sendHttpRequest(url, useCORS = false) {
  return new Promise(function(resolve, reject) {
    let xhr = new XMLHttpRequest();

    if ('withCredentials' in xhr) {
      xhr.open('GET', url, true);
    // for IE support prior to IE11
    } else if (typeof XDomainRequest !== 'undefined') {
      xhr = new XDomainRequest();
      xhr.open('GET', url);
    }

    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(Error(xhr.statusText));
      }
    };

    xhr.onerror = function(e) {
      reject(Error('An error occured during the request'));
    };

    xhr.send();
  });
}

function dayOfWeek(unixTimestamp) {
  const date = new Date(unixTimestamp * 1000);
  const day = date.getUTCDay();

  switch (day) {
    case 0:
      return 'Sunday';
    case 1:
      return 'Monday';
    case 2:
      return 'Tuesday';
    case 3:
      return 'Wednesday';
    case 4:
      return 'Thursday';
    case 5:
      return 'Friday';
    case 6:
      return 'Saturday';
  }
}

function currentForecastObj(obj) {
  let currentForecastObj = {};

  currentForecastObj =
    {
      'currentForecast': {
        clouds: obj.cloudCover,
        fullDate: new Date(obj.time * 1000).toDateString(),
        description: obj.summary,
        icon: getWeatherIcon(obj.icon),
        humidity: obj.humidity, /* relative humidity between 0 and 1 */
        temp: Math.floor(obj.apparentTemperature), /* celsius */
        windDirection: obj.windBearing, /* degrees from 0 clockwise */
        windSpeed: obj.windSpeed /* km per hour */
      }
    };
  return currentForecastObj;
}

function weekForecastArray(obj) {
  const weekForecastArray = [];

  for (let day = 1; day < 6; day++) {
    let dayForecast = {};

    dayForecast = {
      [day]: {
        'clouds': obj.data[day].cloudCover,
        'dayOfWeek': dayOfWeek(obj.data[day].time),
        'description': obj.data[day].summary,
        'fullDate': new Date(obj.data[day].time * 1000).toDateString(),
        'highTemp': Math.floor(obj.data[day].temperatureMax), /* celsius */
        'humidity': obj.data[day].humidity, /* relative humidity between 0 and 1 */
        'icon': getWeatherIcon(obj.data[day].icon),
        'lowTemp': Math.floor(obj.data[day].temperatureMin), /* celsius */
        'windDirection': Math.floor(obj.data[day].windBearing), /* degrees from 0 clockwise */
        'windSpeed': Math.floor(obj.data[day].windSpeed) /* km per hour */
      }
    };
    weekForecastArray.push(dayForecast);
  }
  return weekForecastArray;
}

function geocodeLocation(location) {
  const apikey = 'AIzaSyAwSTCw161Dx-UwIx2KAtYm_UmfTMiFKz4';
  const apiEndpoint =
  `https://cors-proxysvr.herokuapp.com:443/https://maps.googleapis.com/maps/api/geocode/json?address=${location}&key=${apikey}`;

  return sendHttpRequest(apiEndpoint).then(function(response) {
    const location = {location: JSON.parse(response).results[0].formatted_address};
    const coordinates = JSON.parse(response).results[0].geometry.location;
    const locationObject = {location, coordinates};

    WeatherDataActions.updateLocation(location);
    return locationObject;
  });
}

function getWeatherData(location) {
  const apikey = '63f086bc90a0817da47d6fea5205ee6e';

  return geocodeLocation(location)
  .then(function(response) {
    const apiEndpoint =
    `https://cors-proxysvr.herokuapp.com:443/https://api.forecast.io/forecast/${apikey}/${response.coordinates.lat},${response.coordinates.lng}?units=ca`;

    return sendHttpRequest(apiEndpoint);
  }).then(function(response) {
    return JSON.parse(response);
  }).then(function(response) {
    const currentForecast = currentForecastObj(response.currently);
    const weekForecast = weekForecastArray(response.daily);

    return [currentForecast, weekForecast];
  });
};

export {getWeatherData};
