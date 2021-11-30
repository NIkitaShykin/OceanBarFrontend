import {createReducer} from '@reduxjs/toolkit'
import {InitialTablesType} from '../../common/types/bookingTypes'
import {
  deleteUserBookingTable,
  setUsersBookingTables,
  updateUsersBookingTables,
} from '../actions'

const initialState: InitialTablesType = {
  bookings: [],
}

const usersBookingTablesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUsersBookingTables, (state, action) => {
      return {
        bookings: action.payload,
      }
    })
    .addCase(updateUsersBookingTables, (state, action) => {
      const id = state.bookings.findIndex(
        (table) => table.id === action.payload.id
      )
      state.bookings[id] = action.payload.booking
    })
    .addCase(deleteUserBookingTable, (state, action) => {
      const id = action.payload
      const updState = {...state}
      updState.bookings = updState.bookings.filter((table) => table.id != id)
      return updState
    })
})

export default usersBookingTablesReducer
