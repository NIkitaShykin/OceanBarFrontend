/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
import {Row} from 'react-bootstrap'
import ListItem from './ListItem'
import { useAppSelector } from '../../../../redux/hooks'


function DessertList(): JSX.Element {

  const allDishes = useAppSelector<any>(state => state.dish)
  const desertDishes = allDishes.filter(dish => {
    return dish.dishCategory=="Десерты"
  })

  return (
    <>
      <Row >
        <ListItem data={desertDishes} />
      </Row>
    </>
  )
}

export default DessertList



