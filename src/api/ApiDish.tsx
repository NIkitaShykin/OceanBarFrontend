import {url as baseURL} from './index'
// export const url: string = 'http://13.49.241.158:3000/api'

import axios from 'axios'

const instance = axios.create({
  // baseURL: ' http://13.51.224.150:3000/'
  baseURL
})

export const ApiDish = {
  getAllDish() {
    return instance.get('menu/')
  },
  getAllDishesFromCart(userId: string) {
    return instance.get(`cart/get/${userId}`)
  },
  addDishToCart(userId: string, dishId: string, ingredients: any) {
    return instance.post(`cart/addDish/${userId}`, {
      dishId: dishId,
      ingredients: ingredients
    })
  },
  updateDishInCart(userId: string, dishId: string, ingredients: any) {
    return instance.patch(`cart/updateDish/${userId}`, {
      dishId: dishId,
      ingredients: ingredients
    })
  },
  deleteDihsFromCart(userId: string, dishId: string) {
    return instance.put(`cart/deleteDish/${userId}`, {dishId: dishId})
  },
  clearUserCart(userId: string) {
    return instance.delete(`cart/deleteAllDihs/${userId}`)
  }
}
