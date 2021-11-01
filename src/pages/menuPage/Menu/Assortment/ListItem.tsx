import {NavLink, useParams} from 'react-router-dom'
import {Button, Card, Col, Row} from 'react-bootstrap'
import React from 'react'
import {addDishToCart} from '../../../../redux/actions'
import {useDispatch, useSelector} from 'react-redux'
import {OrderedToast} from '../../../../components/OrderToast/OrderedToast'

import {TDish} from '../common'

function ListItem(props: any) {
  const token = useParams<{ token: string }>()
  const dispatch = useDispatch()
  const dishes = useSelector((state: any) => state.cart.dishes)
  const orderDish = (Dish: TDish) => {
    if (dishes.find((dish: any) => dish.id === Dish.id)) {
      OrderedToast(`Блюдо "${Dish.name}" уже в корзине!`)
    } else {
      dispatch(
        addDishToCart({
          id: Dish.id,
          name: Dish.name,
          prise: Dish.prise,
          image: Dish.image,
          numberOfDishes: 1,
        })
      )
      // eslint-disable-next-line new-cap
      OrderedToast(`Блюдо "${Dish.name}" добавлено в корзину`)
    }
  }

  // @ts-ignore
  const arrayDishes = props.data.map((dish: any) => {
    return (
      <Col>
        <Card
          // bg='light'
          key={`${dish.id}`}
          text='dark'
          className='mb-3 mx-2 my-2'
          style={props.isIntresting ? {width: '12rem'} : {width: '18rem'}}
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
              <Col md='auto'>
                <Card.Title>{dish.name}</Card.Title>
              </Col>
              <Col sm={9}></Col>
            </Row>

            {/* <Row>
              {Object.keys(dish.ingredients).map(el =>` ${el} `)}
            </Row> */}

            <br/>

            <Row>
              <Col xs={5} sm={5} md={5} lg={5}>
                <div style={{display: 'flex'}}>
                  <span style={{fontSize: '15px'}}>
                    <strong>{dish.prise}</strong>
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      marginTop: '3px',
                      marginLeft: '2px',
                    }}
                  >
                    BYN
                  </span>
                </div>
              </Col>
              <Col xs={2} sm={3} md={3} lg={3}></Col>
              <Col xs={5} sm={4} md={4} lg={4}>
                {dish.weight}
              </Col>
            </Row>

            <Button
              variant='outline-warning'
              onClick={() => {
                orderDish(dish)
              }}
              style={props.isIntresting ? {display: 'none'} : {}}
            >
                            Заказать
            </Button>
            <br/>
          </Card.Body>
        </Card>
      </Col>
    )
  })

  return (
    <div>
      <Col className='row my-3'>{arrayDishes}</Col>
    </div>
  )
}

export default ListItem
