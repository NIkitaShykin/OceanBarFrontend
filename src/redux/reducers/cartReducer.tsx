import {createReducer} from '@reduxjs/toolkit'

import {
  addDishToCart,
  removeDishFromCart,
  clearCart,
  minusOneDish,
  plusOneDish
} from '../actions'

interface IUserState {
  dishes: Array<any>
  totalSum: number
}

export const initialState: IUserState = {
  dishes: [],
  totalSum: null
}

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addDishToCart, (state, action) => {
      const newDish = {
        id: action.payload.id,
        name: action.payload.name,
        prise: action.payload.prise,
        image: action.payload.image,
        numberOfDishes: action.payload.numberOfDishes,
      }
      const updState = {...state}
      updState.dishes = [...state.dishes]
      updState.dishes.push(newDish)
      return updState
    })
    .addCase(removeDishFromCart, (state, action) => {
      const id = action.payload
      const updState = {...state}
      updState.dishes = updState.dishes.filter((dish) => dish.id !== id)
      return updState
    })
    .addCase(clearCart, (state, action) => {
      return initialState
    })

    // ************************************************************************************
    // v2 with immutable data
    // .addCase(plusOneDish, (state, action) => {
    //   debugger //
    //   const id = action.payload.id
    //   const updState = {...state}
    //   updState.dishes = [...state.dishes]

    //   const index = updState.dishes.findIndex(
    //     (dish) => dish.id === id)

    //   updState.dishes[index].numberOfDishes = action.payload.numberOfDishes
    //   return updState
    // })
    // ************************************************************************************

    .addCase(plusOneDish, (state, action) => {
      const index = state.dishes.findIndex(
        (dish) => dish.id === action.payload.id)

      state.dishes[index].numberOfDishes = action.payload.numberOfDishes
      return state
    })
    .addCase(minusOneDish, (state, action) => {
      const index = state.dishes.findIndex(
        (dish) => dish.id === action.payload.id)

      state.dishes[index].numberOfDishes = action.payload.numberOfDishes
      return state
    })
})

export default cartReducer