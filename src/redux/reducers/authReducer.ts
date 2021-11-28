import {createReducer} from '@reduxjs/toolkit'
import Cookies from 'js-cookie'

import {logIn, logOut, checkAuth} from '../actions'

interface IUserState {
  user: any | null,
  isAuthorized: boolean
}

const initialState: IUserState = {
  user: null,
  isAuthorized: !!Cookies.get('token')
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
    .addCase(checkAuth, (state, action) => {
      return {
        ...state,
        isAuthorized: true
      }
    })
})

export default authReducer
