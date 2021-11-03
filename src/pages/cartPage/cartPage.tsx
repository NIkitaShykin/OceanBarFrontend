import {useSelector} from 'react-redux'
import UserCart from '../../components/cartPageComponents/Cart'
// import {DishInCart} from '../../common/types/dishesType'
// import {DishType} from '../../common/types/dishesType'
import {AppStoreType} from '../../redux/reducers/rootReducer'

const Cart = () => {
  const dishes =
   useSelector<AppStoreType>((state) => state.cart.dishes)
   // @ts-ignore
  return <UserCart dishes={dishes} />
}

export default Cart
