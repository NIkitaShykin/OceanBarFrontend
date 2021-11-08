
import {Row} from 'react-bootstrap'

import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'
import {DishType} from '../../../../common/types/dishesType'
import {AppStoreType} from '../../../../redux/reducers/rootReducer'

const SaladList = () => {
  const allDishes: DishType[] =
    useAppSelector<any>((state: AppStoreType) => state.dish.dishes)

  const saladDishes: DishType[] = allDishes.filter((dish: DishType) => {
    return dish.dishCategory=='Салаты'
  })


  return (
    <>
      <Row>
        <ListItem data={saladDishes} isIntresting={false} />
      </Row>
    </>
  )
}

export default SaladList
