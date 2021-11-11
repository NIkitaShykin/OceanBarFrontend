import {UserType} from '../../src/common/types/userTypes'

import {instance} from './index'

export const ApiUser = {
  userLogin(user: UserType) {
    return instance.post('users/auth', {data: user})
  },
  userRegister(user: UserType) {
    return instance.post('users/register', {data: user})
  },
  getUsers() {
    return instance.get('users/8')
  },
}
