import {useEffect, useState} from 'react'
import {Accordion} from 'react-bootstrap'
import Cookies from 'js-cookie'

import {ApiOrder} from '../../api/ApiOrder'
import OrderView from './orderView'
import {IOrderResponse} from '../../common/types/orderType'


const CurrentOrders = () => {
  const [currOrders, setCurrentOrders] = useState<IOrderResponse[]>([])

  const handleLoad = () => {
    ApiOrder.getOrders(Cookies.get('token'))
      .then((response) => {
        const apiCurrentOrders: IOrderResponse[] = response.data.orders
          .filter((order: IOrderResponse) => order.state === 'В процессе')
        setCurrentOrders(apiCurrentOrders)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }

  useEffect(() => {
    handleLoad()
  }, [])

  const orderCodes = currOrders?.map((order) =>
    <OrderView
      key={order.id}
      price={order.price}
      state={order.state}
      type={order.type}
      date={order.date}
      time={order.time}
      tableSize={order.tableSize}
      paymentType={order.paymentType}
      address={order.address}
      id={String(order.id)}
    />
  )
  return (
    <>
      <Accordion flush>
        {orderCodes}
      </Accordion>
    </>
  )
}

export default CurrentOrders
