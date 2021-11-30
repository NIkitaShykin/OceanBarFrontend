import React, {useState} from 'react'
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

import {
  minusOneDish,
  plusOneDish,
  removeDishFromCart,
  updateDishInCart,
} from '../../redux/actions'
import {useAppSelector} from '../../redux/hooks'
import {ApiCart} from '../../api/ApiCart'

import './Cart.scss'

const OrderItem: React.FC<TOrderItem> = ({
  id,
  name,
  price,
  imageURL,
  numberOfDishes,
  position,
}) => {
  const token = Cookies.get('token')

  const cartDishes: DishInCart[] =
    useAppSelector((state) => state.cart.dishes)
  const currentDish = cartDishes.find((el: DishInCart) => el.id === id)

  const [counter, setCounter] = useState<number>(numberOfDishes)
  const [show, setShow] = useState<boolean>(false)
  const [dishСhangeStatus, setDishСhangeStatus] = useState<boolean>(false)
  const [ingredients, setIngredients] =
    useState<IngredientsType>(currentDish ? currentDish.ingredients : [])

  const dispatch = useDispatch()

  const getRemovedIngredients = (ingredients: IngredientType[]) => {
    const removedIngredientsArr: Array<string> = []

    ingredients.forEach((ingredient) => {
      if (ingredient.isAdded === false) {
        removedIngredientsArr.push(ingredient.name)
      }
    })

    return removedIngredientsArr.join(', ')
  }

  const showIngredientsList = () => setShow(true)

  const updateIngredients = (updIngridients: IngredientsType) => {
    setIngredients(updIngridients)
  }

  const changeStatus = () => {
    setDishСhangeStatus(!dishСhangeStatus)
  }

  const closeIngredientsList = () => {
    ApiCart.updateDishInCart(
      position,
      numberOfDishes,
      token,
      parseString(ingredients)
    ).then(() => {
      getRemovedIngredients(ingredients)
      dispatch(updateDishInCart({id: id, ingredients: ingredients}))
      setShow(false)
    })
  }

  const onDeleteHandler = () => {
    ApiCart.deleteDishFromCart(position, Cookies.get('token')).then(() => {
      dispatch(removeDishFromCart(id))
      orderedToast(`Блюдо "${name}" удалено из корзины`)
    })
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
          handleClose={closeIngredientsList}
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
            <a onClick={showIngredientsList} style={{cursor: 'pointer'}}>
              Изменить состав
            </a>
            {
              getRemovedIngredients(ingredients) &&
              <span className='short-notice'>
                без добавления ингредиента: {getRemovedIngredients(ingredients)}
              </span>
            }
          </div>
          <div className='order-block order-counter'>
            <button
              className='control'
              onClick={() => {
                if (counter > 1) {
                  const readCounterVal = counter - 1
                  setCounter(readCounterVal)
                  ApiCart.updateDishInCart(position, readCounterVal, token)
                    .then(
                      () => {
                        dispatch(minusOneDish({
                          id: id,
                          numberOfDishes: readCounterVal
                        }))
                      }
                    )
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
                const readCounterVal = counter + 1
                setCounter(readCounterVal)
                ApiCart.updateDishInCart(position, readCounterVal, token).then(
                  () => {
                    dispatch(plusOneDish({
                      id: id,
                      numberOfDishes: readCounterVal
                    }))
                  }
                )
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
