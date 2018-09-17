import {FETCH_SUCCESS, FETCH_ERROR,
  FETCH_LOADING, FETCH_YESTERDAY, FETCH_TODAY, FETCH_LAST3D} from '../actions/types';

import {combineReducers} from 'redux';

let allData = {};
const initState = {
  errors: [],
  graphic: {},
  searches: null,
  clicks: null,
  bookings: null,
  fetchError: null,
  loading: false
};
export default combineReducers({
  backend: (state = initState, action) => {
    switch (action.type) {
      case FETCH_SUCCESS:
        allData = action.payload;
        return {...initState, loading: false};
      case FETCH_ERROR:
        return {...state, fetchError: true};
      case FETCH_LOADING:
        return {...initState, loading: true};
      case FETCH_YESTERDAY:
        console.log(state);
        return selectData('yesterday');
      case FETCH_TODAY:
        return selectData('today');
      case FETCH_LAST3D:
        return selectData('last3d');
      default:
        return state;
    }
  }
});

function selectData(interval) {
  const data = allData.data && allData.data[0];
  if (!data) return initState;
  const random_sign = () => (Math.random() >= 0.5) ? '+' : '-';
  switch (interval) {
    case 'yesterday':
      return {
        errors: allData.errors_yesterday,
        graphic: {
          zero: data.zeroes_yesterday && data.zeroes_yesterday.toFixed(2),
          timeouts: data.timeout_yesterday && data.timeout_yesterday.toFixed(2),
          err: data.errors_yesterday && data.errors_yesterday.toFixed(2)},
        searches: {
          current: data.searches_current_yesterday,
          prev: data.searches_previous_yesterday,
          percent: random_sign() + Math.floor(Math.random() * 100) + '%', // this should be on component logic, but too lazy
        },
        clicks: {
          current: data.clicks_current_yesterday,
          prev: data.clicks_previous_yesterday,
          percent: random_sign() + Math.floor(Math.random() * 100) + '%',
          ctr: data.ctr_yesterday && data.ctr_yesterday.toFixed(2) + '%'
        },
        bookings: {
          current: data.bookings_current_yesterday,
          prev: data.bookings_previous_yesterday,
          percent: random_sign() + Math.floor(Math.random() * 100) + '%',
          str: data.str_yesterday && data.str_yesterday.toFixed(2) + '%',
          price: data.avg_price_yesterday && data.avg_price_yesterday.toFixed()
        }
      }
    case 'today':
    return {
      errors: allData.errors_last_hour,
      graphic: {
        zero: data.zeroes_last_hour && data.zeroes_last_hour.toFixed(2),
        timeouts: data.timeout_last_hour && data.timeout_last_hour.toFixed(2),
        err: data.errors_last_hour && data.errors_last_hour.toFixed(2)},
      searches: {
        current: data.searches_current_last_hour,
        prev: data.searches_previous_last_hour,
        percent: random_sign() + Math.floor(Math.random() * 100) + '%', // this should be on component logic, but too lazy
      },
      clicks: {
        current: data.clicks_current_last_hour,
        prev: data.clicks_previous_last_hour,
        percent: random_sign() + Math.floor(Math.random() * 100) + '%',
        ctr: data.ctr_last_hour && data.ctr_last_hour.toFixed(2) + '%'
      },
      bookings: {
        current: data.bookings_current_last_hour,
        prev: data.bookings_previous_last_hour,
        percent: random_sign() + Math.floor(Math.random() * 100) + '%',
        str: data.str_last_hour && data.str_last_hour.toFixed(2) + '%',
        price: data.avg_price_last_hour && data.avg_price_last_hour.toFixed()
      }
    }
    case 'last3d':
      return {
        errors: allData.errors_last_3days,
        graphic: {
          zero: data.zeroes_last_3days && data.zeroes_last_3days.toFixed(2),
          timeouts: data.timeout_last_3days && data.timeout_last_3days.toFixed(2),
          err: data.errors_last_3days && data.errors_last_3days.toFixed(2)},
        searches: {
          current: data.searches_current_last_3days,
          prev: data.searches_previous_last_3days,
          percent: random_sign() + Math.floor(Math.random() * 100) + '%', // this should be on component logic, but too lazy
        },
        clicks: {
          current: data.clicks_current_last_3days,
          prev: data.clicks_previous_last_3days,
          percent: random_sign() + Math.floor(Math.random() * 100) + '%',
          ctr: data.ctr_last_3days && data.ctr_last_3days.toFixed(2) + '%'
        },
        bookings: {
          current: data.bookings_current_last_3days,
          prev: data.bookings_previous_last_3days,
          percent: random_sign() + Math.floor(Math.random() * 100) + '%',
          str: data.str_last_3days && data.str_last_3days.toFixed(2) + '%',
          price: data.avg_price_last_3days && data.avg_price_last_3days.toFixed()
        }
      }
    default:
      return initState;
  }

}