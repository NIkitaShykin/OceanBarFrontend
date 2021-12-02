import axios, {AxiosResponse} from 'axios'

import {url} from '../api'
import {CommonOrderType, IGetOrderDishesResponse, IOrderResponse} from
  '../common/types/orderType'
import {$api} from './ApiAuth'


export const createOrder =
   async (order: CommonOrderType, token: string | undefined) => {
     const data = await axios.post<{order: IOrderResponse}>(`${url}/order`,
       order,
       {
         headers: {
           Authorization: `Bearer ${token}`,
         }
       })
       .then((response) => {
       })
       .catch((error) => {
         throw new Error(error)
       })
     return data
   }


export const ApiOrder = {
  async getOrders(
    token: string | undefined
  ) : Promise<AxiosResponse<IOrderResponse>> {
    return await $api.get<IOrderResponse>('/order')
  },

  async getOrderDishes(
    token: string | undefined,
    orderId: number
  ): Promise<AxiosResponse<IGetOrderDishesResponse>> {
    return $api.get<IGetOrderDishesResponse>(`/order/dishes/${orderId}`)
  }
}
