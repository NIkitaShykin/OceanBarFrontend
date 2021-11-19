import UserCart from '../../components/cartPageComponents/Cart'
import {DishInCart} from '../../common/types/dishesType'
import {useAppSelector} from '../../redux/hooks'

const Cart = () => {
  const dishes: DishInCart[] =
    useAppSelector((state) => state.cart.dishes)
  return <UserCart dishes={dishes} />
}

export default Cart
