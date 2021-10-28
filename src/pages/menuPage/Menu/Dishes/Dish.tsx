import { useState, useEffect } from "react"
import ShiftingDish from './ShiftingDish'
import CompletedDish from './CompletedDish'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../../redux/hooks'
import MaybeIntresting from '../../../../components/maybeIntresting/maybeIntresting'
import { IngredientType } from '../../../../redux/reducers/dishesReducer'
import { IngredientsType } from '../../../../redux/reducers/dishesReducer'
import { DishType } from '../../../../redux/reducers/dishesReducer'


function Dish() {

  const token = useParams<{ token: string }>()
  const allDishes = useAppSelector<any>(state => state.dish)

  const currentDish = allDishes.find((el) => el.id == token.token)
  
 

  const [dishСhangeStatus, setDishСhangeStatus] = useState<boolean>(false);
  const [ingredients, setIngredients] = useState<IngredientsType>(currentDish.ingredients);
  

  useEffect(() => {
    console.log("работает эффект");
    console.log("работает эффект");
    console.log("работает эффект");
    console.log("работает эффект");
    console.log("работает эффект");
    console.log("работает эффект");
     }, [currentDish])

   // console.log("currentDish обновился");
  // console.log(currentDish);
  // console.log(ingredients);

  const updatedDish = { ...currentDish, ingredients }

  const updateIngredients = (updIngridients: IngredientsType) => {
    setIngredients(updIngridients)
   }

  const changeStatus = () => {
    setDishСhangeStatus(!dishСhangeStatus)
  }

  return (
    <div>

      {dishСhangeStatus
        ?
        <ShiftingDish
          changeStatus={changeStatus}
          currentDish={updatedDish}
          updIngredients={updateIngredients}
        />
        :
        <CompletedDish
          changeStatus={changeStatus}
          currentDish={updatedDish}
        />
      }

      {!dishСhangeStatus
        ?
        <div>
          <MaybeIntresting />
        </div>
        : <div style={{ marginTop: "100px" }}></div>
      }
    </div>
  )
}

export default Dish;




