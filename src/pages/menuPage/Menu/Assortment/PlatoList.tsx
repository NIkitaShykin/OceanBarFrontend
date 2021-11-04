<<<<<<< HEAD
import {Row} from 'react-bootstrap'

import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'
import {DishType} from '../../../../common/types/dishesType'

const PlatoList = () => {
  const allDishes: DishType = useAppSelector<any>((state) => state.dish)
  // @ts-ignores
  const platoDishes = allDishes.filter((dish) => {
    return dish.dishCategory == 'Плато'
=======

import {Row} from 'react-bootstrap'

import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'


const PlatoList = () => {
  const allDishes = useAppSelector<any>((state) => state.dish)
  // @ts-ignores
  const platoDishes = allDishes.filter((dish) => {
    return dish.dishCategory=='Плато'
>>>>>>> sprint_5
  })

  return (
    <>
      <Row>
<<<<<<< HEAD
        <ListItem data={platoDishes} isIntresting={false} />
      </Row>
    </>
=======
        <ListItem data={platoDishes} />
      </Row>
    </>

>>>>>>> sprint_5
  )
}

export default PlatoList
