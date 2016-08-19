/* eslint-disable handle-callback-err */
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

function getWeatherData(city) {
  const apikey = '06e4d406550bf413c913e25583660216';
  const fiveDayForcastUrl = 'http://api.openweathermap.org/data/2.5/forecast/daily?q=' +
  city + '&type=accurate&APPID=' + apikey + '&cnt=5';
  const currentForecastUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' +
  city + '&type=accurate&APPID=' + apikey;
  const urlEndpointArray = [currentForecastUrl, fiveDayForcastUrl];

  urlEndpointArray.forEach(urlEndpoint =>
    getData(urlEndpoint, apikey).then(function(response) {
      console.log(response);
    }, function(error) {
      console.log(Error('Unable to retrieve data.'));
    })
  );
}

export {getWeatherData, getData};
