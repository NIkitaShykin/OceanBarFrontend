import React from 'react';
import foodData from "../DB/foodData";
import {Row, Col,Form} from 'react-bootstrap';


function DishIngredients(props:any) {

  //@ts-ignore
  const dish=props.ingredients.map(el=>{
  return (
    <Row>
        <Col xs={3}><Form.Check type="checkbox" /></Col>
        <Col xs={9}>{el}</Col>
    </Row>
)
})

  return (

    <>
        {dish}
   </>
  )
}

export default DishIngredients;
