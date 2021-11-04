import {createReducer} from '@reduxjs/toolkit'

import {
  addDishToCart,
  removeDishFromCart,
  clearCart,
  minusOneDish,
<<<<<<< HEAD
  plusOneDish,
} from '../actions'
import {DishInCart} from '../../common/types/dishesType'

interface IUserState {
  dishes: Array<DishInCart>
=======
  plusOneDish
} from '../actions'

interface IUserState {
  dishes: Array<any>
>>>>>>> sprint_5
}

export const initialState: IUserState = {
  dishes: [],
}

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addDishToCart, (state, action) => {
<<<<<<< HEAD
      const newDish: DishInCart = {
        id: action.payload.id,
        name: action.payload.name,
        price: action.payload.price,
        imageURL: action.payload.imageURL,
=======
      const newDish = {
        id: action.payload.id,
        name: action.payload.name,
        prise: action.payload.price,
        image: action.payload.imageURL,
>>>>>>> sprint_5
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

<<<<<<< HEAD
    // ***********************************************************************
    // v2 with immutable data
    // .addCase(plusOneDish, (state, action) => {
    //   const index = state.dishes.findIndex(
    //     (dish) => dish.id === action.payload.id)

    //   const updState = {...state}

    //   updState.dishes[index].numberOfDishes = action.payload.numberOfDishes
    //   return updState
    // })
    // ***********************************************************************

    .addCase(plusOneDish, (state, action) => {
      const index = state.dishes.findIndex(
        (dish) => dish.id === action.payload.id
      )
=======
  // ***********************************************************************
  // v2 with immutable data
  // .addCase(plusOneDish, (state, action) => {
  //   const index = state.dishes.findIndex(
  //     (dish) => dish.id === action.payload.id)

  //   const updState = {...state}

  //   updState.dishes[index].numberOfDishes = action.payload.numberOfDishes
  //   return updState
  // })
  // ***********************************************************************

    .addCase(plusOneDish, (state, action) => {
      const index = state.dishes.findIndex(
        (dish) => dish.id === action.payload.id)
>>>>>>> sprint_5

      state.dishes[index].numberOfDishes = action.payload.numberOfDishes
      return state
    })
    .addCase(minusOneDish, (state, action) => {
      const index = state.dishes.findIndex(
<<<<<<< HEAD
        (dish) => dish.id === action.payload.id
      )
=======
        (dish) => dish.id === action.payload.id)
>>>>>>> sprint_5

      state.dishes[index].numberOfDishes = action.payload.numberOfDishes
      return state
    })
})

export default cartReducer
