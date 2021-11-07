/* eslint-disable max-len */
import {createReducer} from '@reduxjs/toolkit'
import {AnyAction} from 'redux'
import {RootState} from '../store'
import {ThunkAction} from 'redux-thunk'

import {getUserAC} from '../actions'
import {ApiUser} from '../../api/ApiUser'
import {DeliveryAdressType} from '../../common/types/userTypes'

const initialState: DeliveryAdressType = {
  city: 'город',
  street: 'улица',
  home: 'дом',
  homePart: 'корпус',
  flat: 'квартира',
}

const deliveryReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getUserAC, (state, action) => {
      return action.payload
    })
})

export default deliveryReducer

// export const getUserDeliveryDataTC =
//   (): ThunkAction<void, RootState, unknown, AnyAction> =>
//     async (dispatch) => {
//       try {
//         const asyncResp = await ApiUser.getDeliveryUserData()
//         // const userData = asyncResp.data
//         // dispatch(getUserAC(userData))
//       } catch (err) {
//         console.log(err)
//       }
//     }

// export const setPersonalUsersData =
//   (userData: any): ThunkAction<void, RootState, unknown, AnyAction> =>
//     async (dispatch) => {
//       try {
//         const asyncResp: any = await ApiUser.setUserData(userData)
//         // const userData = asyncResp.data
//       //   dispatch(getUserAC(userData))
//       } catch (err) {
//         console.log(err)
//       }
//     }
