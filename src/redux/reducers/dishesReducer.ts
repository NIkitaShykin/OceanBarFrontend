import { createReducer } from '@reduxjs/toolkit'
import { addDishesAC } from '../actions'
import { AnyAction } from 'redux'
import { RootState } from '../store'
import { ThunkAction } from 'redux-thunk'
import { API } from '../../dal/Api'

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
const initialState: dishesType = [
  {
    "id": 1,
    "name": "ПЛАТО УСТРИЦ",
    "price": 50,
    "weight": "1000 гр",
    "calories": "1000 ккал",
    "imageURL": "https://oceanbarmenu.s3.eu-north-1.amazonaws.com/%D0%97%D0%B0%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%BD%D1%8B%D0%B5+%D1%83%D1%81%D1%82%D1%80%D0%B8%D1%86%D1%8B/%D0%97%D0%B0%D0%BF%D0%B5%D1%87%D0%B5%D0%BD%D0%B0%D1%8F%D0%A3%D1%81%D1%82%D1%80%D0%B8%D1%86%D0%B0%D0%A1%D0%91%D0%B5%D0%BB%D1%8B%D0%BC%D0%B8%D0%93%D1%80%D0%B8%D0%B1%D0%B0%D0%BC%D0%B8.jpg",
    "ingredients": [{ name: "морской гребешок с трюфельным маслом", isAdded: true }, { name: "осьминог с глазировкой из черного перца", isAdded: true }, { name: "королевские креветки в панцире", isAdded: true }, { name: "чеснок", isAdded: true }],
    "dishCategory": "Плато"
  },
  {
    "id": 2,
    "name": "ПЛАТО КРАБЫ И МОЛЮСКИ",
    "price": 60,
    "weight": "1500 гр",
    "calories": "1000 ккал",
    "imageURL": "https://oceanbarmenu.s3.eu-north-1.amazonaws.com/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%A3%D1%81%D1%82%D1%80%D0%B8%D1%86.jpg",
    "ingredients": [{ name: "морской гребешок с трюфельным маслом", isAdded: true }, { name: "осьминог с глазировкой из черного перца", isAdded: true }, { name: "королевские креветки в панцире", isAdded: true }, { name: "чеснок", isAdded: true }],
    "dishCategory": "Плато"
  },
  {
    "id": 3,
    "name": "ГОРЯЧЕЕ ПЛАТО",
    "price": 70,
    "weight": "1000 гр",
    "calories": "900 ккал",
    "imageURL": "https://oceanbarmenu.s3.eu-north-1.amazonaws.com/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%9A%D1%80%D0%B0%D0%B1%D1%8B%D0%9C%D0%BE%D0%BB%D0%BB%D1%8E%D1%81%D0%BA%D0%B8.jpg",
    "ingredients": [{ name: "морской гребешок с трюфельным маслом", isAdded: true }, { name: "осьминог с глазировкой из черного перца", isAdded: true }, { name: "королевские креветки в панцире", isAdded: true }, { name: "чеснок", isAdded: true }],
    "dishCategory": "Плато"
  },
  {
    "id": 4,
    "name": "БУЙАБЕС",
    "price": 20,
    "weight": "600 гр",
    "calories": "300 ккал",
    "imageURL": "https://oceanbarmenu.s3.eu-north-1.amazonaws.com/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE/%D0%93%D0%BE%D1%80%D1%8F%D1%87%D0%B5%D0%B5%D0%9F%D0%BB%D0%B0%D1%82%D0%BE.jpg",
    "ingredients": [{ name: "морской гребешок с трюфельным маслом", isAdded: true }, { name: "осьминог с глазировкой из черного перца", isAdded: true }, { name: "королевские креветки в панцире", isAdded: true }, { name: "чеснок", isAdded: true }],
    "dishCategory": "Супы"
  },
  {
    "id": 5,
    "name": "СУП БИСК БУЛЬОНЕ ИЗ ЛОБСТЕРА",
    "price": 30,
    "weight": "500 гр",
    "calories": "250 ккал",
    "imageURL": "https://oceanbarmenu.s3.eu-north-1.amazonaws.com/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%9A%D1%80%D0%B0%D0%B1%D1%8B%D0%9C%D0%BE%D0%BB%D0%BB%D1%8E%D1%81%D0%BA%D0%B8.jpg",
    "ingredients": [{ name: "морской гребешок с трюфельным маслом", isAdded: true }, { name: "осьминог с глазировкой из черного перца", isAdded: true }, { name: "королевские креветки в панцире", isAdded: true }, { name: "чеснок", isAdded: true }],
    "dishCategory": "Супы"
  },
  {
    "id": 6,
    "name": "ТАЙСКИЙ САЛАТ С КРЕВЕТКАМИ",
    "price": 35,
    "weight": "450 гр",
    "calories": "400 ккал",
    "imageURL": "https://oceanbarmenu.s3.eu-north-1.amazonaws.com/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%9A%D1%80%D0%B0%D0%B1%D1%8B%D0%9C%D0%BE%D0%BB%D0%BB%D1%8E%D1%81%D0%BA%D0%B8.jpg",
    "ingredients": [{ name: "морской гребешок с трюфельным маслом", isAdded: true }, { name: "осьминог с глазировкой из черного перца", isAdded: true }, { name: "королевские креветки в панцире", isAdded: true }, { name: "чеснок", isAdded: true }],
    "dishCategory": "Салаты"
  },
  {
    "id": 7,
    "name": "САЛАТ С КОПЧЕНЫМ ЛОСОСЕМ",
    "price": 25,
    "weight": "500 гр",
    "calories": "300 ккал",
    "imageURL": "https://oceanbarmenu.s3.eu-north-1.amazonaws.com/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%9A%D1%80%D0%B0%D0%B1%D1%8B%D0%9C%D0%BE%D0%BB%D0%BB%D1%8E%D1%81%D0%BA%D0%B8.jpg",
    "ingredients": [{ name: "морской гребешок с трюфельным маслом", isAdded: true }, { name: "осьминог с глазировкой из черного перца", isAdded: true }, { name: "королевские креветки в панцире", isAdded: true }, { name: "чеснок", isAdded: true }],
    "dishCategory": "Салаты"
  },
  {
    "id": 8,
    "name": "САЛАТ С МОРСКИМ ГРЕБЕШКОМ",
    "price": 40,
    "weight": "450 гр",
    "calories": "350 ккал",
     "imageURL": "https://oceanbarmenu.s3.eu-north-1.amazonaws.com/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%9A%D1%80%D0%B0%D0%B1%D1%8B%D0%9C%D0%BE%D0%BB%D0%BB%D1%8E%D1%81%D0%BA%D0%B8.jpg",
    "ingredients": [{ name: "морской гребешок с трюфельным маслом", isAdded: true }, { name: "осьминог с глазировкой из черного перца", isAdded: true }, { name: "королевские креветки в панцире", isAdded: true }, { name: "чеснок", isAdded: true }],
    "dishCategory": "Салаты"
  },
  // {
  //   "id": 9,
  //   "name": "ЗАПЕЧЕНАЯ УСТРИЦА КИЛПАТРИК",
  //   "price": 50,
  //   "weight": "300 гр",
  //   "calories": "270 ккал",
  //    "imageURL": "https://oceanbarmenu.s3.eu-north-1.amazonaws.com/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%9A%D1%80%D0%B0%D0%B1%D1%8B%D0%9C%D0%BE%D0%BB%D0%BB%D1%8E%D1%81%D0%BA%D0%B8.jpg",
  //   "ingredients": [{ name: "морской гребешок с трюфельным маслом", isAdded: true }, { name: "осьминог с глазировкой из черного перца", isAdded: true }, { name: "королевские креветки в панцире", isAdded: true }, { name: "чеснок", isAdded: true }],
  //   "dishCategory": "Запеченные устрицы"
  // },
  // {
  //   "id": 10,
  //   "name": "ЗАПЕЧЕНАЯ УСТРИЦА С БЕЛЫМИ ГРИБАМИ",
  //   "price": 35,
  //   "weight": "200 гр",
  //   "calories": "400 ккал",
  //   "imageURL": "https://oceanbarmenu.s3.eu-north-1.amazonaws.com/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%9A%D1%80%D0%B0%D0%B1%D1%8B%D0%9C%D0%BE%D0%BB%D0%BB%D1%8E%D1%81%D0%BA%D0%B8.jpg",
  //   "ingredients": [{ name: "морской гребешок с трюфельным маслом", isAdded: true }, { name: "осьминог с глазировкой из черного перца", isAdded: true }, { name: "королевские креветки в панцире", isAdded: true }, { name: "чеснок", isAdded: true }],
  //   "dishCategory": "Запеченные устрицы"
  // },
  // {
  //   "id": 11,
  //   "name": "ЗАПЕЧЕНАЯ УСТРИЦА С ТРЮФЕЛЬНЫМ МАСЛОМ",
  //   "price": 35,
  //   "weight": "400 гр",
  //   "calories": "520 ккал",
  //   "imageURL": "https://oceanbarmenu.s3.eu-north-1.amazonaws.com/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%9A%D1%80%D0%B0%D0%B1%D1%8B%D0%9C%D0%BE%D0%BB%D0%BB%D1%8E%D1%81%D0%BA%D0%B8.jpg",
  //   "ingredients": [{ name: "морской гребешок с трюфельным маслом", isAdded: true }, { name: "осьминог с глазировкой из черного перца", isAdded: true }, { name: "королевские креветки в панцире", isAdded: true }, { name: "чеснок", isAdded: true }],
  //   "dishCategory": "Запеченные устрицы"
  // },
  // {
  //   "id": 12,
  //   "name": "ЧИЗКЕЙК С КЛУБНИЧНЫМ СОУСОМ",
  //   "price": 15,
  //   "weight": "200 гр",
  //   "calories": "250 ккал",
  //   "imageURL": "https://oceanbarmenu.s3.eu-north-1.amazonaws.com/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%9A%D1%80%D0%B0%D0%B1%D1%8B%D0%9C%D0%BE%D0%BB%D0%BB%D1%8E%D1%81%D0%BA%D0%B8.jpg",
  //   "ingredients": [{ name: "морской гребешок с трюфельным маслом", isAdded: true }, { name: "осьминог с глазировкой из черного перца", isAdded: true }, { name: "королевские креветки в панцире", isAdded: true }, { name: "чеснок", isAdded: true }],
  //   "dishCategory": "Десерты"
  // },
  // {
  //   "id": 13,
  //   "name": "ЛИМОННЫЙ ТАРТ",
  //   "price": 12,
  //   "weight": "105 гр",
  //   "calories": "295 ккал",
  //   "imageURL": "https://oceanbarmenu.s3.eu-north-1.amazonaws.com/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%9A%D1%80%D0%B0%D0%B1%D1%8B%D0%9C%D0%BE%D0%BB%D0%BB%D1%8E%D1%81%D0%BA%D0%B8.jpg",
  //   "ingredients": [{ name: "морской гребешок с трюфельным маслом", isAdded: true }, { name: "осьминог с глазировкой из черного перца", isAdded: true }, { name: "королевские креветки в панцире", isAdded: true }, { name: "чеснок", isAdded: true }],
  //   "dishCategory": "Десерты"
  // }
]
const dishesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addDishesAC, (state, action) => {
      return action.payload
    })
})
export default dishesReducer
export const getDishesFromApiTC =
  (): ThunkAction<void, RootState, unknown, AnyAction> =>
    async dispatch => {
      try {
        const asyncResp = await API.getAllDish()
        console.log(asyncResp);
        
        // const asyncResp = await API.addDishToCart("1",["соус; лук"])
        // @ts-ignore       
        const restructDishes = asyncResp.data.data.dishes.map(dish => {
          let myObj: Array<IngredientType> = []
          dish.ingredients.split(';').forEach(ingr => {
            myObj.push({name: ingr, isAdded: true})
          })
          return ({...dish, ingredients: myObj })
        })
        dispatch(addDishesAC(restructDishes))
      }
      catch (err) {console.log(err)}
    }