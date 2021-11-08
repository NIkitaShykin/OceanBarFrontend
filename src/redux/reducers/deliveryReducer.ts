/* eslint-disable max-len */
import {createReducer} from '@reduxjs/toolkit'
import {AnyAction} from 'redux'
import {RootState} from '../store'
import {ThunkAction} from 'redux-thunk'

import {getUserAC} from '../actions'
// import {ApiUser} from '../../api/ApiUser'
import {DeliveryAdressType} from '../../common/types/userTypes'

const initialState: DeliveryAdressType = {
  city: 'Минск',
  street: 'Революционная',
  home: '17',
  homePart: '2',
  flat: '48',
}

const deliveryReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getUserAC, (state, action) => {
      return action.payload
    })
})

export default deliveryReducer

export const getUserDeliveryDataTC =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
      try {
        // const asyncResp = await ApiUser.getUserDeliveryData()
        // const userData = asyncResp.data
        // dispatch(getUserAC(userData))
      } catch (err) {
        console.log(err)
      }
    }


export const setUserDeliveryData =
  (deliveryData: DeliveryAdressType): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
      try {
        // const asyncResp: any = await ApiUser.setUserDeliveryData(deliveryData)
        // const userData = asyncResp.data
      //   dispatch(getUserAC(userData))
      } catch (err) {
        console.log(err)
      }
    }
