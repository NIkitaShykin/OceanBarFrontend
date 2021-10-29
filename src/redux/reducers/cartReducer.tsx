import {createReducer} from '@reduxjs/toolkit'
import * as R from 'ramda' //
import {addDishToCart, removeDishFromCart} from '../actions'

interface IUserState {
  dishes: any[]
}

export const initialState: IUserState = {
  dishes: [],
}

const cartReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addDishToCart, (state, action) => {
      const newOBJ = {
        id: action.payload.id,
        name: action.payload.name,
        prise: action.payload.prise,
        image: action.payload.image,
      }
      const stateCopy = {...state}
      stateCopy.dishes = [...state.dishes]
      stateCopy.dishes.push(newOBJ)
      return stateCopy
    })
    .addCase(removeDishFromCart, (state, action) => {
      return R.without(R.of(action.payload), state)
    })
})

export default cartReducer
