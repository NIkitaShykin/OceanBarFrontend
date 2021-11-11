import {Row} from 'react-bootstrap'

import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'

const DessertList = () => {
  const allDishes = useAppSelector((state) => state.dish.dishes)

  const desertDishes = allDishes.filter((dish) =>
    dish.dishCategory === 'Десерты'
  )

  return (
    <>
      <Row >
        <ListItem data={desertDishes} isIntresting={false} />
      </Row>
    </>
  )
}

export default DessertList
