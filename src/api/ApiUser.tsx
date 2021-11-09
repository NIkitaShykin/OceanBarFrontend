import axios from 'axios'
import {url as baseURL} from './index'

import {UserType} from '../../src/common/types/userTypes'
import {DeliveryAdressType} from '../../src/common/types/userTypes'

const instance = axios.create({
  baseURL
})

export const ApiUser = {
  // userLogIn() {
  //   return instance.post('users/auth')
  // },
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
  },
  checkUserPassword(token: string | undefined,
    body?: {password: string, email: string}
  ) {
    return Promise.resolve(
      instance.post(`users/auth`, body,
        {headers: {Authorization: `Bearer ${token}`}}
      )
    )
  },
  changeUserPassword(token: string | undefined,
    body?: {password: string}
  ) {
    return Promise.resolve(
      instance.patch(
        `users/1`,
        body,
        {headers: {Authorization: `Bearer ${token}`}}
      )
    )
  }
}

