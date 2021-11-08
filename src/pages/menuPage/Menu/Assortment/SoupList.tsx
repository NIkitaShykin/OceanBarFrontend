
import {Row} from 'react-bootstrap'

import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'
import {DishType} from '../../../../common/types/dishesType'
import {AppStoreType} from '../../../../redux/reducers/rootReducer'

const SoupList = () => {
  const allDishes: DishType[] = useAppSelector<any>(
    (state: AppStoreType) => state.dish.dishes
  )

  const soupDishes = allDishes.filter((dish: DishType) => {
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


