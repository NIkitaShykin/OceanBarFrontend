import axios from 'axios'
import {IngredientsType} from '../common/types/dishesType'

export const url: string = 'http://13.51.224.150:3000/api'
const instance = axios.create({
  baseURL: 'http://13.51.224.150:3000/'
})

export const API = {
  getAllDish() {
    return instance.get('api/menu/')
  },

  getAllDishesFromCart(userId: string) {
    return instance.get(`api/cart/get/${userId}`)
  },
  addDishToCart(userId: string, dishId: string, ingredients: IngredientsType) {
    return instance.post(`api/cart/addDish/${userId}`, {
      dishId: dishId,
      ingredients: ingredients
    })
  },
  updateDishInCart(
    userId: string,
    dishId: string,
    ingredients: IngredientsType) {
    return instance.patch(`api/cart/updateDish/${userId}`, {
      dishId: dishId,
      ingredients: ingredients
    })
  },

  deleteDishFromCart(userId: string, dishId: string) {
    return instance.put(
      `api/cart/deleteDish/${userId}`,
      {'dishId': dishId}
    )
  },

  clearUserCart(userId: string) {
    return instance.delete(`api/cart/deleteAllDihs/${userId}`)
  }
}
