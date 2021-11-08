import axios from 'axios'

export const instance = axios.create({
  baseURL: 'http://13.51.224.150:3000/',
})
export const ApiCart = {
  getCart(token: string | undefined): any {
    instance
      .get('api/cart/', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp: any): any => {
        return resp.data.cart
      })
  },
  addDishToCart(id: string, token: string | undefined, ingredients?: any) {
    return instance.post(
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
    ingredients?: any | undefined
  ) {
    return instance.patch(
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
    return instance.delete(`api/cart/${position}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
  clearCart(token: string | undefined) {
    return instance.delete(`api/cart/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
  },
}
