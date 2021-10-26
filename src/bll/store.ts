import {ingridientsReducer} from "./ingridientsReducer";
import {dishesReducer} from "./dishesReducer";
import {combineReducers, createStore, applyMiddleware} from "redux"
import thunkMiddleware from 'redux-thunk'

const reducers = combineReducers({
    ingridients: ingridientsReducer,
    dishes: dishesReducer,
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));
export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev

   
