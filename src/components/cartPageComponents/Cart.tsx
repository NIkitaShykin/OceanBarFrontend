import React, {MouseEvent, useState} from 'react'
import {useDispatch} from 'react-redux'

import OrderItem from './OrderItem'
import Toggler from './ToggleButton'

import ReserveATableForm from './OrderForms/ReserveATableForm'
import DeliveryForm from './OrderForms/DeliveryForm'
import TakeawayForm from './OrderForms/TakeawayForm'

import {clearCart} from '../../redux/actions'

import {TRadioBtnParams, TOrderItem} from '../../common/types/cartTypes'

import './Cart.scss'

const UserCart: React.FC = (props: any) => {
  // 'props: any' as cart functionality is still in progress
  const [orderType, setOrderType] = useState<string>('')

  const radios: TRadioBtnParams[] = [
    {name: 'Забронировать стол', value: 'reserve-a-table'},
    {name: 'Доставка', value: 'delivery'},
    {name: 'Навынос', value: 'takeaway'},
  ]

  const totalSum = props.dishes.reduce(
    (sum: number, current: TOrderItem) =>
      sum + Number(current.price) * current.numberOfDishes,
    0
  )
  const cartSectionsClassName =
    props.dishes.length < 1 ? 'cart-sections hidden' : 'cart-sections'

  const orderCodes = props.dishes.map((order: TOrderItem) => (
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
  const handleClearCart = (e: MouseEvent) => {
    e.preventDefault()
    dispatch(clearCart())
  }

  const handleRadioValueChange = (value: string) => {
    setOrderType(value)
  }

  const handleRadioValueClearance = (value: string) => {
    setOrderType(value)
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
                <span className='uppercase'>
                  Ваш заказ
                </span>
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
            <div className='section-block cart-total'>
              <span className='uppercase'>
                Итого: {totalSum} BYN
              </span>
            </div>
          </div>

          <div className='cart-section'>
            <div className='section-block section-title'>
              <span className='uppercase'>
                Тип заказа
              </span>
            </div>
            <div className='section-block section-data options'>
              <Toggler
                radios={radios}
                size='lg'
                checkedBtn={orderType}
                handleRadioValueChange =
                  {(value: string) => handleRadioValueChange(value)}
              />
            </div>
            {
              orderType === 'reserve-a-table' &&
              <ReserveATableForm
                handleRadioValueClearance =
                  {(value: string) => handleRadioValueClearance(value)}
              />
            }
            {
              orderType === 'delivery' &&
              <DeliveryForm />
            }
            {
              orderType === 'takeaway' &&
              <TakeawayForm
                handleRadioValueClearance =
                  {(value: string) => handleRadioValueClearance(value)}
              />
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserCart
