import {Row} from 'react-bootstrap'
import ListItem from './ListItem'
import { useAppSelector } from '../../../../redux/hooks'

function SaladList() {
  
  const allDishes = useAppSelector<any>(state => state.dish)
  //@ts-ignores
  const saladDishes = allDishes.filter(dish => {
    return dish.dishCategory=="Салаты"
  })


  return (
    <>
        <Row>
          <ListItem data={saladDishes} />
        </Row>
    </>
  );
}

export default SaladList;
