import {createAction} from '@reduxjs/toolkit'

// export const signUp = createAction<number>('SET_SIGN_UP')
export const logIn = createAction<any>('SET_LOG_IN')
export const logOut = createAction('SET_LOG_OUT')

export const addDishToCart = createAction<any>('ADD_DISH_TO_CART')
export const removeDishFromCart = createAction<any>('REMOVE_DISH_FROM_CART')
