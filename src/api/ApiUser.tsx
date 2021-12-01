import Cookies from 'js-cookie'

import {DeliveryAdressType} from '../../src/common/types/userTypes'
import {$api} from './ApiAuth'

export const ApiUser = {
  getUserPersonalData(userId?:number) {
    const token = Cookies.get('token')
    {
      return Promise.resolve(
        $api.get(`users/${userId}`,
          {headers: {Authorization: `Bearer ${token}`}}
        )
      )
    }
  },

  getUserDeliveryData() {
    return $api.get('users/')
  },

  setUserPersonalData(userData:any, tokenOld:any) {
    const token = Cookies.get('token')
    return Promise.resolve(
      $api.patch( 'users/1', userData,
        {headers: {Authorization: `Bearer ${token}`}}
      )
    )
  },

  setUserDeliveryData(deliveryData:DeliveryAdressType) {
    return $api.patch('users/', {deliveryData})
  },
  checkUserPassword(token: string | undefined,
    body?: {password: string, email: string}
  ) {
    return Promise.resolve(
      $api.post(`users/auth`, body,
        {headers: {Authorization: `Bearer ${token}`}}
      )
    )
  },
  changeUserPassword(token: string | undefined,
    userId: number,
    body?: {password: string}
  ) {
    return Promise.resolve(
      $api.patch(`users/${userId}`, body,
        {headers: {Authorization: `Bearer ${token}`}}
      )
    )
  }
}

