import {createReducer} from '@reduxjs/toolkit'

import {
  addDishToCart,
  removeDishFromCart,
  updateDishInCart,
  clearCart,
  minusOneDish,
  plusOneDish,
} from '../actions'
import {DishInCart} from '../../common/types/dishesType'

interface IUserState {
  dishes: Array<DishInCart>
}

export const initialState: IUserState = {
  dishes: [],
}

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addDishToCart, (state, action) => {
      const updState = {...state}
      updState.dishes = [...state.dishes]
      updState.dishes.push(action.payload)
      return updState
    })

    .addCase(removeDishFromCart, (state, action) => {
      const id = action.payload
      const updState = {...state}
      updState.dishes = updState.dishes.filter((dish) => dish.id !== id)
      return updState
    })

    .addCase(updateDishInCart, (state, action) => {
      const index = state.dishes.findIndex(
        (dish) => dish.id === action.payload.id
      )
      state.dishes[index].ingredients = action.payload.ingredients
    })

    .addCase(clearCart, (state, action) => {
      return initialState
    })

    .addCase(plusOneDish, (state, action) => {
      const index = state.dishes.findIndex(
        (dish) => dish.id === action.payload.id
      )
      state.dishes[index].numberOfDishes = action.payload.numberOfDishes
      return state
    })

    .addCase(minusOneDish, (state, action) => {
      const index = state.dishes.findIndex(
        (dish) => dish.id === action.payload.id
      )
      state.dishes[index].numberOfDishes = action.payload.numberOfDishes
      return state
    })
})

export default cartReducer
