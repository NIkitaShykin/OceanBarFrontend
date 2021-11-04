<<<<<<< HEAD
import {Row} from 'react-bootstrap'

import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'
import {DishType} from '../../../../common/types/dishesType'

const SoupList = () => {
  const allDishes: DishType = useAppSelector<any>((state) => state.dish)
  // @ts-ignores
  const soupDishes = allDishes.filter((dish) => {
    return dish.dishCategory == 'Супы'
=======

import {Row} from 'react-bootstrap'

import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'


const SoupList = () => {
  const allDishes = useAppSelector<any>((state) => state.dish)
  // @ts-ignores
  const soupDishes = allDishes.filter((dish) => {
    return dish.dishCategory=='Супы'
>>>>>>> sprint_5
  })

  return (
    <>
<<<<<<< HEAD
      <Row>
        <ListItem data={soupDishes} isIntresting={false} />
=======
      <Row >
        <ListItem data={soupDishes} />
>>>>>>> sprint_5
      </Row>
    </>
  )
}

export default SoupList
<<<<<<< HEAD
=======


>>>>>>> sprint_5
