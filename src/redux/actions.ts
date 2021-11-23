import {createAction} from '@reduxjs/toolkit'
import {
  DishInCart,
  DishType,
  IUpdQuantity,
  IUpdContent
} from 'src/common/types/dishesType'

export const logIn = createAction<any>('SET_LOG_IN')
export const logOut = createAction('SET_LOG_OUT')

export const addDishToCart = createAction<DishInCart>('ADD_DISH_TO_CART')
export const removeDishFromCart = createAction<number>('REMOVE_DISH_FROM_CART')
export const updateDishInCart = createAction<IUpdContent>('UPDATE_DISH_IN-CART')
export const clearCart = createAction('CLEAR_CART')
export const plusOneDish = createAction<IUpdQuantity>('PLUS_ONE_DISH')
export const minusOneDish = createAction<IUpdQuantity>('MINUS_ONE_DISH')

export const getDishesFromApiTC =
  createAction<DishType[]>('GET_DISHES')
export const addDishesAC =
  createAction<any>('SET_DISHES')
export const toggleLoading =
  createAction<boolean, 'TOGGLE_LOADING'>('TOGGLE_LOADING')

export const getUserPersonalDataTC = createAction<any>('GET_USER_DATA')
export const setPersonalUsersData = createAction<any>('SET_USER_DATA')
export const getUserAC = createAction<any>('SET_USER')

export const setBankCardTC = createAction<any>('SET_BANKCARD')
export const addBankCardAC = createAction<any>('STORE_BANKCARD')
export const deleteBankCardTC = createAction<any>('DEL_BANKCARD')
export const deleteBankCardAC = createAction<any>('DELETE_BANKCARD')

export const toggleLoadingUser =
  createAction<boolean, 'TOGGLE_LOADING_USER'>('TOGGLE_LOADING_USER')
