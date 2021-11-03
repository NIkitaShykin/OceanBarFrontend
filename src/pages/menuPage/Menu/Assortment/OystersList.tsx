import {Row} from 'react-bootstrap'
import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'
import {DishType} from '../../../../common/types/dishesType'

const OystersList = () => {
  const allDishes: DishType = useAppSelector<any>((state) => state.dish)
  // @ts-ignores
  const oystersDishes = allDishes.filter((dish) => {
    return dish.dishCategory == 'Запеченные устрицы'
  })

  return (
    <>
      <Row>
        <ListItem data={oystersDishes} isIntresting={false} />
      </Row>
    </>
  )
}

export default OystersList
