/* eslint-disable max-len */
import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {Image} from 'react-bootstrap'

import {
  removeDishFromCart,
  plusOneDish,
  minusOneDish,
} from '../../redux/actions'
import {orderedToast} from '../OrderToast/OrderedToast'

import './Cart.scss'

interface IOrderItemProps {
  id: number
  name: string
  price: string
  image: string
  numberOfDishes: number
}

const OrderItem: React.FunctionComponent<IOrderItemProps> = ({
  id,
  name,
  price,
  image,
  numberOfDishes,
}) => {
  const dispatch = useDispatch()
  const [counter, setCounter] = useState(numberOfDishes)

  const onDeleteHandler = () => {
    dispatch(removeDishFromCart(id))
    // eslint-disable-next-line new-cap
    orderedToast(`Блюдо "${name}" удалено из корзины`)
  }

  return (
    <div className='order-item shadow' id={String(id)}>
      <div className='order-block order-img'>
        <Image className='rounded-3' src={image} width={80} height={80} />
      </div>

      <div className='order-block order-details'>
        <span className='order-title bold'>{name}</span>
        <span>{Number(price) * numberOfDishes} BYN</span>
        <a>Изменить состав</a>
      </div>

      <div className='order-block order-counter'>
        <button
          className='control'
          onClick={() => {
            if (counter > 1) {
              setCounter(counter - 1)
              dispatch(minusOneDish({id: id, numberOfDishes: --numberOfDishes}))
            } else {
              onDeleteHandler()
            }
          }}
        >
          -
        </button>
        <span className='counter'>{counter < 0 ? 0 : counter}</span>
        <button
          className='control'
          onClick={() => {
            setCounter(counter + 1)
            dispatch(plusOneDish({id: id, numberOfDishes: ++numberOfDishes}))
          }}
        >
          +
        </button>
      </div>

      <div className='order-block'>
        <div className='order-deletion' onClick={() => onDeleteHandler()}>
          <i className='far fa-trash-alt icon-height delete-button'></i>
        </div>
      </div>
    </div>
  )
}

export default OrderItem
