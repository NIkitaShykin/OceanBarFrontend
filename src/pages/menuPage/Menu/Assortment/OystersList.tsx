import {Row} from 'react-bootstrap'
import ListItem from './ListItem'
import { useAppSelector } from '../../../../redux/hooks'

function OystersList() {

  
const allDishes = useAppSelector<any>(state => state.dish)
const oystersDishes = allDishes.filter(dish => {
  return dish.dishCategory=="Запеченные устрицы"
})


  return (
    <>
        <Row>
        <ListItem data={oystersDishes} />
        </Row>
    </>
  );
}

export default OystersList;
