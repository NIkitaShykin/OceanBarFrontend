import {useSelector} from 'react-redux'
import UserCart from '../../components/cartPageComponents/Cart'
// import {DishInCart} from '../../common/types/dishesType'
import {DishType} from '../../common/types/dishesType'


const Cart = () => {
  const dishes:DishType = useSelector((state:any) => state.cart.dishes)
  // @ts-ignore
  return <UserCart dishes={dishes} />
}

export default Cart
