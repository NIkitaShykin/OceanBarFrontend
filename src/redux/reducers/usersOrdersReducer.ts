import {createReducer} from '@reduxjs/toolkit'
import {InitialOrdersType} from '../../common/types/bookingTypes'
import {setUsersOrders} from '../actions'

const initialState: InitialOrdersType = {
  orders: [],
}

const usersOrdersReducer = createReducer(initialState, (builder) => {
  builder.addCase(setUsersOrders, (state, action) => {
    return {
      orders: action.payload,
    }
  })
})

export default usersOrdersReducer
