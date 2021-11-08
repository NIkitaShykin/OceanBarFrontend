import axios from 'axios'
import {url as baseURL} from './index'

import {UserType} from '../../src/common/types/userTypes'
import {DeliveryAdressType} from '../../src/common/types/userTypes'

// const settings = {
//   withCredentials: true
// }

const instance = axios.create({
  baseURL,
  // ...settings
})

export const ApiUser = {
  userLogIn(data:any) {
    return instance.post('users/auth', data)
  },
  // userRegister(user:UserType) {
  //   return instance.post('users/register', {data: user})
  // },
  getUserPersonalData() {
    return instance.get('users/')
  },
  getUserDeliveryData() {
    return instance.get('users/')
  },
  setUserPersonalData(userData:UserType) {
    return instance.patch('users/', {userData})
  },
  setUserDeliveryData(deliveryData:DeliveryAdressType) {
    return instance.patch('users/', {deliveryData})
  }
}
