import React, {useState} from "react";
import foodData from "../DB/foodData";
import DishIngridients from "./DishIngridients";
import { Button, Col, Row, Card, Form } from 'react-bootstrap';
import ShiftingDish from './ShiftingDish';
import CompletedDish from './CompletedDish';


function Dish() {

  const [ischanged, setIsChanged] = useState<boolean>(false);

  const dishisChanged=()=>{
    setIsChanged(!ischanged)
      }

  return (
    <div>
         {ischanged ? 
         <ShiftingDish dishisChanged={dishisChanged}/>
         :<CompletedDish dishisChanged={dishisChanged}/>} 
    </div>
  )
}

export default Dish;
