import React from 'react';
import { Row } from 'react-bootstrap';
import ListItem from './ListItem';
import foodData from '../DB/foodData';


function BreakfastMenu() {

  return (
    <div>
        <Row>
          <ListItem data={foodData[0]} />
        </Row>
    </div>

  );
}

export default BreakfastMenu;
