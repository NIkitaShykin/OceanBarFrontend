import foodData from '../DB/foodData';
import {Row } from 'react-bootstrap';
import ListItem from './ListItem';

function SaladList() {



  return (
    <>
        <Row>
          <ListItem data={foodData[2]} />
        </Row>
    </>
  );
}

export default SaladList;
