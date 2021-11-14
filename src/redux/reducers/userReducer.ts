import {createReducer} from '@reduxjs/toolkit'
import {AnyAction} from 'redux'
import {RootState} from '../store'
import {ThunkAction} from 'redux-thunk'
import {getUserAC} from '../actions'
import {ApiUser} from '../../api/ApiUser'
import {UserType} from '../../common/types/userTypes'
import {DeliveryAdressType} from '../../common/types/userTypes'


const initialState: UserType & DeliveryAdressType = {
  'id': 10000,
  'name': 'неизвестно',
  'secondname': 'неизвестно',
  'email': 'неизвестно@mail.com',
  'phone': 'неизвестно',
  'city': 'неизвестно',
  'street': '',
  'homeNumber': 'неизвестно',
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
  (token?:string|undefined): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
      try {
        const asyncResp = await ApiUser.getUserPersonalData()
        // @ts-ignore
        const userData = asyncResp.data.data.user
        dispatch(getUserAC(userData))
      } catch (err) {
        console.log(err)
      }
    }

export const setUserPersonalDataTC =
  (userData: any, token?:string):
   ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
      try {
        const asyncResp: any =
         await ApiUser.setUserPersonalData(userData, token)
        const response = asyncResp.data.data.user
        dispatch(getUserAC(response))
      } catch (err) {
        console.log(err)
      }
    }
