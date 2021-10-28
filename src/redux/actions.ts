import {createAction} from '@reduxjs/toolkit'

export const signUp = createAction<number>('SET_SIGN_UP')
export const logIn = createAction<any>('SET_LOG_IN')
export const logOut = createAction('SET_LOG_OUT')
export const getDishesFromApiTC = createAction<any>('GET_DISHES')
export const addDishesAC = createAction<any>('SET_DISHES')




