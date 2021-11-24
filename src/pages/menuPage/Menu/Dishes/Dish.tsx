import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ShiftingDish from './ShiftingDish'
import CompletedDish from './CompletedDish'
import {useAppSelector} from '../../../../redux/hooks'
import MaybeIntresting
  from '../../../../components/maybeIntresting/maybeIntresting'
import {IngredientsType} from '../../../../common/types/dishesType'
import {DishType} from '../../../../common/types/dishesType'

const Dish = () => {
  const token = + useParams<{token: string}>().token

  const allDishes: DishType[] =
  useAppSelector<DishType[]>((state) => state.dish.dishes)

  const currentDish: DishType | any =
  allDishes.find((el) => el.id === token)

  const [dishСhangeStatus, setDishСhangeStatus] = useState<boolean>(false)
  const [ingredients, setIngredients] = useState<IngredientsType>([])

  useEffect(() => {
    if (currentDish) {
      setIngredients(currentDish.ingredients)
    }
  }, [currentDish])

  const updatedDish = {...currentDish, ingredients}

  const updateIngredients = (updIngridients: IngredientsType) => {
    setIngredients(updIngridients)
  }

  const changeStatus = () => {
    setDishСhangeStatus(!dishСhangeStatus)
  }

  return (
    <>
      {dishСhangeStatus ? (
        <ShiftingDish
          changeStatus={changeStatus}
          currentDish={updatedDish}
          updateIngredients={updateIngredients}
        />
      ) : (
        <CompletedDish changeStatus={changeStatus} currentDish={updatedDish} />
      )}

      {!dishСhangeStatus ? (
        <div>
          <MaybeIntresting />
        </div>
      ) : (
        <div style={{marginTop: '100px'}}></div>
      )}
    </>
  )
}

export default Dish
