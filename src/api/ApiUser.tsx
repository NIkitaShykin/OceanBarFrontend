import axios from 'axios'

import {UserType} from '../../src/common/types/userTypes'

const instance = axios.create({
  baseURL: 'http://13.49.241.158:3000/'
})

export const ApiUsers = {
  userLogin(user:UserType) {
    return instance.post('users/auth', {data: user})
  },
  userRegister(user:UserType) {
    return instance.post('users/register', {data: user})
  }
}


