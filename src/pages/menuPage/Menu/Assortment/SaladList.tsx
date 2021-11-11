import {Row} from 'react-bootstrap'

import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'


const SaladList = () => {
  const allDishes = useAppSelector((state) => state.dish.dishes)

  const saladDishes = allDishes.filter((dish) =>
    dish.dishCategory=='Салаты'
  )


  return (
    <>
      <Row>
        <ListItem data={saladDishes} isIntresting={false} />
      </Row>
    </>
  )
}

export default SaladList
