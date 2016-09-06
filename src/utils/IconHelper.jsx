/* eslint-disable indent */
const weatherIcons = {
                    'broken clouds': 'clouds',
                             'calm': 'cloud',
                        'clear sky': 'sun',
                             'cold': 'thermometer-25',
                          'drizzle': 'drizzle',
                     'drizzle rain': 'cloud-drizzle',
                             'dust': 'cloud-fog',
                     'extreme rain': 'cloud-rain',
                       'few clouds': 'clouds',
                              'fog': 'cloud-fog-2',
                    'freezing rain': 'cloud-rain',
                     'fresh breeze': 'cloud-wind-2-sun',
                             'gale': 'cloud-wind',
                    'gentle breeze': 'cloud-fog',
                             'hail': 'cloud-hail',
                             'haze': 'cloud-fog-2',
          'heavy intensity drizzle': 'cloud-drizzle',
     'heavy intensity drizzle rain': 'cloud-rain-2',
      'heavy intensity shower rain': 'cloud-rain',
             'heavy intensity rain': 'cloud-rain',
    'heavy shower rain and drizzle': 'cloud-rain-2',
                       'heavy snow': 'cloud-snow',
                'heavy shower snow': 'cloud-snow',
               'heavy thunderstorm': 'cloud-rain-lightning',
             'high wind, near gale': 'cloud-wind',
                              'hot': 'thermometer-100',
                        'hurricane': 'cloud-rain-sun',
                     'light breeze': 'cloud-wind-2',
                'light shower snow': 'cloud-snow',
          'light intensity drizzle': 'cloud-drizzle',
     'light intensity drizzle rain': 'cloud-drizzle',
      'light intensity shower rain': 'cloud-rain',
                       'light snow': 'cloud-snow',
                       'light rain': 'cloud-rain',
              'light rain and snow': 'cloud-snow',
               'light thunderstorm': 'cloud-lightning',
                             'mist': 'drizzle',
                    'moderate rain': 'cloud-rain',
                  'moderate breeze': 'cloud-wind-2',
                  'overcast clouds': 'clouds',
               'ragged shower rain': 'cloud-rain',
              'ragged thunderstorm': 'cloud-rain-lightning',
                    'rain and snow': 'cloud-snow',
                             'sand': 'drizzle',
                'sand, dust whirls': 'cloud-wind',
                 'scattered clouds': 'clouds',
                      'severe gale': 'cloud-wind',
                   'shower drizzle': 'cloud-rain-2',
                      'shower rain': 'cloud-rain',
          'shower rain and drizzle': 'cloud-rain-2',
                     'shower sleet': 'cloud-snow',
                      'shower snow': 'cloud-snow',
                     'sky is clear': 'sun',
                            'sleet': 'cloud-snow',
                            'smoke': 'cloud-fog',
                             'snow': 'cloud-snow',
                          'squalls': 'wind',
                            'storm': 'cloud-rain',
                    'strong breeze': 'cloud-wind',
     'thunderstorm with light rain': 'cloud-drizzle-lightning-sun',
           'thunderstorm with rain': 'cloud-rain-lightning',
     'thunderstorm with heavy rain': 'cloud-rain-lightning',
                     'thunderstorm': 'cloud-lightning',
  'thunderstorm with light drizzle': 'cloud-drizzle-lightning',
        'thunderstorm with drizzle': 'cloud-drizzle-lightning',
  'thunderstorm with heavy drizzle': 'cloud-drizzle-lightning',
                          'tornado': 'tornado',
                   'tropical storm': 'cloud-rain-sun',
                  'very heavy rain': 'cloud-rain',
                    'violent storm': 'cloud-rain',
                     'volcanic ash': 'cloud-fog',
                            'windy': 'cloud-wind'
};

function getWeatherIcon(weatherDescription) {
  const svgFileName = weatherIcons[weatherDescription];

  return require('../images/svg/' + svgFileName + '.svg');
};

export {getWeatherIcon};
