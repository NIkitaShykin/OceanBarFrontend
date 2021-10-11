import React from 'react';
import foodData from "../DB/foodData";

// import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Col, Stack,Card} from 'react-bootstrap';


function DishIngredients(props:any) {

  //@ts-ignore
  const dish=props.ingredients.map(el=><div>{el}</div>)

  return (

    <div className="col">

        {dish}


</div>
  )
}

export default DishIngredients;
