import dispatcher from '../dispatchers/dispatcher';

export function getQueryData(location) {
  dispatcher.dispatch({
    type: 'GET_QUERY_DATA',
    location
  });
}

export function updateLocation(location) {
  dispatcher.dispatch({
    type: 'UPDATE_LOCATION',
    location
  });
}
