/**
 * import your reducers here 
 **/

import { combineReducers } from 'redux'
import CountriesReducer from './reducer-countries'

/** 
 * export your reducers here 
 **/

export default combineReducers({
  countries: CountriesReducer,
  
})