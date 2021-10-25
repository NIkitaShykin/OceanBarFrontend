import axios from 'axios'

import {url} from '../../api'

export const signUp = (user) => {
  return axios
    .post(`${url}/users/register`, user)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        dispatch({
          type: 'SIGN_UP',
          tempAuthUrl: response.data.user.id
        })
      } else {
        throw new Error(response.statusText)
      }
    })
    .catch((error) => {
      console.log(error.response)
    })
}
