/* eslint-disable handle-callback-err */
/* eslint-disable consistent-return */
import {getWeatherIcon} from './IconHelper';

require('es6-promise').polyfill();

function getData(url, apikey) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();

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
  const currentForecast = dataObject[0];
  const fiveDayForecast = dataObject[1].list;
  var dataObjectsArray = [];
  var day, obj;

  dataObjectsArray.push({'city': currentForecast.name});
  dataObjectsArray.push({'country': currentForecast.sys.country});
  dataObjectsArray.push({currentForecast: {
    description: currentForecast.weather[0].description,
    icon: getWeatherIcon(currentForecast.weather[0].description),
    humidity: currentForecast.main.humidity,
    wind: currentForecast.wind.speed,
    temp: currentForecast.main.temp,
    lowTemp: currentForecast.main.temp_min,
    highTemp: currentForecast.main.temp_max
  }});

  for (day in fiveDayForecast) {
    obj = {};
    obj[day] = {};
    obj[day]['fullDate'] = (new Date(fiveDayForecast[day].dt * 1000)).toDateString();
    obj[day]['dayOfWeek'] = dayOfWeek(fiveDayForecast[day].dt);
    obj[day]['description'] = fiveDayForecast[day].weather[0].description;
    obj[day]['icon'] = getWeatherIcon(fiveDayForecast[day].weather[0].description);
    obj[day]['humidity'] = fiveDayForecast[day].humidity;
    obj[day]['wind'] = fiveDayForecast[day].speed;
    obj[day]['temp'] = fiveDayForecast[day].temp.day;
    obj[day]['lowTemp'] = fiveDayForecast[day].temp.min;
    obj[day]['highTemp'] = fiveDayForecast[day].temp.max;
    dataObjectsArray.push(obj);
  }
  console.log(dataObjectsArray);
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
