import React from 'react';
import foodData from "../DB/foodData";
import DishIngridients from "./DishIngridients";
import { Button, Col, Row, Card, Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";


function ShiftingDish(props:any) {

  const token = useParams<{ token: string }>()

  //@ts-ignore
  const dish = foodData[0].find(el => el.id == token.token)

  return (

    <Row className="justify-content-md-center">
      <Col md="auto">
        <Row>
          <Card
            border="warning"
            key="`${dish.id}`"
            className="mb-3 mx-2 my-5"
            style={{ width: '48rem' }}
          >
            <Row>
              <Col xs lg="7">
                <img style={{ width: "100%" }} src={dish?.image} />
              </Col>
              <Col xs lg="5">
                <Card.Title><h2>{dish?.name}</h2></Card.Title>
                <Row>
                  <Col xs lg="5"><h3>Состав</h3></Col>
                  <Col xs lg="7"></Col>
                </Row>
                <Row>
                  <Col xs={7}>
                    <DishIngridients 
                      ingredients={dish?.ingredients} 
                      />
                  </Col>
                  <Col xs={5}>
                    <br />
                    <Button onClick={props.dishisChanged}
                      variant="outline-secondary" size="sm">
                      готово
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col sm={5}><h5>Вес: {dish?.weight}</h5></Col>
                  <Col sm={7}></Col>
                </Row>
                <Row>
                  <Col sm={7}><h5>Стоимость: {dish?.prise}</h5></Col>
                  <Col sm={5}></Col>
                </Row>
                <Button onClick={() => console.log("заказать handler")}
                  variant="outline-secondary" size="sm">
                  Заказать
                </Button>
              </Col>
            </Row>
          </Card>
        </Row>
      </Col>
    </Row>
  )
}

export default ShiftingDish;
