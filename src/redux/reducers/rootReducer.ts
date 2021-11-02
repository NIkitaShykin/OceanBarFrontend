import {combineReducers} from 'redux'

import authReducer from './authReducer'
import cartReducer from './cartReducer'
import dishesReducer from './dishesReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  dish: dishesReducer,
})

export default rootReducer

