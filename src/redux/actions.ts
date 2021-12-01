import {createAction} from '@reduxjs/toolkit'
import {
  DishInCart,
  DishType,
  IUpdQuantity,
  IUpdContent,
} from 'src/common/types/dishesType'

export const logIn = createAction<any>('SET_LOG_IN')
export const logOut = createAction('SET_LOG_OUT')
export const checkAuth = createAction<any>('CHECK_AUTH')

export const addDishToCart = createAction<DishInCart>('ADD_DISH_TO_CART')
export const removeDishFromCart = createAction<number>('REMOVE_DISH_FROM_CART')
export const updateDishInCart = createAction<IUpdContent>('UPDATE_DISH_IN-CART')
export const clearCart = createAction('CLEAR_CART')
export const plusOneDish = createAction<IUpdQuantity>('PLUS_ONE_DISH')
export const minusOneDish = createAction<IUpdQuantity>('MINUS_ONE_DISH')

export const getDishesFromApiTC = createAction<DishType[]>('GET_DISHES')
export const addDishesAC = createAction<any>('SET_DISHES')
export const toggleLoading = createAction<boolean, 'TOGGLE_LOADING'>(
  'TOGGLE_LOADING'
)

export const getUserPersonalDataTC = createAction<any>('GET_USER_DATA')
export const setPersonalUsersData = createAction<any>('SET_USER_DATA')
export const getUserAC = createAction<any>('SET_USER')
export const removeUser = createAction('REMOVE_USER')

export const setUsersBookingTables = createAction<any>(
  'SET_USERS_BOOKING-TABLES'
)
export const setUsersOrders = createAction<any>(
  'SET_USERS_ORDERS'
)

export const updateUsersBookingTables = createAction<any>(
  'UPDATE_USERS_BOOKING-TABLES'
)
export const deleteUserBookingTable = createAction<any>(
  'DELETE_USER_BOOKING-TABLE'
)
export const deleteUserOrder = createAction<any>(
  'DELETE_USER_ORDER'
)

export const updateUserOrder = createAction<any>(
  'UPDATE_USER_ORDER'
)

export const addOrder = createAction<any>('ADD_ORDER')
export const clearOrders = createAction<any>('CLEAR_ORDERS')

export const setBankCardTC = createAction<any>('SET_BANKCARD')
export const addBankCardAC = createAction<any>('STORE_BANKCARD')
export const deleteBankCardTC = createAction<any>('DEL_BANKCARD')
export const deleteBankCardAC = createAction<any>('DELETE_BANKCARD')

export const toggleLoadingUser = createAction<boolean, 'TOGGLE_LOADING_USER'>(
  'TOGGLE_LOADING_USER'
)
