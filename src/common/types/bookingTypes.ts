export type bookingOrderType = {
    date: string,
    name: string,
    phone: string,
    time: string,
    amountofpeople: number
}
export type bookingTablesType = {
    id:number,
    date: string,
    name: string,
    phone: string,
    time: string,
    amountofpeople: number
}

export type InitialTablesType = {
    tables: bookingTablesType[]
}
