export type IngredientType = {name: string; isAdded: boolean}
export type IngredientsType = Array<IngredientType>
export type DishType = {
  id: number
  name: string
  price: number
  weight: string
  calories: string
  imageURL: string
  ingredients: IngredientsType
  dishCategory: string
}
export type DishInCart = {
  id: number
  name: string
  price: number
  imageURL: string
  numberOfDishes: number
}
