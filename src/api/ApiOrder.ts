import axios from 'axios'
import Cookies from 'js-cookie'

import {url} from '../api'
import {CommonOrderType, IOrderResponse} from '../common/types/orderType'


export const createOrder =
   (order: CommonOrderType, token: string | undefined) => {
     const data = axios.post<IOrderResponse>(`${url}/order`, order,
       {
         headers: {
           Authorization: `Bearer ${token}`,
         }
       })
       .then((response) => {
         console.log(response.data)
         console.log(response.data.id)
       })
       .catch((error) => {
         throw new Error(error)
       })
     return data
   }

export const fetchOrder = async () => {
  const res: any = await axios.get(`${url}/order`,
    {
      headers: {
        Authorization: `Bearer ${Cookies.get('token')}`
      }
    })

  return res
}


