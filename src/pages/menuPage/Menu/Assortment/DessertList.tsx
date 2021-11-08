
import {Row} from 'react-bootstrap'

import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'
import {DishType} from 'src/common/types/dishesType'


const DessertList = () => {
  const allDishes: DishType[] =
    useAppSelector<any>((state) => state.dish.dishes)
  // @ts-ignores
  const desertDishes = allDishes.filter((dish) => {
    return dish.dishCategory=='Десерты'
  })

  return (
    <>
      <Row >
        <ListItem data={desertDishes} isIntresting={false} />
      </Row>
    </>
  )
}

export default DessertList


