import {useEffect, useState} from 'react'
import {Accordion} from 'react-bootstrap'
import Cookies from 'js-cookie'

import OrderView from './orderView'
import {ApiOrder} from '../../api/ApiGetUserOrders'
import {IOrderResponse} from '../../common/types/orderType'

const CompletedOrders = () => {
  const [doneOrders, setDoneOrders] = useState<IOrderResponse[]>([])
  const token = Cookies.get('token')

  const handleLoad = () => {
    ApiOrder.getOrders(token).then((response) => {
      const apiDoneOrders: IOrderResponse[] = response.data.orders
        .filter((order) => order.state === 'Выполнен')
      setDoneOrders(apiDoneOrders)
    })
  }

  useEffect(() => {
    handleLoad()
  }, [])

  const orderCodes = doneOrders?.map((order) =>
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

export default CompletedOrders
