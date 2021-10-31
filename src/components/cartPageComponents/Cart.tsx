/* eslint-disable max-len */
import React from 'react'
// import {useState} from 'react'

import OrderItem from './OrderItem'
import Toggler from './ToggleButton'
import './Cart.scss'

const UserCart: React.FunctionComponent = (props: any) => {
  // const [orders, setOrders] = useState([])
  type radioBtnParams = {
    name: string
    value: string
  }[]

  const radios: radioBtnParams = [
    {name: 'Забронировать стол', value: '1'},
    {name: 'Доставка', value: '2'},
    {name: 'Навынос', value: '3'},
  ]

  const orderCodes: JSX.Element[] = props.dishes.map((order) => (
    <OrderItem
      key={order.id}
      id={order.id}
      name={order.name}
      price={order.prise}
      image={order.image}
    />
  ))

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
