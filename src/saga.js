import { call, put, takeLatest  } from 'redux-saga/effects';
import { GET_CITIES, GET_CITIES_SUCCESS, GET_CITIES_FAILURE } from './constants';

// Function to simulate the API
const simulateApi = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([ 'São Paulo', 'Rio de Janeiro' ])
    }, 2000);
  })

function* asyncGetCities() {
  try {
    const response = yield call(simulateApi);
    yield put({ type: GET_CITIES_SUCCESS, list: response });
  } catch (err) {
    console.log(err);
    yield put({ type: GET_CITIES_FAILURE });
  }
}

export default function* root() {
  yield [
    takeLatest(GET_CITIES, asyncGetCities)
  ]
}
