import { ADD_CITY, GET_CITIES, GET_CITIES_SUCCESS, GET_CITIES_FAILURE } from './constants'

const initialState = {
  cities: [],
  loading: false,
  error: false
}

export default function cities(state = initialState, action){
  switch(action.type){
    case ADD_CITY:
      return { ...state, cities: [ ...state.cities, action.text ] };
    case GET_CITIES:
      return { ...state, loading: true }
    case GET_CITIES_SUCCESS:
      return { cities: action.list , loading: false, error: false }
    case GET_CITIES_FAILURE:
      return { cities: [] , loading: false, error: true }
    default:
      return state;
  }
}
