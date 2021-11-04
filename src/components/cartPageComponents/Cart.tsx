/* eslint-disable max-len */
import React from 'react'
import {useDispatch} from 'react-redux'

import OrderItem from './OrderItem'
import Toggler from './ToggleButton'

import {clearCart} from '../../redux/actions'

import './Cart.scss'

const UserCart: React.FunctionComponent = (props: any) => {
  type radioBtnParams = {
    name: string
    value: string
  }[]

  const radios: radioBtnParams = [
    {name: 'Забронировать стол', value: '1'},
    {name: 'Доставка', value: '2'},
    {name: 'Навынос', value: '3'},
  ]

  const totalSum: any = props.dishes.reduce(
    (sum: any, current: any) =>
      sum + Number(current.price) * current.numberOfDishes,
    0
  )
  const cartSectionsClassName: string =
    props.dishes.length < 1 ? 'cart-sections hidden' : 'cart-sections'

  const orderCodes: JSX.Element[] = props.dishes.map((order: any) => (
    <OrderItem
      key={order.id}
      id={order.id}
      name={order.name}
      price={order.price}
      image={order.imageURL}
      numberOfDishes={order.numberOfDishes}
    />
  ))

  const dispatch = useDispatch()
  const handleClearCart = (e: any) => {
    e.preventDefault()
    dispatch(clearCart())
  }

  return (
    <div className='cart'>
      <div className='container'>
        <div className='cart-title'>Корзина</div>

        {props.dishes.length < 1 && (
          <div className='cart-empty'>
            <span>В корзине пока нет товаров</span>
          </div>
        )}

        <div className={cartSectionsClassName}>
          <div className='cart-section'>
            <div className='section-block section-title'>
              <div>
                <span className='uppercase'>Ваш заказ</span>
              </div>
              <div>
                <button
                  className='clear-button'
                  type='button'
                  onClick={(e) => handleClearCart(e)}
                >
                  Очистить корзину
                </button>
              </div>
            </div>
            <div className='section-block section-data orders'>
              {orderCodes}
            </div>
            <div className='section-block cart-total mt-3'>
              <span className='uppercase'>Итого: {totalSum} BYN</span>
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
