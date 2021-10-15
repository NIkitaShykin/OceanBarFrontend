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
    props.setIngridient(newIngredients) 
  }
  
  const ingridientsItem=ingridientKey.map((ingridient,i)=>{
    
  return (
    <Row>
        <Col xs={3}>
          <Form.Check 
           type="checkbox"
           checked={!!ingridientValue[i]}
           onChange={()=>{toggleIngridient(ingridient)}}
           />
        </Col>
        <Col xs={9}>
          {ingridient}
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
