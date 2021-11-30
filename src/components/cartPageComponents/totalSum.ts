import {DishInCart} from '../../common/types/dishesType'
import {useAppSelector} from '../../redux/hooks'

const totalSum = () => {
  const orderedDishes = useAppSelector<DishInCart[]>(
    (state) => state.cart.dishes
  )

  const totalSum = orderedDishes.reduce(
    (sum: number, current) =>
      sum + Number(current.price) * current.numberOfDishes,
    0
  )
  return totalSum
}

export default totalSum

