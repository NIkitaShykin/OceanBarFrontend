/* eslint-disable no-unused-vars */
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'
import type {RootState, AppDispatch} from './store'
import {Middleware} from 'redux'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

export const exampleMiddleware: Middleware<{},
RootState> = (Api) => (next) => (action) => {
  const state = Api.getState()
}
