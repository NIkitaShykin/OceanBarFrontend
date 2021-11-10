import {
  ApiDish,
  DishFromBackAfterAdding,
  UpdatedDish,
} from '../common/types/dishesType'
import {instance} from './index'
export const ApiCart = {
  getCart(token: string | undefined) {
    return instance.get<{cart: [ApiDish]}>('api/cart/', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
  addDishToCart(
    id: number,
    token: string | undefined,
    ingredients?: string | undefined
  ) {
    return instance.post<DishFromBackAfterAdding>(
      `api/cart/`,
      {
        id: id,
        ingredients: ingredients,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  },
  updateDishInCart(
    position: number,
    quantity: number,
    token: string | undefined,
    ingredients?: string | undefined
  ) {
    return instance.patch<{updatedPosition: UpdatedDish}>(
      `api/cart/${position}`,
      {
        quantity: quantity,
        ingredients: ingredients,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
  },
  deleteDishFromCart(position: number, token: string | undefined) {
    return instance.delete<string>(`api/cart/${position}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
  clearCart(token: string | undefined) {
    return instance.delete<string>(`api/cart/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
}
