import { NavLink, useParams } from 'react-router-dom'
import { Button, Card, Col, Row } from 'react-bootstrap'
import React from 'react'

function ListItem(props: any) {
  const token = useParams<{ token: string }>()



  // @ts-ignore
  const arrayDishes = props.data.map((dish) => {

    return (
      <Col>
        <Card      
          // bg='light'
          key={`${dish.id}`}
          text='dark'
          className='mb-3 mx-2 my-2'
          style={props.isIntresting ? { width: '12rem' } : { width: '18rem' }}
        >
          <NavLink to={'/dish/' + dish.id}>
            <Card.Img
              variant='top'
              src={dish.image}
              id={dish.id}
              onClick={() => console.log('открыть' + `${dish.id}`)}
            />
          </NavLink>

          <Card.Body>
            <Row>
              <Col md="auto"><Card.Title>{dish.name}</Card.Title></Col>
              <Col sm={9}></Col>
            </Row>

            {/* <Row>
              {Object.keys(dish.ingredients).map(el =>` ${el} `)}
            </Row> */}

            <br />

            <Row>
              <Col xs={5} sm={5} md={5} lg={5}>
                <div style={{ display: "flex" }}>
                  <span style={{fontSize: "15px"}}><strong>{dish.prise}</strong></span>
                  <span style={{fontSize: "12px", marginTop:"3px", marginLeft:"2px" }}>BYN</span>
                  </div>
              </Col>
              <Col xs={2}  sm={3} md={3} lg={3}></Col>
              <Col xs={5} sm={4} md={4} lg={4}>
                {dish.weight}
              </Col>
            </Row>

            <NavLink to={'/dish/' + dish.id}>
            <Button
              variant="outline-warning"
              onClick={() => console.log('открыть' + `${dish.id}`)}
              id={dish.id}
              style={props.isIntresting ? { display: 'none' } : {}}
            >
              Заказать
            </Button>
            </NavLink>
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
