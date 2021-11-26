import {TOrderType} from './cartTypes'
import {ApiDish} from './dishesType'
import {DeliveryAdressType, UserType} from './userTypes'

type OrderAdressType = {
  address: DeliveryAdressType
}
export type CommonOrderType = OrderAdressType & TOrderType

export type FetchedOrderType = {
  id: number,
  price?: number | string,
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

export interface IOrderResponse {
  price: number,
  state: string,
  type: string,
  date: string,
  time: string,
  tableSize: string,
  paymentType: string,
  address: string,
  user: number, // user id
  dishes: IDish[],
  id: number | string, // order id
}
interface IDish {
  id: number | string,
  name: string,
  price: number,
  weight: string,
  calories: string,
  imageURL: string,
  imgredients: string,
  dishCategory: dishCategory,
  cartPosition: CartPosition,
  order: FetchedOrderType
}

type dishCategory =
  'Плато'|
  'Супы' |
  'Салаты' |
  'Запеченные устрицы' |
  'Десерты'

type CartPosition = {
  id: number | string,
  ingredients: string,
  quantity: number,
  dish: IDish,
  user: any,
}
