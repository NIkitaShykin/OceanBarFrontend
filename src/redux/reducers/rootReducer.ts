import {combineReducers} from 'redux'

import authReducer from './authReducer'
import cartReducer from './cartReducer'
import dishesReducer from './dishesReducer'
import userReducer from './userReducer'
import orderReducer from './orderReducer'


const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  dish: dishesReducer,
  user: userReducer,
  order: orderReducer,
})

export type AppStoreType = ReturnType<typeof rootReducer>
export default rootReducer
