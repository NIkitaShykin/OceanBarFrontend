import { NavLink, useParams } from 'react-router-dom'
import { Button, Card, Col, Row } from 'react-bootstrap'
import React from 'react'
import { DishType } from '../../../../redux/reducers/dishesReducer'

type PropsType = {
  data: Array<DishType>
  isIntresting?: any
}


function ListItem(props: PropsType) {

  const arrayDishes = props.data.map((dish) => {
    return (
      <Col style={{ position: "relative" }}>
        <Card
          key={`${dish.id}`}
          text='dark'
          className='mb-3 mx-2 my-2'
          style={props.isIntresting
            ? { width: '17rem', height: '17rem' }
            : { width: '15rem', height: '22rem' }}
        //  ? { width: '12rem' } 
        //  : { width: '18rem'}}
        >
          <NavLink to={'/dish/' + dish.id}>
            <Card.Img
              variant='top'
              // src={dish.image}
              src={"https://img.poehalisnami.by/static/countries/c84/small/84_637145235972434334.jpg"}
              key={dish.id}
            />
          </NavLink>

          <Card.Body>
            <Row>
              <Col md="auto"><Card.Title>{dish.name}</Card.Title></Col>
              <Col sm={9}></Col>
            </Row>
            <br />
            <div
              style={{
                position: 'absolute',
                bottom: '5%',
                width: "100%",
              }}>
              <Row>
                <Col xs={5} sm={5} md={5} lg={4}>
                  <div style={{ display: "flex", alignItems: "baseline" }}>
                    <span style={{ fontSize: "15px" }}><strong>{dish.price}</strong></span>
                    <span style={{ fontSize: "14px", marginLeft: "2px" }}>BYN</span>
                  </div>
                </Col>
                <Col xs={2} sm={2} md={2} lg={3}></Col>
                <Col xs={5} sm={5} md={5} lg={5}>
                  {dish.weight}
                </Col>
              </Row>

              <NavLink to={'/dish/' + dish.id}>
                <Button
                  variant="outline-warning"
                  onClick={() => console.log('открыть' + `${dish.id}`)}
                  key={dish.id}
                  style={props.isIntresting ? { display: 'none' } : {}}
                >
                  Заказать
                </Button>
              </NavLink>
            </div>
            <br />
          </Card.Body>
        </Card>
      </Col >
    )
  })

  return (
    <div>
      <Col className='row my-3'>{arrayDishes}</Col>
    </div>
  )
}

export default ListItem
