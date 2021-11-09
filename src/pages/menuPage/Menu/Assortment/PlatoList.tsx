import {Row} from 'react-bootstrap'

import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'
import {DishType} from '../../../../common/types/dishesType'

const PlatoList = () => {
  const allDishes = useAppSelector((state) => state.dish.dishes)

  const platoDishes = allDishes.filter((dish) =>
    dish.dishCategory === 'Плато'
  )

  return (
    <>
      <Row>
        <ListItem data={platoDishes} isIntresting={false} />
      </Row>
    </>
  )
}

export default PlatoList
