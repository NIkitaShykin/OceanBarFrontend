import {DishType, DishInCart, ApiDish} from '../common/types/dishesType'

export const mapDishTypeToDishInCart = (dishType: DishType): DishInCart => {
  return {
    id: dishType.id,
    name: dishType.name,
    price: String(dishType.price),
    imageURL: dishType.imageURL,
    numberOfDishes: 1,
    ingredients: dishType.ingredients,
    position: dishType.id,
    weight: dishType.weight,
    calories: dishType.calories,
  }
}

export const mapApiDishToDishInCart = (apiDish: ApiDish): DishInCart => {
  return {
    id: apiDish.id,
    name: apiDish.dish.name,
    price: String(apiDish.dish.price),
    imageURL: apiDish.dish.imageURL,
    numberOfDishes: apiDish.quantity,
    ingredients:
      apiDish.ingredients.slice(1, -1).split(';').map((i: string) => ({
        name: i,
        isAdded: true,
      })),
    position: apiDish.id,
    weight: apiDish.dish.weight,
    calories: apiDish.dish.calories,
  }
}
