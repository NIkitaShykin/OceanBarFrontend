import {ApiDish} from './dishesType'
import {DeliveryAdressType, UserType} from './userTypes'

type OrderAdressType = {
  address: DeliveryAdressType
}
export type TOrderType = {
  date: string
  tableSize: string
  time: string
  type?: string
  paymentType?: string
  price: string
  id?: string
}
export type CommonOrderType = OrderAdressType & TOrderType

export interface IOrderResponse {
  orders: any
  price: number,
  state: string, // order state: 'В процессе'/'Выполнен'
  type: string,
  date: string,
  time: string,
  tableSize: string,
  paymentType: string,
  address: string,
  user?: UserType & DeliveryAdressType, // user id
  dishes?: ApiDish[],
  id: number, // order id
}

interface IDish {
  id: number | string,
  name: string,
  price: number,
  weight: string,
  calories: string,
  imageURL: string,
  ingredients: string,
  dishCategory: dishCategory,
  cartPosition?: CartPosition,
  order?: IOrderResponse
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

export interface IGetOrdersResponse {
  orders: IOrderResponse[]
}

export interface IOrderDishesResponse {
  id: number,
  ingredients: string,
  quantity: number,
  dish: IDish,
  order: IOrderResponse
}

export interface IGetOrderDishesResponse {
  dishes: IOrderDishesResponse[]
}
