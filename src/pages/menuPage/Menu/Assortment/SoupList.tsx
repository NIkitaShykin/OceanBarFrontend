import {Row} from 'react-bootstrap'

import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'

const SoupList = () => {
  const allDishes = useAppSelector((state) => state.dish.dishes
  )

  const soupDishes = allDishes.filter((dish) =>
    dish.dishCategory === 'Супы'
  )

  return (
    <>
      <Row >
        <ListItem data={soupDishes} isIntresting={false} />
      </Row>
    </>
  )
}

export default SoupList
