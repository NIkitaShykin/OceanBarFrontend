import {AxiosResponse} from 'axios'

import {url} from '../api'
import {CommonOrderType, IGetOrderDishesResponse, IOrderResponse} from
  '../common/types/orderType'
import {$api} from './ApiAuth'


export const ApiOrder = {
  async createOrder(
    order: CommonOrderType, token: string | undefined
  ): Promise<AxiosResponse<any>> {
    return await $api.post<{order: IOrderResponse}>(`${url}/order`,
      order,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      })
  },

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
