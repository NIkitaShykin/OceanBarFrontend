import {combineReducers} from 'redux'

import authReducer from './authReducer'
import cartReducer from './cartReducer'
import dishesReducer from './dishesReducer'
import userReducer from './userReducer'
import bankCardReducer from './bankCardReducer'
import orderReducer from './orderReducer'
import usersBookingTablesReducer from './usersBookingTablesReducer'

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  dish: dishesReducer,
  user: userReducer,
  order: orderReducer,
  bankCard: bankCardReducer,
  tables: usersBookingTablesReducer
})

export type AppStoreType = ReturnType<typeof rootReducer>
export default rootReducer
