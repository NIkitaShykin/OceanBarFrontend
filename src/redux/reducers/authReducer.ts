import {createReducer} from '@reduxjs/toolkit'
import {logIn, logOut, signUp} from '../actions'

interface IUserState {
  tempAuthUrl: number,
  user: any,
  isAuthorized: boolean
}

const initialState: IUserState = {
  tempAuthUrl: 0,
  user: null,
  isAuthorized: false
}

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(signUp, (state, action) => {
      return {
        ...state,
        tempAuthUrl: action.payload
      }
    })
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
