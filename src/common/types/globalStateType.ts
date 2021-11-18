import {DishType, DishInCart} from '../../common/types/dishesType'
import {CommonUserType} from '../../common/types/userTypes'

export interface IReduxGlobalState {
  auth: {
    user: CommonUserType
    isAuthorized: boolean
  }
  cart: {
    dishes: DishInCart[]
  }
  dish: {
    dishes: DishType[]
    isLoading: boolean
  }
  user: CommonUserType
}
