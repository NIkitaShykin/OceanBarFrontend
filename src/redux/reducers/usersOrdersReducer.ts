import {createReducer} from '@reduxjs/toolkit'
import {InitialOrdersType} from '../../common/types/bookingTypes'
import {deleteUserOrder, setUsersOrders, updateUserOrder} from '../actions'

const initialState: InitialOrdersType = {
  orders: [],
}

const usersOrdersReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUsersOrders, (state, action) => {
      return {
        orders: action.payload,
      }
    })
    .addCase(deleteUserOrder, (state, action) => {
      const id = action.payload
      const updState = {...state}
      updState.orders = updState.orders.filter((order) => order.id != id)
      return updState
    })
    .addCase(updateUserOrder, (state, action) => {
      const id = state.orders.findIndex(
        (order) => order.id === action.payload.id
      )
      state.orders[id] = action.payload.order
    })
})

export default usersOrdersReducer
