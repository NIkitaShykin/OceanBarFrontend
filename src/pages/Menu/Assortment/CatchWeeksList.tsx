import foodData from '../DB/foodData';
import {Row } from 'react-bootstrap';
import ListItem from './ListItem';

function CatchWeeksMenu() {



  return (
    <div>
        <Row>
          <ListItem data={foodData[3]} />
        </Row>
    </div>
  );
}

export default CatchWeeksMenu;
