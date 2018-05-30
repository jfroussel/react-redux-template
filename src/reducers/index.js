/**
 * import your reducers here 
 **/

import { combineReducers } from 'redux'
import LbcReducer from './reducer-lbc'
import ProductReducer from './reducer-product'
import PhoneNumberReducer from './reducer-phone-number'

/** 
 * export your reducers here 
 **/

export default combineReducers({
  products: LbcReducer,
  activeProduct: ProductReducer,
  phoneNumber: PhoneNumberReducer
})