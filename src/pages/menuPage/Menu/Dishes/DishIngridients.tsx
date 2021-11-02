<<<<<<< HEAD
/* eslint-disable max-len */
import React, {useState} from 'react'
import {Col, Form, Row} from 'react-bootstrap'

const DishIngredients = (props: any) => {
  // const [ingredients, setIngredients] = useState<Object>(props.ingredients)

  // const toggleIngredient = (el: any) => {
  //   const copyIngredients = {...ingredients}
  //   // @ts-ignore
  //   copyIngredients[el] = !copyIngredients[el]
  //   setIngredients(copyIngredients)
  //   props.setIngridient(copyIngredients)
  // }

  // --------------new structur ingridients-----------------------------

  const [ingredients, setIngredients] = useState<Array<Object>>(props.ingredients)


  const toggleIngredient = (el: any, i:number) => {
    const copyIngredients = [...ingredients]

    // @ts-ignore
    copyIngredients[i].isAdded = !copyIngredients[i].isAdded
    // @ts-ignore

    setIngredients(copyIngredients)
    props.setIngredient(copyIngredients)
  }

=======
import React, { useState } from 'react'
import { Col, Form, Row } from 'react-bootstrap'
import { IngredientType } from '../../../../redux/reducers/dishesReducer'

type PropsType = {
  setIngredient: (arg0: any) => void
  ingredients: Array<IngredientType>
}

function DishIngredients(props: PropsType) {

  const [ingredients, setIngredients] = useState<Array<IngredientType>>(
    props.ingredients
  )

  const toggleIngredient = (el: IngredientType, i: number) => {
    const elCopy = { ...el }
    elCopy.isAdded = !el.isAdded
    const copyIngredients = [...ingredients]
    copyIngredients[i] = elCopy
    setIngredients(copyIngredients)
    props.setIngredient(copyIngredients)
  }
>>>>>>> sprint_4

  const ingridientsItem = ingredients.map((ingredient, i) => {
    return (
<<<<<<< HEAD
      <>

        <Row>
          <Col xs={3}>
            <Form.Check
              type='checkbox'
              checked={!!ingredient.isAdded}
              onChange={() => {
                toggleIngredient(ingredient, i)
              }}
            />
          </Col>
          <Col xs={9}>{ingredient.name}</Col>
        </Row>

      </>
=======
      <div>
        <Row key={`${i}`}>
          <Col xs={11}>
            <label style={{ marginTop: "10px" }}>
              <input style={{ marginRight: "10px" }}
                checked={!!ingredient.isAdded}
                type="checkbox" name="name"
                onChange={() => {
                  toggleIngredient(ingredient, i)
                }}
              />
              <span style={{ lineHeight: "15px" }}>
                {ingredient.name}
              </span>
            </label>
          </Col>
          <Col xs={1}>
          </Col>
        </Row>
      </div>
>>>>>>> sprint_4
    )
  })

  return <>
    {ingridientsItem}
  </>
}

export default DishIngredients
