import {createReducer} from '@reduxjs/toolkit'
import {IOrderType} from '../../common/types/cartTypes'

import {DeliveryAdressType} from '../../common/types/userTypes'
import {addOrder} from '../actions'

const initialState: DeliveryAdressType & IOrderType = {
  city: 'г.Минск',
  street: '',
  homeNumber: '',
  homePart: '',
  flat: '',

  date: '',
  tableSize: '',
  timeSlot: '',
  orderType: ''
}

const orderReducer = createReducer(initialState, (builder) => {
  builder.addCase(addOrder, (state, action) => {
    return action.payload
  })
})

export default orderReducer
