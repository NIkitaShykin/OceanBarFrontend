import {createReducer} from '@reduxjs/toolkit'
import {CommonOrderType} from '../../common/types/orderType'
import {addOrder} from '../actions'

<<<<<<< Updated upstream
const initialState: CommonOrderType = {
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
=======
const initialState: DeliveryAdressType & TOrderType = {
  city: '',
  street: '',
  homeNumber: '',
  homePart: '',
  flat: '',

  date: '',
  tableSize: '',
  timeSlot: '',
  orderType: '',
  paymentMethod: ''
>>>>>>> Stashed changes
}

const orderReducer = createReducer(initialState, (builder) => {
  builder.addCase(addOrder, (state, action) => {
    return action.payload
  })
})

export default orderReducer
