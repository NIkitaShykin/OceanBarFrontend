/* eslint-disable max-len */
import React from 'react'
// import {useState} from 'react'

import {TOrderItem} from './common'

import OrderItem from './OrderItem'
import Toggler from './ToggleButton'

import './Cart.scss'

const UserCart: React.FunctionComponent = () => {
  // const [orders, setOrders] = useState([])

  type radioBtnParams = {
    name: string,
    value: string
  }[]

  const radios: radioBtnParams = [
    {name: 'Забронировать стол', value: '1'},
    {name: 'Доставка', value: '2'},
    {name: 'Навынос', value: '3'},
  ]

  // setOrders(
  //   [
  //     {
  //       id: 1,
  //       name: 'Тартар',
  //       price: '120',
  //       image: 'https://www.edimdoma.ru/system/images/contents/0000/6787/wide/AdobeStock_275611083_%D0%B8%D1%81%D0%BF%D1%80.jpg?1564142039',
  //     },
  //     {
  //       id: 2,
  //       name: 'Тунец',
  //       price: '150',
  //       image: 'https://www.edimdoma.ru/system/images/contents/0000/6788/wide/AdobeStock_166014726_result.jpeg?1564134468',
  //     },
  //     {
  //       id: 3,
  //       name: 'Мидии',
  //       price: '90',
  //       image: 'https://www.edimdoma.ru/system/images/contents/0000/6789/wide/AdobeStock_196463507_result.jpeg?1564134469',
  //     }
  //   ]
  // )

  const orders: TOrderItem[] = [
    {
      id: 1,
      name: 'Тартар',
      price: '120',
      image: 'https://www.edimdoma.ru/system/images/contents/0000/6787/wide/AdobeStock_275611083_%D0%B8%D1%81%D0%BF%D1%80.jpg?1564142039',
    },
    {
      id: 2,
      name: 'Тунец',
      price: '150',
      image: 'https://www.edimdoma.ru/system/images/contents/0000/6788/wide/AdobeStock_166014726_result.jpeg?1564134468',
    },
    {
      id: 3,
      name: 'Мидии',
      price: '90',
      image: 'https://www.edimdoma.ru/system/images/contents/0000/6789/wide/AdobeStock_196463507_result.jpeg?1564134469',
    }
  ]

  const orderCodes: JSX.Element[] = orders.map((order) =>
    <OrderItem
      key={order.id}
      id={order.id}
      name={order.name}
      price={order.price}
      image={order.image}
    />
  )

  return (
    <div className='cart'>
      <div className='container'>
        <div className='cart-title'>Корзина</div>

        <div className='cart-sections'>
          <div className='cart-section'>
            <div className='section-block section-title'>
              <div>
                <span className='uppercase'>Ваш заказ</span>
              </div>
              <div>
                <button className='clear-button'>Очистить корзину</button>
              </div>
            </div>
            <div className='section-block section-data orders'>
              {orderCodes}
            </div>
            <div className='section-block mt-3'>
              <span className='uppercase' style={{fontSize: '20px'}}>
                Итого:
              </span>
            </div>
          </div>

          <div className='cart-section'>
            <div className='section-block section-title'>
              <span className='uppercase'>Тип заказа</span>
            </div>
            <div className='section-block section-data options'>
              <Toggler radios={radios} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCart
