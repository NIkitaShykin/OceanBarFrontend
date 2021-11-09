/* eslint-disable max-len */
import {createReducer} from '@reduxjs/toolkit'
import {AnyAction} from 'redux'
import {RootState} from '../store'
import {ThunkAction} from 'redux-thunk'

import {getUserAC} from '../actions'
import {ApiUser} from '../../api/ApiUser'
import {UserType} from '../../common/types/userTypes'

const initialState: UserType = {
  'id': 8,
  'name': 'Иван',
  'secondname': 'Иванов',
  'email': 'ivanov@mail.com',
  'password': '$2b$10$qJfHke4w.E/mAzb.YHaNoeFwLYrMNb0TPkTL7GhrYXV4eTNHmfLa.',
  'phone': '+375293632222'
}

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getUserAC, (state, action) => {
      return action.payload
    })
})

export default userReducer

export const getUserPersonalDataTC =
  (token:string|undefined, userId:string): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
      try {
        const asyncResp = await ApiUser.getUserPersonalData(token, userId)
        // @ts-ignore
        const userData = asyncResp.data.data.user
        dispatch(getUserAC(userData))
      } catch (err) {
        // console.log(err)
      }
    }

export const setPersonalUsersData =
  (userData: any): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
      try {
        // const asyncResp: any = await ApiUser.setUserPersonalData(userData)
        // const userData = asyncResp.data
      //   dispatch(getUserAC(userData))
      } catch (err) {
        console.log(err)
      }
    }
