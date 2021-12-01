/* eslint-disable react/prop-types */
import {Accordion} from 'react-bootstrap'

import DishView from './dishView'
import {ApiDish} from '../../common/types/dishesType'

interface OrderViewProps {
  price: number,
  state: string,
  type: string,
  date: string,
  time: string,
  tableSize: string,
  paymentType: string,
  address: string,
  dishes: ApiDish[],
  id: string,
}

const OrderView: React.FC<OrderViewProps> = ({
  price,
  state,
  type,
  date,
  time,
  tableSize,
  paymentType,
  address,
  dishes,
  id
}) => {
  const dishesCodes = dishes.map((d: any) =>
    <DishView
      key={d.index}
      name={d.name}
      price={d.price}
    />
  )

  return (
    <>
      <Accordion.Item eventKey={id}>
        <Accordion.Header>
          <div className='history-order-title'>
              Заказ {id} от {date}
          </div>
        </Accordion.Header>
        <Accordion.Body>
          <div className='history-order-block'>
            <div className='shadow border'>
              <div className='history-order-item'>
                <div className='history-header-name'>
                  Название
                </div>
                <div className='history-header-price'>
                  Цена за 1 позицию
                </div>
              </div>
              <div className='details-devider' />

              <div className='history-order-items'>
                {dishesCodes}
              </div>

              <div className='history-order-type-block'>
                <div className='row'>
                  <div className='col order-type-header'>
                    Тип заказа:
                  </div>
                  <div className='col order-type-text'>
                    {type}
                  </div>
                </div>
                <div className='row'>
                  <div className='col order-type-header'>
                    Дата:
                  </div>
                  <div className='col order-type-text'>
                    {date}
                  </div>
                </div>
                <div className='row'>
                  <div className='col order-type-header'>
                    Время:
                  </div>
                  <div className='col order-type-text'>
                    {time}
                  </div>
                </div>
                {type === 'Доставка' &&
                  <div className='row'>
                    <div className='col order-type-header'>
                      Адрес доставки:
                    </div>
                    <div className='col order-type-text'>
                      {address}
                    </div>
                  </div>
                }
                {
                  type === 'Бронирование стола' &&
                  <div className='row'>
                    <div className='col order-type-header'>
                      Стол на:
                    </div>
                    <div className='col order-type-text'>
                      {tableSize}
                    </div>
                  </div>
                }
              </div>

              <div className='details-devider'></div>
              <div className='row mb-3'>
                <div className='col history-total text-right'>
                  Итого:
                </div>
                <div className='col history-total'>
                  {price} BYN
                </div>
              </div>
              <div className='details-devider' />
              <div className='row'>
                <div className='col order-type-header mb'>
                  Cтатус заказа:
                </div>
                <div className='col order-type-text mb'>
                  {state}
                </div>
              </div>
              <div className='row'>
                <div className='col order-type-header mb'>
                  Тип оплаты:
                </div>
                <div className='col order-type-text mb'>
                  {paymentType}
                </div>
              </div>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </>
  )
}

export default OrderView
