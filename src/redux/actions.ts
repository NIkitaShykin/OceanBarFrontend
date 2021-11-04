import {createAction} from '@reduxjs/toolkit'

export const logIn = createAction<any>('SET_LOG_IN')
export const logOut = createAction('SET_LOG_OUT')

export const addDishToCart = createAction<any>('ADD_DISH_TO_CART')
export const removeDishFromCart = createAction<any>('REMOVE_DISH_FROM_CART')
export const clearCart = createAction('CLEAR_CART')

export const plusOneDish = createAction<any>('PLUS_ONE_DISH')
export const minusOneDish = createAction<any>('MINUS_ONE_DISH')

export const getDishesFromApiTC = createAction<any>('GET_DISHES')
export const addDishesAC = createAction<any>('SET_DISHES')

export const getUserTC = createAction<any>('GET_USER')
export const getUserAC = createAction<any>('SET_USER')
