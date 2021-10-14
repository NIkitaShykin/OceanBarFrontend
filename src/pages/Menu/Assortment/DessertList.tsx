import foodData from '../DB/foodData';
import { Row, CardGroup } from 'react-bootstrap';
import ListItem from './ListItem';


function DessertList() {

  return (
    <>
      <Row >
        <ListItem data={foodData[4]} />
      </Row>
    </>
  );
}

export default DessertList;


