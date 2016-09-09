/* eslint-disable indent */
const weatherIcons = {
'clear-day': 'sun',
'clear-night': 'moon-stars',
'rain': 'cloud-rain',
'snow': 'cloud-snow',
'sleet': 'cloud-drizzle',
'wind': 'cloud-wind',
'fog': 'cloud-fog-2',
'cloudy': 'clouds',
'partly-cloudy-day': 'clouds-sun',
'partly-cloudy-night': 'clouds-moon',
'hail': 'clouds-hail',
'thunderstorm': 'cloud-rain-lightning',
'tornado': 'tornado'
};

function getWeatherIcon(weatherDescription) {
  const svgFileName = weatherIcons[weatherDescription];

  return require('../images/svg/' + svgFileName + '.svg');
};

export {getWeatherIcon};
