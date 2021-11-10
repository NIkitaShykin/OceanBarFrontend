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
  price: string
  imageURL: string
  numberOfDishes: number
  ingredients: string
  position: number
}
export type DishFromBack = {
  dish: {
    calories: string
    dishCategory: string
    id: number
    imageURL: string
    ingredients: string
    name: string
    price: number
    weight: string
  }
  id: number
  ingredients: string
  quantity: number
}
export type DishFromBackAfterAdding = DishFromBack & {
  user: number
}
export type UpdatedDish = {
  id: number
  ingredients: string
  quantity: number
}
export type InitialMenuStateType = {
  dishes: DishType[]
  isLoading?: boolean
}
