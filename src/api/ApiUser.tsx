import axios from 'axios'

import {UserType} from '../../src/common/types/userTypes'

const instance = axios.create({
  baseURL: 'http://13.51.224.150:3000/'
})

export const ApiUser = {
  userLogin(user:UserType) {
    return instance.post('users/auth', {data: user})
  },
  userRegister(user:UserType) {
    return instance.post('users/register', {data: user})
  },
  getPersonalUsersData() {
    return instance.get('api/users/8')
  },
  setUserData(userData:UserType) {
    return instance.patch('/api/users', {userData: userData})
  },
  getDeliveryUserData() {
    return instance.get('/api/users/???')
  }
}
