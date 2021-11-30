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
  ingredients: IngredientsType
  position: number
  weight?: string
  calories?: string
  addedIngredients?: string
}
export type ApiDish = {
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
export type DishFromBackAfterAdding = ApiDish & {
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

export interface IUpdQuantity {
  id: number,
  numberOfDishes: number
}

export interface IUpdContent {
  id: number,
  ingredients: IngredientsType
}
