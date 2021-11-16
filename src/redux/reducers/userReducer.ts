import {createReducer} from '@reduxjs/toolkit'
import {AnyAction} from 'redux'
import {RootState} from '../store'
import {ThunkAction} from 'redux-thunk'
import {getUserAC, toggleLoadingUser} from '../actions'
import {ApiUser} from '../../api/ApiUser'
import {UserType} from '../../common/types/userTypes'
import {DeliveryAdressType} from '../../common/types/userTypes'

type InitialStateType={
 userProfile:UserType & DeliveryAdressType,
 isLoading: boolean
}

const initialState: InitialStateType = {

  userProfile: {
    'id': 10000,
    'name': 'Имя',
    'secondname': 'Фамилия',
    'email': '',
    'phone': '',
    'city': 'Минск',
    'street': 'Улица',
    'homeNumber': 'Дом',
    'homePart': 'Корпус',
    'flat': 'Квартира'
  },
  isLoading: false
}

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getUserAC, (state, action) => {
      return {
        ...state, userProfile: action.payload,
      }
    })
    .addCase(toggleLoadingUser, (state, action) => {
      return {
        ...state,
        isLoading: action.payload,
      }
    })
})

export default userReducer

export const getUserPersonalDataTC =
  (token?:string|undefined): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
      dispatch(toggleLoadingUser(true))
      try {
        const asyncResp = await ApiUser.getUserPersonalData()
        // @ts-ignore
        const userData = asyncResp.data.data.user
        dispatch(getUserAC(userData))
        dispatch(toggleLoadingUser(false))
      } catch (err) {
        dispatch(toggleLoadingUser(false))
        console.log(err)
      }
    }

export const setUserPersonalDataTC =
  (userData: any, token?:string):
   ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
      dispatch(toggleLoadingUser(true))
      try {
        const asyncResp: any =
         await ApiUser.setUserPersonalData(userData, token)
        const response = asyncResp.data.data.user
        dispatch(getUserAC(response))
        dispatch(toggleLoadingUser(false))
      } catch (err) {
        dispatch(toggleLoadingUser(false))
        console.log(err)
      }
    }
