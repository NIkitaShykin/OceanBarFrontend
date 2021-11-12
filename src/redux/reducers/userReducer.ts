/* eslint-disable max-len */
import {createReducer} from '@reduxjs/toolkit'
import {AnyAction} from 'redux'
import {RootState} from '../store'
import {ThunkAction} from 'redux-thunk'

import {getUserAC} from '../actions'
import {ApiUser} from '../../api/ApiUser'
// import {UserType} from '../../common/types/userTypes'
import {CommonUserType} from '../../common/types/userTypes'

const initialState: CommonUserType = {
  'id': 8,
  'name': 'Неизвестно',
  'secondname': 'Неизвестно',
  'email': 'неизвестно@mail.com',
  'password': '*********',
  // ----was separate------
  'phone': 'неизвестно',
  'city': 'неизвестно',
  'street': 'неизвестно',
  'home': 'неизвестно',
  'homePart': 'неизвестно',
  'flat': 'неизвестно'
}

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getUserAC, (state, action) => {
      return action.payload
    })
})

export default userReducer

export const getUserPersonalDataTC =
  (token?:string|undefined, userId?:number): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
      try {
        // const asyncResp = await ApiUser.getUserPersonalData(token, userId?)
        const asyncResp = await ApiUser.getUserPersonalData()
        // @ts-ignore
        const userData = asyncResp.data.data.user
        dispatch(getUserAC(userData))
      } catch (err) {
        // console.log(err)
      }
    }

export const setUserPersonalDataTC =
  (userData: any, token:any): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
      try {
        const asyncResp: any = await ApiUser.setUserPersonalData(userData, token)
        const response = asyncResp.data
        console.log(response)
      //   dispatch(getUserAC(userData))
      } catch (err) {
        console.log(err)
      }
    }
