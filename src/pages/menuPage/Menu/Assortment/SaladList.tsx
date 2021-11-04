<<<<<<< HEAD
=======

>>>>>>> sprint_5
import {Row} from 'react-bootstrap'

import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'
<<<<<<< HEAD
import {DishType} from '../../../../common/types/dishesType'
=======

const SaladList = () => {
  const allDishes = useAppSelector<any>((state) => state.dish)
  // @ts-ignores
  const saladDishes = allDishes.filter((dish) => {
    return dish.dishCategory=='Салаты'
  })
>>>>>>> sprint_5

const SaladList = () => {
  const allDishes: DishType = useAppSelector<any>((state) => state.dish)
  // @ts-ignores
  const saladDishes = allDishes.filter((dish) => {
    return dish.dishCategory == 'Салаты'
  })

  return (
    <>
      <Row>
<<<<<<< HEAD
        <ListItem data={saladDishes} isIntresting={false} />
=======
        <ListItem data={saladDishes} />
>>>>>>> sprint_5
      </Row>
    </>
  )
}

export default SaladList
