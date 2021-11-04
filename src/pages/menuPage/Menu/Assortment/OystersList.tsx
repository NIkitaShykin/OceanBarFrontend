<<<<<<< HEAD
import {Row} from 'react-bootstrap'
import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'
import {DishType} from '../../../../common/types/dishesType'
=======

import {Row} from 'react-bootstrap'
import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'

const OystersList = () => {
  const allDishes = useAppSelector<any>((state) => state.dish)
  // @ts-ignores
  const oystersDishes = allDishes.filter((dish) => {
    return dish.dishCategory=='Запеченные устрицы'
  })
>>>>>>> sprint_5

const OystersList = () => {
  const allDishes: DishType = useAppSelector<any>((state) => state.dish)
  // @ts-ignores
  const oystersDishes = allDishes.filter((dish) => {
    return dish.dishCategory == 'Запеченные устрицы'
  })

  return (
    <>
      <Row>
<<<<<<< HEAD
        <ListItem data={oystersDishes} isIntresting={false} />
=======
        <ListItem data={oystersDishes} />
>>>>>>> sprint_5
      </Row>
    </>
  )
}

export default OystersList
