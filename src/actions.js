import { ADD_CITY, GET_CITIES } from './constants';

export function addCity(name) {
  return {
    type: ADD_CITY,
    text: name
  };
}

export function getCities() {
  return {
    type: GET_CITIES
  }
}
