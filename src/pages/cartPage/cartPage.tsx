import {useSelector} from 'react-redux'
import UserCart from '../../components/cartPageComponents/Cart'
import {DishInCart} from '../../common/types/dishesType'
import {IReduxGlobalState} from '../../common/types/globalStateType'

const Cart = () => {
  // debugger //
  const dishes: DishInCart[] =
    useSelector((state: IReduxGlobalState) => state.cart.dishes)
  // @ts-ignore
  return <UserCart dishes={dishes} />
}

export default Cart
