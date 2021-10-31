import React from 'react'
import {useSelector} from 'react-redux'
import UserCart from '../../components/cartPageComponents/Cart'

const Cart = (props) => {
  const dishes = useSelector((state: any) => state.cart.dishes)
  // @ts-ignore
  return <UserCart dishes={dishes} />
}

export default Cart
