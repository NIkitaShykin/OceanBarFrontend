/* eslint-disable max-len */
import axios from 'axios'
import {url as baseURL} from './index'
import Cookies from 'js-cookie'

import {DeliveryAdressType} from '../../src/common/types/userTypes'

const instance = axios.create({
  baseURL
})

export const ApiUser = {
  getUserPersonalData(userId?:number) {
    const token = Cookies.get('token')
    {
      return Promise.resolve(
        instance.get(`users/${userId}`,
          {headers: {Authorization: `Bearer ${token}`}}
        )
      )
    }
  },

  getUserDeliveryData() {
    return instance.get('users/')
  },

  setUserPersonalData(userData:any, tokenOld:any) {
    const token = Cookies.get('token')
    return Promise.resolve(
      instance.patch( 'users/1', userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
    )
  },

  setUserDeliveryData(deliveryData:DeliveryAdressType) {
    return instance.patch('users/', {deliveryData},
    )
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
    userId: number,
    body?: {password: string}
  ) {
    return Promise.resolve(
      instance.patch(`users/${userId}`, body,
        {headers: {Authorization: `Bearer ${token}`}}
      )
    )
  }
}

