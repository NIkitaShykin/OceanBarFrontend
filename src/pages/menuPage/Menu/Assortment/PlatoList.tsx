import {Row} from 'react-bootstrap'
import ListItem from './ListItem'
import { useAppSelector } from '../../../../redux/hooks'


function PlatoList() {

  const allDishes = useAppSelector<any>(state => state.dish)
  //@ts-ignores
  const platoDishes = allDishes.filter(dish => {
    return dish.dishCategory=="Плато"
  })

  return (
    <>
        <Row>
          <ListItem data={platoDishes} />
        </Row>
    </>

  );
}

export default PlatoList;
