import React, {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {Image} from 'react-bootstrap'
import Cookies from 'js-cookie'

import {orderedToast} from '../OrderToast/OrderedToast'
import ShiftingDish from '../../pages/menuPage/Menu/Dishes/ShiftingDish'

import {parseString} from '../../common/parceInString'
import {
  DishInCart,
  IngredientType,
  IngredientsType,
} from '../../common/types/dishesType'
import {TOrderItem} from '../../common/types/cartTypes'

import {useAppSelector} from '../../redux/hooks'
import {
  minusOneDish,
  plusOneDish,
  removeDishFromCart,
  updateDishInCart,
} from '../../redux/actions'
import {ApiCart} from '../../api/ApiCart'

import './Cart.scss'

const OrderItem: React.FunctionComponent<TOrderItem> = ({
  id,
  name,
  price,
  imageURL,
  numberOfDishes,
  position,
}) => {
  const cartDishes = useAppSelector((state) => state.cart.dishes)
  const currentDish = cartDishes.find((el: DishInCart) => el.id === id)
  const [dishСhangeStatus, setDishСhangeStatus] = useState<boolean>(false)
  const [ingredients, setIngredients] =
    useState(currentDish ? currentDish.ingredients : [])

  const removedIngredientsArr: Array<string> = []

  ingredients.forEach((ingredient: IngredientType) => {
    if (ingredient.isAdded === false) {
      removedIngredientsArr.push(ingredient.name)
    }
  })

  const removedIngredients =
    removedIngredientsArr.length ? removedIngredientsArr.join(', ') : ''

  useEffect(() => {
    setIngredients(ingredients)
  }, [currentDish])

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

  const handleShow = () => setShow(true)

  const handleClose = () => {
    ApiCart.updateDishInCart(
      position,
      numberOfDishes,
      token,
      parseString(ingredients)
    ).then(() => {})

    dispatch(updateDishInCart({id: id, ingredients: ingredients}))
    setShow(false)
  }

  const onDeleteHandler = () => {
    ApiCart.deleteDishFromCart(position, Cookies.get('token')).then(() => {})
    dispatch(removeDishFromCart(id))
    orderedToast(`Блюдо "${name}" удалено из корзины`)
  }

  return (
    <>
      {show && currentDish ? (
        <ShiftingDish
          changeStatus={changeStatus}
          currentDish={{
            ...currentDish,
            ingredients,
          }}
          updateIngredients={updateIngredients}
          handleClose={handleClose}
        />
      ) : (
        <div className='order-item shadow' id={String(id)}>
          <div className='order-block order-img'>
            <Image
              className='rounded-3'
              src={imageURL}
              width={80}
              height={80}
            />
          </div>

          <div className='order-block order-details'>
            <span className='order-title bold'>{name}</span>
            <span>{Number(price) * numberOfDishes} BYN</span>
            <a onClick={handleShow} style={{cursor: 'pointer'}}>
              Изменить состав
            </a>
            {
              removedIngredients &&
              <span className='short-notice'>
                без добавления ингредиента: {removedIngredients}
              </span>
            }
          </div>
          <div className='order-block order-counter'>
            <button
              className='control'
              onClick={() => {
                if (counter > 1) {
                  setCounter(--counter)
                  ApiCart.updateDishInCart(position, counter, token).then(
                    () => {}
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
                ApiCart.updateDishInCart(position, counter, token).then(
                  (resp) => {}
                )
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
