import {FETCH_SUCCESS, FETCH_ERROR, FETCH_LOADING, FETCH_YESTERDAY, FETCH_TODAY, FETCH_LAST3D} from './types';
import api from '../api/api';

export const fetchData = () => dispatch => {
  dispatch({type: FETCH_LOADING});
  api.get('/dashboard_data.json')
    .then(resp => dispatch(fetchSuccess(resp.data)))
    .catch(error => dispatch(fetchError(error)));
};

export const fetchYesterday = () => dispatch => dispatch({type: FETCH_YESTERDAY});
export const fetchToday = () => dispatch => dispatch({type: FETCH_TODAY});
export const fetchLast3d = () => dispatch => dispatch({type: FETCH_LAST3D});

function fetchSuccess(data) {
  return {
    type: FETCH_SUCCESS,
    payload: data
  }
}


function fetchError(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    // console.log(error.response.data);
    // console.log(error.response.status);
    // console.log(error.response.headers);
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    // console.log(error.request);
  } else {
    // Something happened in setting up the request that triggered an Error
    // console.log('Error', error.message);
  }
  // console.log(error.config);
  return {
    type: FETCH_ERROR,
    payload: error
  }
}