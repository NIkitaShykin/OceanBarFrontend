import axios from 'axios'
import Cookies from 'js-cookie'

import {url} from '../api'
import {CommonOrderType, IOrderResponse} from '../common/types/orderType'


export const createOrder =
   (order: CommonOrderType, token: string | undefined) => {
     const data = axios.post<{order: IOrderResponse}>(`${url}/order`, order,
       {
         headers: {
           Authorization: `Bearer ${token}`,
         }
       })
       .then((response) => {
         console.log('New order: ', response.data)
         console.log('New order ID: ', response.data.order.id)
       })
       .catch((error) => {
         throw new Error(error)
       })
     return data
   }

export const fetchOrder = async (token: string | undefined) => {
  try {
    const response =
      await axios.get<{order: [IOrderResponse]}>(`${url}/order`,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get('token')}`
          }
        })
    return Promise.resolve(response.data)
  } catch (error) {
    console.error(error)
    // eslint-disable-next-line prefer-promise-reject-errors
    return Promise.reject()
  }
}

export const fetchReponsData = () => {
  return function() {
    // dispatch(getOrders())
    axios.get(`${url}/order`,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get('token')}`
        }
      })
      .then((response) => {
        console.log(response.data)
        // dispatch(receiveData(response.data))
      })
      .catch((response) => {
        console.log(response.data)
        // dispatch(receiveError(response))
      })
  }
}
