import axios from 'axios'

import {UserType} from '../../src/common/types/userTypes'

const instance = axios.create({
  baseURL: 'http://localhost:3001/'
})

export const ApiUser = {
  userLogin(user:UserType) {
    return instance.post('users/auth', {data: user})
  },
  userRegister(user:UserType) {
    return instance.post('users/register', {data: user})
  },
  getUsers() {
    return instance.get('api/users/8')
  }
}


