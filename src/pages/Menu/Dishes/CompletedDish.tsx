import React from 'react';
import foodData from "../DB/foodData";
import DishIngridients from "./DishIngridients";
import { Button, Col, Row, Card, Form } from 'react-bootstrap';
import { useParams } from "react-router-dom";


function CompletedDish(props:any) {

  const token = useParams<{ token: string }>()

  //@ts-ignore
  const nesseryObject = foodData[0].find(el => el.id == token.token)

  const orderDish=()=>{
    // send dishID and Ingridients to..
    // and redirect page to    
    console.log("dishId=" + nesseryObject.id);
    console.log("Ingridients" + "????");
    
  }


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
                <img style={{ width: "100%" }} src={nesseryObject?.image} />
              </Col>
              <Col xs lg="5">
                <Card.Title><h2>{nesseryObject?.name}</h2></Card.Title>
                <Row>
                  <Col xs lg="5"><h3>Состав</h3></Col>
                  <Col xs lg="7"></Col>
                </Row>
                <Row>
                  <p>лук</p>
                  <p>чеснок</p>
                  <p>томаты</p>
                  {/* <Col xs={7}>
                    <DishIngridients ingredients={nesseryObject?.ingredients} />
                  </Col> */}
                  <Col xs={5}>
                    <br />
                    <Button onClick={props.dishisChanged}
                      variant="outline-secondary" size="sm">
                      изменить состав
                    </Button>
                  </Col>
                </Row>
                <Row>
                  <Col sm={5}><h5>Вес: {nesseryObject?.weight}</h5></Col>
                  <Col sm={7}></Col>
                </Row>
                <Row>
                  <Col sm={7}><h5>Стоимость: {nesseryObject?.prise}</h5></Col>
                  <Col sm={5}></Col>
                </Row>
                <Button onClick={() =>{orderDish()}}
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

export default CompletedDish;
