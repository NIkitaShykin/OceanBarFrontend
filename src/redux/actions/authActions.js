import axios from 'axios'
import Cookies from 'js-cookie'
import {useDispatch} from 'react-redux'

import {url} from '../../api'

export const logIn = (user) => {
  return axios
    .post(`${url}/users/auth`, user)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        Cookies.set('token', response.data.token, {expires: 30})

        dispatch({
          type: 'LOG_IN',
          user: response.data.data,
        })
      } else {
        throw new Error(response.statusText)
      }
    })
    .catch((error) => {
      console.log(error.response)
    })
}

export const logOut = (user) => {
  const dispatch = useDispatch()

  return axios
    .post(`${url}/users/:user_${user.id}`, user)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        Cookies.remove('token')

        dispatch({
          type: 'LOG_OUT',
        })
      } else {
        throw new Error(response.statusText)
      }
    })
    .catch((error) => {
      console.log(error.response)
    })
}
