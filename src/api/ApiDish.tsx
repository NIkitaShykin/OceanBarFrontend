import {instance} from "./Api";


export const ApiDish = {
  getAllDish() {
    return instance.get('api/menu/')
  },
  getAllDishesFromCart(userId: string) {
    return instance.get(`api/cart/get/${userId}`)
  },
  addDishToCart(userId: string, dishId: string, ingredients: any) {
    return instance.post(`api/cart/addDish/${userId}`, {
      dishId: dishId,
      ingredients: ingredients
    })
  },
  updateDishInCart(userId: string, dishId: string, ingredients: any) {
    return instance.patch(`api/cart/updateDish/${userId}`, {
      dishId: dishId,
      ingredients: ingredients
    })
  },
  deleteDihsFromCart(userId: string, dishId: string) {
    return instance.put(`api/cart/deleteDish/${userId}`, {dishId: dishId})
  },
  clearUserCart(userId: string) {
    return instance.delete(`api/cart/deleteAllDihs/${userId}`)
  }
}
