import {Row} from 'react-bootstrap'

import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'
import {DishType} from '../../../../common/types/dishesType'

type dishesType = Array<DishType>

const SoupList = () => {
  const allDishes: dishesType = useAppSelector<any>((state) => state.dish)
  
  const soupDishes = allDishes.filter((dish) => {
    return dish.dishCategory == 'Супы'
  })

  return (
    <>
      <Row>
        <ListItem data={soupDishes} isIntresting={false} />
      </Row>
    </>
  )
}

export default SoupList
