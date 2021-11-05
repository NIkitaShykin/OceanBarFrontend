import axios from "axios";

export const instance = axios.create({
    baseURL: 'http://localhost:3001/',
})
export const ApiCart = {
     getCart() {
          instance.get('api/cart/').then((resp:any):any=>{
              console.log(resp)
          })
    },
    addDishToCart( id: string, ingredients?: any) {
        console.log(id)
        console.log(ingredients)
        return instance.post(`api/cart/`, {
            id:id,
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
