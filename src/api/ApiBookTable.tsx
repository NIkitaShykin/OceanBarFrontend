// import axios from 'axios'
// import {url as baseURL} from './index'
import {bookingOrderType} from '../common/types/bookingTypes'

import {$api} from './ApiAuth'

// const instance = axios.create({
//   baseURL
// })

export const ApiReserve = {
  bookTableUnregistred(order:bookingOrderType) {
    {
      return Promise.resolve(
        $api.post('booking/', order )
      )
    }
  }
}

