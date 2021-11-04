import {createReducer} from '@reduxjs/toolkit'
import {logIn, logOut} from '../actions'

interface IUserState {
<<<<<<< HEAD
  user: any | null,
=======
  user: any,
>>>>>>> sprint_5
  isAuthorized: boolean
}

const initialState: IUserState = {
  user: null,
  isAuthorized: false
}

const authReducer = createReducer(initialState, (builder) => {
  builder
<<<<<<< HEAD
=======

>>>>>>> sprint_5
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
