import { NavLink, useParams } from 'react-router-dom'
import { Button, Card, Col, Row, Image } from 'react-bootstrap'
import { DishType } from '../../../../redux/reducers/dishesReducer'
import {useDispatch, useSelector} from 'react-redux'
import {OrderedToast} from '../../../../components/OrderToast/OrderedToast'
import {addDishToCart} from '../../../../redux/actions'

// import {TDish} from '../common'  ??????

type PropsType = {
  data: Array<DishType>
  isIntresting?: any
}

function ListItem(props: PropsType) {
  const token = useParams<{ token: string }>()
  const dispatch = useDispatch()
  const dishes = useSelector((state: any) => state.cart.dishes)
  const orderDish = (Dish: any) => {
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
                  onClick={() => orderDish(dish)}
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
