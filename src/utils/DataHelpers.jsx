/* eslint-disable handle-callback-err */
/* eslint-disable consistent-return */
import {getWeatherIcon} from './IconHelper';
require('es6-promise').polyfill();

function getData(url, apikey) {
  return new Promise(function(resolve, reject) {
    const xhr = new XMLHttpRequest();

    if (apikey !== undefined) {
      xhr.open('GET', url, false);
    } else {
      xhr.open('GET', url + apikey, false);
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

function createDataObjectsArray(dataObject) {
  const currentForecast = dataObject[0],
    fiveDayForecast = dataObject[1].list,
    dataObjectsArray = [];

  dataObjectsArray.push(
    {'city': currentForecast.name},
    {'country': currentForecast.sys.country},
    {currentForecast: {
      clouds: currentForecast.clouds.all,
      description: currentForecast.weather[0].description,
      icon: getWeatherIcon(currentForecast.weather[0].description),
      highTemp: Math.floor(currentForecast.main.temp_max),
      humidity: currentForecast.main.humidity,
      lowTemp: Math.floor(currentForecast.main.temp_min),
      temp: Math.floor(currentForecast.main.temp),
      windDirection: currentForecast.wind.deg,
      windSpeed: Math.floor(currentForecast.wind.speed)
    }}
  );

  for (let i = 0; i < fiveDayForecast.length; i++) {
    let obj = {};

    obj[i] = {};
    obj[i]['clouds'] = fiveDayForecast[i].clouds;
    obj[i]['dayOfWeek'] = dayOfWeek(fiveDayForecast[i].dt);
    obj[i]['description'] = fiveDayForecast[i].weather[0].description;
    obj[i]['fullDate'] = (new Date(fiveDayForecast[i].dt * 1000)).toDateString();
    obj[i]['highTemp'] = Math.floor(fiveDayForecast[i].temp.max);
    obj[i]['humidity'] = fiveDayForecast[i].humidity;
    obj[i]['icon'] = getWeatherIcon(fiveDayForecast[i].weather[0].description);
    obj[i]['lowTemp'] = Math.floor(fiveDayForecast[i].temp.min);
    obj[i]['temp'] = Math.floor(fiveDayForecast[i].temp.day);
    obj[i]['windDirection'] = Math.floor(fiveDayForecast[i].deg);
    obj[i]['windSpeed'] = Math.floor(fiveDayForecast[i].speed);

    dataObjectsArray.push(obj);
  }
  return dataObjectsArray;
}

function getWeatherData(city) {
  const apikey = '06e4d406550bf413c913e25583660216';
  const fiveDayForcastUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' +
  city + '&type=accurate&units=metric&APPID=' + apikey + '&cnt=5';
  const currentForecastUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' +
  city + '&type=accurate&units=metric&APPID=' + apikey;
  const urlEndpointArray = [currentForecastUrl, fiveDayForcastUrl];

  return Promise.all(urlEndpointArray.map(urlEndpoint =>

    getData(urlEndpoint, apikey)
  )).then(function(dataObjectArray) {
    return dataObjectArray.map(function(dataObject) {
      return JSON.parse(dataObject);
    });
  }).then(function(dataObject) {
    return createDataObjectsArray(dataObject);
  });
}

export {getWeatherData, getData};
