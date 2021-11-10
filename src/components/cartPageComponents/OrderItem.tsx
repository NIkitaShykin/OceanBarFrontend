/* eslint-disable max-len */
import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {Image} from 'react-bootstrap'
import {
  minusOneDish,
  plusOneDish,
  removeDishFromCart,
} from '../../redux/actions'
import {orderedToast} from '../OrderToast/OrderedToast'

import './Cart.scss'
import {ApiCart} from '../../api/ApiCart'
import Cookies from 'js-cookie'
import ShiftingDish from '../../pages/menuPage/Menu/Dishes/ShiftingDish'
import {DishType} from '../../common/types/dishesType'
import {useAppSelector} from '../../redux/hooks'
import {IngredientsType} from '../../common/types/dishesType'
import {parseString} from '../../common/parceInString'

interface IOrderItemProps {
  id: number
  name: string
  price: string
  image: string
  numberOfDishes: number
  position: number
}

const OrderItem: React.FunctionComponent<IOrderItemProps> = ({
  id,
  name,
  price,
  image,
  numberOfDishes,
  position,
}) => {
  const allDishes: DishType[] = useAppSelector<any>((state) => state.dish)
  const currentDish = allDishes.find((el) => el.id == id)
  const [dishСhangeStatus, setDishСhangeStatus] = useState<boolean>(false)
  // @ts-ignore
  const [ingredients, setIngredients] = useState(currentDish.ingredients)

  useEffect(() => {
    // @ts-ignore
    setIngredients(currentDish.ingredients)
  }, [currentDish])

  const updatedDish = {...currentDish, ingredients}

  const updateIngredients = (updIngridients: IngredientsType) => {
    setIngredients(updIngridients)
  }
  const changeStatus = () => {
    setDishСhangeStatus(!dishСhangeStatus)
  }
  const dispatch = useDispatch()
  let [counter, setCounter] = useState(numberOfDishes)
  const [show, setShow] = useState(false)
  const token = Cookies.get('token')
  const handleClose = () => {
    ApiCart.updateDishInCart(
      position,
      numberOfDishes,
      token,
      parseString(ingredients)
    ).then((resp: any) => {
      orderedToast(
        `Добавленные игредиенты :
      ${resp.data.updatedPosition.ingredients}`,
        5000
      )
    })
    setShow(false)
  }
  const handleShow = () => setShow(true)
  const onDeleteHandler = () => {
    ApiCart.deleteDishFromCart(position, Cookies.get('token')).then(() => {
      console.log('deleted')
    })
    dispatch(removeDishFromCart(id))
    orderedToast(`Блюдо "${name}" удалено из корзины`)
  }

  return (
    <>
      {show ? (
        <ShiftingDish
          changeStatus={changeStatus}
          currentDish={updatedDish}
          updIngredients={updateIngredients}
          handleClose={handleClose}
        />
      ) : (
        <div className='order-item shadow' id={String(id)}>
          <div className='order-block order-img'>
            <Image className='rounded-3' src={image} width={80} height={80} />
          </div>

          <div className='order-block order-details'>
            <span className='order-title bold'>{name}</span>
            <span>{Number(price) * numberOfDishes} BYN</span>
            <a onClick={handleShow} style={{cursor: 'pointer'}}>
              Изменить состав
            </a>
          </div>
          <div className='order-block order-counter'>
            <button
              className='control'
              onClick={() => {
                if (counter > 1) {
                  setCounter(--counter)
                  ApiCart.updateDishInCart(position, counter, token).then(
                    () => {
                      console.log(numberOfDishes)
                    }
                  )
                  dispatch(minusOneDish({id: id, numberOfDishes: counter}))
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
                setCounter(++counter)
                ApiCart.updateDishInCart(position, counter, token).then(() => {
                  console.log(numberOfDishes)
                })
                dispatch(plusOneDish({id: id, numberOfDishes: counter}))
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
      )}
    </>
  )
}

export default OrderItem
