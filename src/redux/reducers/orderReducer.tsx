import {createReducer} from '@reduxjs/toolkit'
import {TOrderType} from '../../common/types/cartTypes'

import {DeliveryAdressType} from '../../common/types/userTypes'
import {addOrder} from '../actions'

const initialState: DeliveryAdressType & TOrderType = {
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
