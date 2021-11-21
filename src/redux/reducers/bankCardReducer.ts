import {createReducer} from '@reduxjs/toolkit'
import {AnyAction} from 'redux'
import {RootState} from '../store'
import {ThunkAction} from 'redux-thunk'
import {addBankCardAC, toggleLoadingUser} from '../actions'
import {userCardsType} from '../../common/types/bankCardTypes'

type InitialStateType={
  userCards: userCardsType,
  isLoading: boolean
}

const initialState: InitialStateType = {
  userCards: [
    {cvc: 567,
      expiry: '1221',
      focus: '',
      name: 'Alain Ducasse',
      number: 3055355455333456
    }
  ],
  isLoading: false
}

const bankCardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addBankCardAC, (state, action) => {
      return {...state, userCards: [state.userCards[0], action.payload]}
    }
    )
    .addCase(toggleLoadingUser, (state, action) => {
      return {
        ...state,
        isLoading: action.payload,
      }
    })
})

export default bankCardReducer

export const setBankCardTC =
  (bankCard:any): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
      dispatch(addBankCardAC(bankCard))
      // } catch (err) {
      //   dispatch(toggleLoadingUser(false))
      //   console.log(err)
      // }
    }

// export const setUserPersonalDataTC =
//   (userData: any, token?:string):
//    ThunkAction<void, RootState, unknown, AnyAction> =>
//     async (dispatch) => {
//       dispatch(toggleLoadingUser(true))
//       try {
//         const asyncResp: any =
//          await ApiUser.setUserPersonalData(userData, token)
//         const response = asyncResp.data.data.user
//         dispatch(getUserAC(response))
//         dispatch(toggleLoadingUser(false))
//       } catch (err) {
//         dispatch(toggleLoadingUser(false))
//         console.log(err)
//       }
//     }
