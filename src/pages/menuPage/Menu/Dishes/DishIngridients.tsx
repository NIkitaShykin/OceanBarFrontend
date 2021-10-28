import React, {useState} from 'react'
import {Col, Form, Row} from 'react-bootstrap'

type IngridientValueType = Boolean[]

function DishIngredients(props: any) {

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
         

  // @ts-ignore
  const ingridientsItem = props.ingredients.map((ingredient, i) => {
    return (
      <>
               
          <Row>
            <Col xs={3}>
              <Form.Check
                type='checkbox'
                checked={!!ingredient.isAdded}
                onChange={() => {
                  toggleIngredient(ingredient,i)
                }}
              />
            </Col>
            <Col xs={9}>{ingredient.name}</Col>
          </Row>
      
      </>
    )
  })

  // --------------new structur ingridients-----------------------------

  // const ingredientKey = Object.keys(ingredients)
  // const ingredientValue: IngridientValueType = Object.values(ingredients)

  // const ingridientsItem = ingredientKey.map((ingredient, i) => {
  //   return (
  //     <>
  //       {props.isShifting ? (
  //         <Row>
  //           <Col xs={3}>
  //             <Form.Check
  //               type='checkbox'
  //               checked={!!ingredientValue[i]}
  //               onChange={() => {
  //                 toggleIngredient(ingredient)
  //               }}
  //             />
  //           </Col>
  //           <Col xs={9}>{ingredient}</Col>
  //         </Row>
  //       ) : (
  //         <ul>{ingredientValue[i] ? <li>{ingredient}</li> : null}</ul>
  //       )}
  //     </>
  //   )
  // })

  return (
    <>
      {/* ----------new structur ingridients-------------- */}
      {ingridientsItem}
      {/* ---------new structur ingridients----- */}

      {/* {ingridientsItem} */}
    </>
  )
}

export default DishIngredients
