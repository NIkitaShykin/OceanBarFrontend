import {createReducer} from '@reduxjs/toolkit'
import {logIn, logOut} from '../actions'

interface IUserState {
  user: any | null,
  isAuthorized: boolean
}

const initialState: IUserState = {
  user: null,
  isAuthorized: false
}

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(logIn, (state, action) => {
      return {
        ...state,
        user: action.payload,
        isAuthorized: true,
      }
    })
    .addCase(logOut, (state, action) => {
      return initialState
    })
})

export default authReducer
