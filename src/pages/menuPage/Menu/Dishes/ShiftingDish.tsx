import { useState } from 'react'
import DishIngridients from './DishIngridients'
import { Button, Card, Col, Row } from 'react-bootstrap'



type IngridientValueType = Boolean[]

function ShiftingDish(props: any) {

  const [ingredients, setIngredients] = useState<Object>(props.currentDish?.ingredients);

            let disableIngredientAccept = false
            let minAmountIngredient = 1

    
                //@ts-ignore
                const newIngred = ingredients.filter( el => { 
                  return el.isAdded == true
                })
    
          //@ts-ignore
            if (newIngred.length > minAmountIngredient) {
              disableIngredientAccept = false }
            else  { disableIngredientAccept = true }
  


            const updateIngridient = (updIngredients: any) => {
               setIngredients(updIngredients)
            }

  const finishSifting = () => {
    props.dishisChanged()
            props.updateIngredients2(ingredients)
  }

  return (
    <Row className='justify-content-md-center'>
      <Col md='auto'>
        <Row>
          <Card
            border='warning'
            key={`${props.currentDish.id}`}
            className='mb-3 mx-2 my-5'
            style={{ width: '48rem' }}
          >
            <Row>
              <Col xs lg='7'>
                <img style={{ width: '100%' }} src={props.currentDish?.image} />
              </Col>
              <Col xs lg='5'>
                <Card.Title>
                  <h2>{props.currentDish?.name}</h2>
                </Card.Title>
                <Row>
                  <Col xs lg='5'>
                    <h3>Состав</h3>
                  </Col>
                  <Col xs lg='7'></Col>
                </Row>
                <Row>
                  <Col xs={7}>

                      <DishIngridients
                             setIngredient={updateIngridient}              
                             ingredients={ingredients}
                      />
                  </Col>
                  <Col xs={5}>
                    <br />
                    <Button
                      onClick={finishSifting}
                      variant='outline-secondary'
                      size='sm'
                      disabled={disableIngredientAccept}
                    >
                      готово
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Row><br /></Row>
                  <Col sm={5}>
                    <h5>Вес: {props.currentDish?.weight}</h5>
                  </Col>
                  <Col sm={7}></Col>
                </Row>
                <Row>
                  <Col sm={7}>
                    <h5>Стоимость: {props.currentDish?.prise}</h5>
                  </Col>
                  <Col sm={5}></Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Row>
      </Col>
    </Row>
  )
}

export default ShiftingDish
