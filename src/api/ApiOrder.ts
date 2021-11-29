import axios from 'axios'
import Cookies from 'js-cookie'
// import {addOrder} from 'src/redux/actions'

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
         console.log(response.data.order.id)
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

export const fetchReposData = () => {
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

// fetchOrder(Cookies.get('token')).then((resp) => console.log(resp.data.order))


