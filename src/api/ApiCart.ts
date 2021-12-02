import {
  ApiDish,
  DishFromBackAfterAdding,
  UpdatedDish,
} from '../common/types/dishesType'

import {$api} from './ApiAuth'

export const ApiCart = {
  getCart(token: string | undefined) {
    return $api.get<{cart: [ApiDish]}>('cart/')
  },
  addDishToCart(
    id: number,
    token: string | undefined,
    ingredients?: string | undefined
  ) {
    return $api.post<DishFromBackAfterAdding>(
      `cart/`,
      {
        id: id,
        ingredients: ingredients,
      }
    )
  },
  updateDishInCart(
    position: number,
    quantity: number,
    token: string | undefined,
    ingredients?: string | undefined
  ) {
    return $api.patch<{updatedPosition: UpdatedDish}>(
      `cart/${position}`,
      {
        quantity: quantity,
        ingredients: ingredients,
      },
    )
  },
  deleteDishFromCart(position: number, token: string | undefined) {
    return $api.delete<string>(`cart/${position}`)
  },
  clearCart(token: string | undefined) {
    return $api.delete<string>(`cart/`)
  },
}
