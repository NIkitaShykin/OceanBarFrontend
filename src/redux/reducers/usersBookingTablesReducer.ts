import {createReducer} from '@reduxjs/toolkit'
import {InitialTablesType} from '../../common/types/bookingTypes'
import {setUsersBookingTables} from '../actions'

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
})

export default usersBookingTablesReducer

