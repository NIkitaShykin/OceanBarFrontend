import {TOrderType} from './cartTypes'
import {ApiDish} from './dishesType'
import {DeliveryAdressType, UserType} from './userTypes'

type OrderAdressType = {
  address: DeliveryAdressType
}
export type CommonOrderType = OrderAdressType & TOrderType

export type FetchedOrderType = {
  id: number,
  price?: number,
  state?: string,
  user: UserType,
  dishes: ApiDish[],
  type?: string,
  date: string,
  time: string,
  tableSize?: string,
  paymentType?: string,
  address?: string
}
