import {Row} from 'react-bootstrap'
import ListItem from './ListItem'
import { useAppSelector } from '../../../../redux/hooks'


function SoupList() {

  const allDishes = useAppSelector<any>(state => state.dish)
  const soupDishes = allDishes.filter(dish => {
    return dish.dishCategory=="Супы"
  })

  return (
    <>
        <Row >
              <ListItem data={soupDishes} />
         </Row>
    </>
  );
}

export default SoupList;


