import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import Cookies from 'js-cookie'

import UserCart from '../../components/cartPageComponents/Cart'

import {DishInCart, ApiDish} from '../../common/types/dishesType'

import {addDishToCart, clearCart} from '../../redux/actions'
import {useAppSelector} from '../../redux/hooks'

import {ApiCart} from '../../api/ApiCart'

import {mapApiDishToDishInCart} from '../../utils/typeMappers'
import Spinner from 'src/components/Spinner/Spinner'

const Cart = () => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const isAuthorized: boolean =
    useAppSelector((state) => state.auth.isAuthorized)

  const dishes: DishInCart[] =
    useAppSelector((state) => state.cart.dishes)

  const handleLoad = () => {
    setIsLoading(true)
    ApiCart.getCart(Cookies.get('token')).then((response) => {
      setIsLoading(false)
      response.data.cart.forEach((dish: ApiDish) => {
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
    <>
      {isLoading && <Spinner />}
      <UserCart dishes={dishes} />
    </>
  )
}

export default Cart
