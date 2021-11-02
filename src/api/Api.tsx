import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://13.49.241.158:3000/',
})


export const API = {
  getAllDish() {
    const promise = instance.get('api/menu/')
    return promise
  },
  getAllDishesFromCart(userId: string) {
    const promise = instance.get(`api/cart/get/${userId}`)
    return promise
  },
  addDishToCart(userId: string, dishId: string, ingredients: any) {
    const promise = instance.post(`api/cart/addDish/${userId}`,
      {'dishId': dishId, 'ingredients': ingredients})
    return promise
  },
  updateDishInCart(userId: string, dishId: string, ingredients: any) {
    const promise = instance.patch(`api/cart/updateDish/${userId}`,
      {'dishId': dishId, 'ingredients': ingredients})
    return promise
  },
  deleteDihsFromCart(userId: string, dishId: string) {
    const promise = instance.put(`api/cart/deleteDish/${userId}`,
      {'dishId': dishId})
    return promise
  },
  clearUserCart(userId: string) {
    const promise = instance.delete(`api/cart/deleteAllDihs/${userId}`)
    return promise
  }
}
