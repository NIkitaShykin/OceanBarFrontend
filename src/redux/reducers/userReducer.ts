/* eslint-disable max-len */
import {createReducer} from '@reduxjs/toolkit'
import {AnyAction} from 'redux'
import {RootState} from '../store'
import {ThunkAction} from 'redux-thunk'

import {getUserAC} from '../actions'
import {ApiUser} from '../../api/ApiUser'
import {UserType} from '../../common/types/userTypes'

const initialState: UserType = {
  'user': {
    'id': 8,
    'name': 'Andre',
    'secondname': 'Andre2',
    'email': '7656077@mail.ru',
    'password': '$2b$10$qJfHke4w.E/mAzb.YHaNoeFwLYrMNb0TPkTL7GhrYXV4eTNHmfLa.',
    'phone': '+375293632222'
  }
}

const dishesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getUserAC, (state, action) => {
      return action.payload
    })
})

export default dishesReducer

export const getUserTC =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
      try {
        const asyncResp = await ApiUser.getUsers()
        const userData = asyncResp.data
        dispatch(getUserAC(userData))
      } catch (err) {
        console.log(err)
      }
    }
