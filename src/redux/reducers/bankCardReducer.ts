import {createReducer} from '@reduxjs/toolkit'
import {AnyAction} from 'redux'
import {RootState} from '../store'
import {ThunkAction} from 'redux-thunk'
import {getUserAC, toggleLoadingUser} from '../actions'
import {ApiUser} from '../../api/ApiUser'
// import {CardType} from '../../common/types/bankCardTypes'
import {userCardsType} from '../../common/types/bankCardTypes'


type InitialStateType={
  userCards: userCardsType,
  isLoading: boolean
}

const initialState: InitialStateType = {
  userCards: {
    card1: {
      cvc: 345,
      expiry: '0822',
      focus: '',
      name: 'Ben Bernanke',
      number: 4245841464354390
    },
    card2: {
      cvc: 345,
      expiry: '0822',
      focus: '',
      name: 'Ben Bernanke',
      number: 4245841464354390
    }
  },
  isLoading: false
}

const bankCardReducer = createReducer(initialState, (builder) => {
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

export default bankCardReducer

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
