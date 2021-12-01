import {AxiosResponse} from 'axios'

import {$api} from './ApiAuth'
import {
  IGetOrdersResponse,
  IGetOrderDishesResponse
} from '../common/types/orderType'

export const ApiOrder = {
  async getOrders(
    token: string | undefined
  ): Promise<AxiosResponse<IGetOrdersResponse>> {
    return $api.get<IGetOrdersResponse>('/order')
  },

  async getOrderDishes(
    token: string | undefined,
    orderId: number
  ): Promise<AxiosResponse<IGetOrderDishesResponse>> {
    return $api.get<IGetOrderDishesResponse>(`/order/dishes/${orderId}`)
  }
}
