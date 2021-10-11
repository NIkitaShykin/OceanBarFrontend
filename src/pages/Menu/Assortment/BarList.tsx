import foodData from '../DB/foodData';
import {Row, CardGroup } from 'react-bootstrap';
import ListItem from './ListItem';


function BarList() {

  return (
    <>
        <Row >
              <ListItem data={foodData[2]} />
         </Row>
    </>
  );
}

export default BarList;


