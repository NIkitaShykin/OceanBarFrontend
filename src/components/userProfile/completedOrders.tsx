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

  const orderCodes = doneOrders?.map((o) =>
    <OrderView
      key={o.id}
      price={o.price}
      state={o.state}
      type={o.type}
      date={o.date}
      time={o.time}
      tableSize={o.tableSize}
      paymentType={o.paymentType}
      address={o.address}
      dishes={o.dishes}
      id={String(o.id)}
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
