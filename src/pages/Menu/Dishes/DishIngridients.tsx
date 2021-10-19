import React, {useState} from 'react'
import {Col, Form, Row} from 'react-bootstrap'

type IngridientValueType = Boolean[]

function DishIngredients(props: any) {
  const [renderIngredients, setRenderIng] = useState<Object>(props.ingredients)

  const ingridientKey = Object.keys(renderIngredients)
  const ingridientValue: IngridientValueType = Object.values(renderIngredients)

  const toggleIngridient = (el: any) => {
    const newIngredients = {...renderIngredients}
    // @ts-ignore
    newIngredients[el] = !newIngredients[el]
    setRenderIng(newIngredients)
    props.setIngridient(newIngredients)
  }

  const ingridientsItem = ingridientKey.map((ingridient, i) => {
    return (
      <>
        {props.isShifting ? (
          <Row>
            <Col xs={3}>
              <Form.Check
                type='checkbox'
                checked={!!ingridientValue[i]}
                onChange={() => {
                  toggleIngridient(ingridient)
                }}
              />
            </Col>
            <Col xs={9}>{ingridient}</Col>
          </Row>
        ) : (
          <ul>
            <li>{ingridient}</li>
          </ul>
        )}
      </>
    )
  })

  return <>{ingridientsItem}</>
}

export default DishIngredients
