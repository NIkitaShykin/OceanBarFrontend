import {combineReducers} from 'redux'

import authReducer from './authReducer'
import dishesReducer from './dishesReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  dish: dishesReducer,
})

export default rootReducer
