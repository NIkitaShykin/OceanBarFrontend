import axios from 'axios'
import {url as baseURL} from './index'
// import Cookies from 'js-cookie'
// const token = Cookies.get('token')

// import {UserType} from '../../src/common/types/userTypes'
// import {DeliveryAdressType} from '../../src/common/types/userTypes'

const instance = axios.create({
  baseURL
})
export const ApiReserve = {
  bookTableUnregistred(order:any) {
    {
      console.log(order)
      return Promise.resolve(
        instance.post(`booking`, order
          // {headers: {Authorization: `Bearer ${token}`}}
        )
      )
    }
  }
}

