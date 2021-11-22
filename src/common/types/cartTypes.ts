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
}

export type TOrderType = {
  date: string;
  tableSize: string;
  timeSlot: string;
  orderType: string;
}
