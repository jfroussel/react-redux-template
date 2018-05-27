/**
 * import your reducers here 
 **/

import { combineReducers } from 'redux'
import LbcReducer from './reducer-lbc'

/** 
 * export your reducers here 
 **/

export default combineReducers({
  products: LbcReducer,
})