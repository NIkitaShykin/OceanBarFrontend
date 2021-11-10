import {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'

import ShiftingDish from './ShiftingDish'
import CompletedDish from './CompletedDish'
import {useAppSelector} from '../../../../redux/hooks'
// eslint-disable-next-line max-len
import MaybeIntresting from '../../../../components/maybeIntresting/maybeIntresting'
import {IngredientsType} from '../../../../common/types/dishesType'
import {DishType} from '../../../../common/types/dishesType'

const Dish = () => {
  const token = useParams<{token: string}>()
  const allDishes: DishType = useAppSelector<any>((state) => state.dish.dishes)
  // @ts-ignore
  const currentDish: DishType = allDishes.find((el) => el.id == token.token)

  const [dishСhangeStatus, setDishСhangeStatus] = useState<boolean>(false)
  const [ingredients, setIngredients] = useState<IngredientsType>(
    currentDish.ingredients
  )

  useEffect(() => {
    setIngredients(currentDish.ingredients)
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
          updIngredients={updateIngredients}
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
