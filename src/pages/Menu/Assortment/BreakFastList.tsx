import React from 'react';
import { Row } from 'react-bootstrap';
import ListItem from './ListItem';
import foodData from '../DB/foodData';


function BreakfastList() {

  return (
    <>
        <Row>
          <ListItem data={foodData[0]} />
        </Row>
    </>

  );
}

export default BreakfastList;
