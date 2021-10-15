import React, {useState} from "react";
import foodData from "../DB/foodData";
import {Row, Col,Form} from 'react-bootstrap';

type IngridientValueType =Boolean[]

function DishIngredients(props:any) {

  const [renderIngredients, setRenderIng] = useState<Object>(props.ingredients);

  const ingridientKey=Object.keys(renderIngredients)
  const ingridientValue:IngridientValueType=Object.values(renderIngredients)

  const toggleIngridient=(el:any)=>{
    let newIngredients = {...renderIngredients}
    //@ts-ignore
    newIngredients[el]=!newIngredients[el]
    setRenderIng(newIngredients)
  }
  
  const ingridientsItem=ingridientKey.map((el,i)=>{
    
  return (
    <Row>
        <Col xs={3}>
          <Form.Check 
           type="checkbox"
           checked={!!ingridientValue[i]}
           onClick={()=>{toggleIngridient(el)}}/>
        </Col>
        <Col xs={9}>
          {el}
        </Col>
    </Row>
)
})



  return (

    <>
        {ingridientsItem}
   </>
  )
}

export default DishIngredients;
