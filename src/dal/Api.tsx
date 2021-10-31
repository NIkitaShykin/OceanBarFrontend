import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:3001/',
});


export const API = {
    getAllDish() {
        const promise = instance.get('api/menu/')
        return promise;
    },
    getAllDishFromCart(user_id:string) {
        const promise = instance.get(`api/cart/get/${user_id}`)
        return promise;
    },
    addDishToCart(user_id:string, dish_id:string, ingredients:any) {
        const promise = instance.post(`api/cart/addDish/${user_id}`, {dish_id:"dish_id", ingredients:ingredients})
        return promise;
    },
    updateDishInCart(user_id:string, dish_id:string, ingredients:any) {
        const promise = instance.put(`api/cart/updateDish/${user_id}`, {dish_id:"dish_id", ingredients:ingredients})
        return promise;
    },
    deleteDihsFromCart(user_id:string, dish_id:string) {
        const promise = instance.put(`api/cart/deleteDish/${user_id}`, {dish_id: "dish_id"})
        return promise;
    },
    clearCart(user_id:string) {
        const promise = instance.delete(`api/cart/deleteAllDihs/${user_id}`)
        return promise;
    }
}



// cartRouter.delete('/deleteDih/:id', async (ctx: Koa.Context) => {
//     ctx.body =`delete dish with "params.dish_id" from cart`
// })








