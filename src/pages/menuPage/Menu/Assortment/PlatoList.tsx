import {Row} from 'react-bootstrap'

import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'
import {DishType} from '../../../../common/types/dishesType'

const PlatoList = () => {
  const allDishes: DishType = useAppSelector<any>((state) => state.dish)
  // @ts-ignores
  const platoDishes = allDishes.filter((dish) => {
    return dish.dishCategory == 'Плато'
  })

  return (
    <>
      <Row>
        <ListItem data={platoDishes} isIntresting={false} />
      </Row>
    </>
  )
}

export default PlatoList
