import {useEffect, useState} from 'react'
import {Accordion} from 'react-bootstrap'
import Cookies from 'js-cookie'

import {ApiOrder} from '../../api/ApiOrder'
import {IOrderResponse} from '../../common/types/orderType'


const currentOrders = () => {
  const [currOrders, setCurrentOrders] = useState<IOrderResponse[]>([])

  const handleLoad = () => {
    ApiOrder.getOrders(Cookies.get('token'))
      .then((response) => {
        const apiCurrentOrders: IOrderResponse[] = response.data.orders
          .filter((order: IOrderResponse) => order.state === 'В процессе')
        setCurrentOrders(apiCurrentOrders)

        console.log('Массив со статусом текущие: ', apiCurrentOrders)
      })
      .catch((error) => {
        throw new Error(error)
      })
  }

  useEffect(() => {
    handleLoad()
  }, [])

  return (
    <>
      {currOrders.map((order) =>
        <Accordion
          key={order.id}
          flush
        >
          <Accordion.Item eventKey='0'>
            <Accordion.Header>
              <div className='history-order-title'>
              Заказ №{order.id} от {order.date}г
              </div>
            </Accordion.Header>
            <Accordion.Body>
              <div className='history-order-block'>
                <div className='shadow border'>
                  <div className='history-order-item'>
                    <div className='history-header-name'>
                  Название
                    </div>
                    <div className='history-header-quant'>
                  Количество
                    </div>
                    <div className='history-header-price'>
                  Цена за 1 позицию
                    </div>
                  </div>
                  <div className='details-devider' />
                  {order.dishes.map((dish: any, id: number) =>
                    <div
                      className='history-order-item'
                      key={dish.id}>
                      <div className='history-header-name'>
                        <span className='details-name'>{dish.name}
                        </span>
                      </div>
                      <div className='history-header-quant'>
                        <span className='counter'></span>
                      </div>
                      <div className='history-header-price'>
                        <span>{dish.price} BYN</span>
                      </div>
                    </div>
                  )}

                  <div className='history-order-type-block'>
                    <div className='row'>
                      <div className='col order-type-header'>
                    Тип заказа:
                      </div>
                      <div className='col order-type-text'>
                        {order.type}
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col order-type-header'>
                    Дата:
                      </div>
                      <div className='col order-type-text'>
                        {order.date}
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col order-type-header'>
                    Время:
                      </div>
                      <div className='col order-type-text'>
                        {order.time}
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col order-type-header'>
                    Адрес доставки:
                      </div>
                      <div className='col order-type-text'>
                        {order.address}
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col order-type-header'>
                    Стол на:
                      </div>
                      <div className='col order-type-text'>
                        {order.tableSize}
                      </div>
                    </div>
                    <div className='row'>
                      <div className='col order-type-header'>
                        Оплата:
                      </div>
                      <div className='col order-type-text'>
                        {order.paymentType}
                      </div>
                    </div>
                  </div>

                  <div className='row mb-3'>
                    <div className='col history-total text-right'>
                  Итого:
                    </div>
                    <div className='col history-total'>
                      {order.price} BYN
                    </div>
                  </div>
                  <div className='details-devider' />
                  <div className='row'>
                    <div className='col order-type-header mb'>
                  Cтатус заказа:
                    </div>
                    <div className='col order-type-text mb'>
                      {order.state}
                    </div>
                  </div>
                </div>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      )}
    </>
  )
}

export default currentOrders

