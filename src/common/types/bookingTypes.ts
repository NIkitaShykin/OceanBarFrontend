export type bookingOrderType = {
    date: string,
    name: string,
    phone: string,
    time: string,
    amountofpeople: number
}
export type BookingTablesType = {
    id:number,
    date: string,
    name: string,
    phone: string,
    time: string,
    amountofpeople: number
}

export type OrdersType = {
    id:number,
    date: string,
    price:number,
    time: string,
    type:string,
    state:string,
    tableSize:string | null,
    paymentType:string | null,
    address:string | null


}

export type InitialTablesType = {
    bookings: BookingTablesType[]
}

export type InitialOrdersType = {
    orders: OrdersType[]
}
