import {useEffect} from 'react'
import {useDispatch} from 'react-redux'
import Cookies from 'js-cookie'

import UserCart from '../../components/cartPageComponents/Cart'

import {DishInCart, ApiDish} from '../../common/types/dishesType'

import {addDishToCart, clearCart} from '../../redux/actions'
import {useAppSelector} from '../../redux/hooks'

import {ApiCart} from '../../api/ApiCart'

import {mapApiDishToDishInCart} from '../../utils/typeMappers'

const Cart = () => {
  const dispatch = useDispatch()

  const isAuthorized: boolean =
    useAppSelector((state) => state.auth.isAuthorized)

  const dishes: DishInCart[] =
    useAppSelector((state) => state.cart.dishes)

  const handleLoad = () => {
    ApiCart.getCart(Cookies.get('token')).then((resp) => {
      resp.data.cart.forEach((dish: ApiDish) => {
        dispatch(
          addDishToCart(mapApiDishToDishInCart(dish))
        )
      })
    })
  }

  useEffect(() => {
    if (isAuthorized) {
      dispatch(clearCart())
      handleLoad()
    }
  }, [])

  return (
    <UserCart dishes={dishes} />
  )
}

export default Cart
