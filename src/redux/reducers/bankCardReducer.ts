import {createReducer} from '@reduxjs/toolkit'
import {AnyAction} from 'redux'
import {RootState} from '../store'
import {ThunkAction} from 'redux-thunk'
import {addBankCardAC, toggleLoadingUser, deleteBankCardAC} from '../actions'
import {userCardsType} from '../../common/types/bankCardTypes'
import {BankCardType} from '../../common/types/bankCardTypes'

type InitialStateType={
  userCards: userCardsType,
  isLoading: boolean
}

const initialState: InitialStateType = {
  userCards: [
    {cvc: '567',
      expiry: '1221',
      focus: '',
      name: 'Alain Ducasse',
      number: '2343534453644564',
      id: 123456789
    }
  ],
  isLoading: false
}

const bankCardReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addBankCardAC, (state, action) => {
      state.userCards.push(action.payload)
    }
    )
    .addCase(deleteBankCardAC, (state, action) => {
      state.userCards.splice(action.payload, 1)
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
  (bankCard:BankCardType): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
      dispatch(addBankCardAC(bankCard))
    }

export const deleteBankCardTC =
  (cardNumber: number): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
      dispatch(deleteBankCardAC(cardNumber))
    }


