import axios from 'axios'

import {url as baseURL} from './index'
import {bookingOrderType} from '../common/types/bookingTypes'

const instance = axios.create({
  baseURL
})

export const ApiReserve = {
  bookTableUnregistred(order:bookingOrderType) {
    {
      return Promise.resolve(
        instance.post('booking/', order )
      )
    }
  }
}

