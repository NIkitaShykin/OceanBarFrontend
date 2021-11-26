import axios from 'axios'
import Cookies from 'js-cookie'

import {url} from '../api'
import {CommonOrderType} from '../common/types/orderType'


export const createOrder =
  async (order: CommonOrderType, token: string | undefined) => {
    const data = await axios.post<CommonOrderType>(`${url}/order`, order,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
      .then((response: any) => {
        console.log(response.data)
        console.log(response.data.order.id)
      })
      .catch(function(error) {
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


