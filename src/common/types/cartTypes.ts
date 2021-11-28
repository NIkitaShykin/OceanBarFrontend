export type TRadioBtnParams = {
  name: string
  value: string
}

export type TOrderItem = {
  key?:number
  id: number,
  name: string,
  price: string,
  imageURL: string,
  numberOfDishes: number,
  position: number,
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

