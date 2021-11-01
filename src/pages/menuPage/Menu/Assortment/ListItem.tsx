import { NavLink, useParams } from 'react-router-dom'
import { Button, Card, Col, Row, Image } from 'react-bootstrap'
import { DishType } from '../../../../redux/reducers/dishesReducer'
// import './Listitem.scss'

type PropsType = {
  data: Array<DishType>
  isIntresting?: any
}


function ListItem(props: PropsType) {

  const arrayDishes = props.data.map((dish) => {

    return (
      <Col
        style={{ position: "relative" }}
        key={dish.id}
      >
        <Card
          key={`${dish.id}`}
          text='dark'
          className='mb-3 mx-2 my-2'
          style={props.isIntresting
            ? { width: '12rem', height: '17rem' }
            : { width: '18rem', height: '22rem' }}
        >
          <NavLink to={'/dish/' + dish.id}>
            <div
              key={dish.id}
              style={props.isIntresting
                ? {
                  height: '150px', width: '100%',
                  backgroundImage: `url(${dish.imageURL})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }
                : {
                  height: '200px', width: '100%',
                  backgroundImage: `url(${dish.imageURL})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }
              }
            />
            {/* <Card.Img
              variant='top'
              style={{ background: "url(https://oceanbarmenu.s3.eu-north-1.amazonaws.com/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%9A%D1%80%D0%B0%D0%B1%D1%8B%D0%9C%D0%BE%D0%BB%D0%BB%D1%8E%D1%81%D0%BA%D0%B8.jpg" }}
              // style={props.isIntresting
              //   ? { height:'150px', width:'100%' }
              //   : {height:'200px', width:'100%'}}
              // style={props.isIntresting
              src={dish.imageURL}
              // src={"https://oceanbarmenu.s3.eu-north-1.amazonaws.com/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE/%D0%9F%D0%BB%D0%B0%D1%82%D0%BE%D0%9A%D1%80%D0%B0%D0%B1%D1%8B%D0%9C%D0%BE%D0%BB%D0%BB%D1%8E%D1%81%D0%BA%D0%B8.jpg"}
              key={dish.id}
             /> */}
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
