import {createReducer} from '@reduxjs/toolkit'
import {InitialTablesType} from '../../common/types/bookingTypes'
import {setUsersBookingTables, updateUsersBookingTables} from '../actions'

const initialState: InitialTablesType = {
  tables: [],
}

const usersBookingTablesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setUsersBookingTables, (state, action) => {
      return {
        tables: action.payload,
      }
    })
    .addCase(updateUsersBookingTables, (state, action) => {
      const id = state.tables.findIndex(
        (table) => table.id === action.payload.id
      )
      state.tables[id] = action.payload.booking
    })
})

export default usersBookingTablesReducer

