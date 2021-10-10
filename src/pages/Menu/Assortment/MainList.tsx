import foodData from '../DB/foodData';
import {Row } from 'react-bootstrap';
import ListItem from './ListItem';

function MainMenu() {



  return (
    <div>
        <Row>
          <ListItem data={foodData[1]} />
        </Row>
    </div>
  );
}

export default MainMenu;
