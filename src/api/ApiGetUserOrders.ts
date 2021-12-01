import {AxiosResponse} from 'axios'

import {$api} from './ApiAuth'
import {IGetOrdersResponse} from '../common/types/orderType'

export const ApiOrder = {
  async getOrders(
    token: string | undefined
  ): Promise<AxiosResponse<IGetOrdersResponse>> {
    return $api.get<IGetOrdersResponse>('/order')
  }
}
