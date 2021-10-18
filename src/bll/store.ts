import {ingridientsReducer} from "./ingridientsReducer";
import {combineReducers, createStore} from "redux"


const reducers = combineReducers({
    ingridients: ingridientsReducer,
});

const store = createStore(reducers);

export default store

export type AppStoreType = ReturnType<typeof reducers>

// @ts-ignore
window.store = store; // for dev
