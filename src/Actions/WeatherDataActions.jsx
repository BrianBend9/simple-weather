import dispatcher from '../dispatchers/dispatcher';

export function getQueryData(queryCity) {
  dispatcher.dispatch({
    type: 'GET_QUERY_DATA',
    queryCity
  });
}
