/**
 * import your reducers here 
 **/

import { combineReducers } from 'redux'
import CountriesReducer from './reducer-countries'
import RestCountries from './reducer-rest-countries'

/** 
 * export your reducers here 
 **/

export default combineReducers({
  countries: CountriesReducer,
  restCountries: RestCountries,
})