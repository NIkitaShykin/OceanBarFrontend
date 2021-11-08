import {combineReducers} from 'redux'

import authReducer from './authReducer'
import cartReducer from './cartReducer'
import dishesReducer from './dishesReducer'
import userReducer from './userReducer'
import deliveryReducer from './deliveryReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  dish: dishesReducer,
  user: userReducer,
  delivery: deliveryReducer
})

export type AppStoreType = ReturnType<typeof rootReducer>
export default rootReducer
