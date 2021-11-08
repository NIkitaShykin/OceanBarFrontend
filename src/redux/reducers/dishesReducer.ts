import {createReducer} from '@reduxjs/toolkit'
import {AnyAction} from 'redux'
import {ThunkAction} from 'redux-thunk'
import {AxiosResponse} from 'axios'

import {RootState} from '../store'
import {addDishesAC, toggleLoading} from '../actions'
import {API} from '../../api/index'
import {DishType,
  IngredientType,
  InitialMenuStateType} from '../../common/types/dishesType'


const initialState: InitialMenuStateType = {
  dishes: [],
  isLoading: false,
}

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
        const asyncResp: any = await API.getAllDish()
        // @ts-ignore
        const restructDishes: DishType[] = asyncResp.data.data.dishes.map(
          (dish: DishType) => {
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
