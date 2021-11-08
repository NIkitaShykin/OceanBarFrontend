
import {Row} from 'react-bootstrap'

import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'
import {DishType} from '../../../../common/types/dishesType'

// @ts-ignores
const SoupList = () => {
  const allDishes: DishType[] = useAppSelector<any>(
    (state) => state.dish.dishes
  )

  const soupDishes = allDishes.filter((dish) => {
    return dish.dishCategory=='Супы'
  })

  return (
    <>
      <Row >
        <ListItem data={soupDishes} isIntresting={false} />
      </Row>
    </>
  )
}

export default SoupList


