import {Row} from 'react-bootstrap'
import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'

const OystersList = () => {
  const allDishes = useAppSelector((state) => state.dish.dishes)

  const oystersDishes = allDishes.filter(
    (dish) => dish.dishCategory === 'Запеченные устрицы'
  )

  return (
    <>
      <Row>
        <ListItem data={oystersDishes} isIntresting={false} />
      </Row>
    </>
  )
}

export default OystersList
