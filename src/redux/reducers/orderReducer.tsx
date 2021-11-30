import {createReducer} from '@reduxjs/toolkit'
import {CommonOrderType, IOrderResponse} from '../../common/types/orderType'
import {addOrder} from '../actions'

const initialState: CommonOrderType | {orders: IOrderResponse[]}= {
  address: {
    city: '',
    street: '',
    homeNumber: '',
    homePart: '',
    flat: '',
  },

  date: '',
  tableSize: '',
  time: '',
  paymentType: '',
  price: ''
}

const orderReducer = createReducer(initialState, (builder) => {
  builder.addCase(addOrder, (state, action) => {
    return action.payload
  })
})

export default orderReducer
