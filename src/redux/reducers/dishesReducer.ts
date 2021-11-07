
import {createReducer} from '@reduxjs/toolkit'
import {AnyAction} from 'redux'
import {RootState} from '../store'
import {ThunkAction} from 'redux-thunk'

import {addDishesAC, toggleLoading} from '../actions'
import {API} from '../../api/index'

export type IngredientType = { name: string; isAdded: boolean }
export type IngredientsType = Array<IngredientType>
export type DishType = {
  'id': number,
  'name': string,
  'price': number,
  'weight': string,
  'calories': string,
  'imageURL': string,
  'ingredients': IngredientsType,
  'dishCategory': string
}
export type dishesType = Array<DishType>

// interface MenuState {
//   dishes: dishesType[],
//   isLoading: boolean
// }

const initialState: any = {
  dishes: [],
  isLoading: false,
}


// @ts-ignore
const dishesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addDishesAC, (state, action) => {
      return action.payload
    })
    .addCase(toggleLoading, (state, action) => {
      return {
        ...state,
        isLoading: action.payload}
    })
})

export default dishesReducer

export const getDishesFromApiTC =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
    async (dispatch) => {
      dispatch(toggleLoading(true))
      try {
        const asyncResp = await API.getAllDish()
        // @ts-ignore
        const restructDishes = asyncResp.data.data.dishes.map((dish) => {
          const myObj: Array<IngredientType> = []
          // @ts-ignore
          dish.ingredients.split(';').forEach((ingr) => {
            myObj.push({name: ingr, isAdded: true})
          })
          return ({...dish, ingredients: myObj})
        })
        dispatch(addDishesAC(restructDishes))
        dispatch(toggleLoading(false))
      } catch (err) {
        dispatch(toggleLoading(false))
        console.log(err)
      }
    }
