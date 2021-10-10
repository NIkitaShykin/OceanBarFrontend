import foodData from '../DB/foodData';
import {Row } from 'react-bootstrap';
import ListItem from './ListItem';


function BarMenu() {

  return (
    <div>
        <Row>
          <ListItem data={foodData[2]} />
        </Row>
    </div>
  );
}

export default BarMenu;


