import {combineReducers} from 'redux'

import authReducer from './authReducer'
import cartReducer from './cartReducer'
import dishesReducer from './dishesReducer'
import userReducer from './userReducer'
import bankCardReducer from './bankCardReducer'
import orderReducer from './orderReducer'
import usersBookingTablesReducer from './usersBookingTablesReducer'
import usersOrdersReducer from './usersOrdersReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  dish: dishesReducer,
  user: userReducer,
  order: orderReducer,
  bankCard: bankCardReducer,
  bookings: usersBookingTablesReducer,
  orders: usersOrdersReducer
})

export type AppStoreType = ReturnType<typeof rootReducer>
export default rootReducer
