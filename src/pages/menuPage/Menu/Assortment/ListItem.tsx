import {NavLink, useHistory} from 'react-router-dom'
import {Button, Card, Col, Row} from 'react-bootstrap'
import {useDispatch} from 'react-redux'

import {DishInCart, DishType} from '../../../../common/types/dishesType'
import {mapDishTypeToDishInCart} from '../../../../utils/typeMappers'

import {orderedToast} from '../../../../components/OrderToast/OrderedToast'
import {addDishToCart} from '../../../../redux/actions'
import {ApiCart} from '../../../../api/ApiCart'
import {parseString} from '../../../../common/parceInString'
import Cookies from 'js-cookie'
import {useAppSelector} from '../../../../redux/hooks'

type PropsType = {
  data: Array<DishType>
  isIntresting: boolean
}

const ListItem = (props: PropsType) => {
  const history = useHistory()
  const isLogIn = useAppSelector((state) => state.auth)
  const dispatch = useDispatch()
  const dishes: Array<DishInCart> = useAppSelector((state) => state.cart.dishes)
  const orderDish = async (Dish: DishType) => {
    if (isLogIn.isAuthorized) {
      if (dishes.find((dish) => dish.id === Dish.id)) {
        orderedToast(`Блюдо "${Dish.name}" уже в корзине!`)
      } else {
        await ApiCart.addDishToCart(
          Dish.id,
          Cookies.get('token'),
          parseString(Dish.ingredients)
        ).then((res) => {})
        dispatch(
          addDishToCart(mapDishTypeToDishInCart(Dish))
        )
        orderedToast(`Блюдо "${Dish.name}" добавлено в корзину`)
      }
    } else {
      orderedToast('Войдите в существующий аккаунт или зарегистрируйтесь', 4000)
      history.push('/login')
    }
  }

  const arrayDishes = props.data.map((dish) => {
    return (
      <Col style={{position: 'relative'}} key={dish.id}>
        <Card
          key={`${dish.id}`}
          text='dark'
          className='mb-3 mx-2 my-2'
          style={
            props.isIntresting ?
              {
                width: '12rem',
                height: '19rem'
              } :
              {
                width: '18rem',
                height: '22rem'
              }
          }
        >
          <NavLink to={'/dishes/' + dish.id}>
            <div
              key={dish.id}
              style={
                props.isIntresting ?
                  {
                    height: '150px',
                    width: '100%',
                    backgroundImage: `url(${dish.imageURL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  } :
                  {
                    height: '200px',
                    width: '100%',
                    backgroundImage: `url(${dish.imageURL})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }
              }
            />
          </NavLink>
          <Card.Body>
            <Row>
              <Col md='auto'>
                <Card.Title>{dish.name}</Card.Title>
              </Col>
              <Col sm={9}></Col>
            </Row>
            <br />
            <div
              style={{
                position: 'absolute',
                bottom: '5%',
                width: '100%',
              }}
            >
              <Row>
                <Col xs={5} sm={5} md={5} lg={4}>
                  <div style={{display: 'flex', alignItems: 'baseline'}}>
                    <span style={{fontSize: '15px'}}>
                      <strong>{dish.price}</strong>
                    </span>
                    <span style={{fontSize: '14px', marginLeft: '2px'}}>
                      BYN
                    </span>
                  </div>
                </Col>
                <Col xs={2} sm={2} md={2} lg={3}></Col>
                <Col xs={5} sm={5} md={5} lg={5}>
                  {dish.weight}
                </Col>
              </Row>
              <Button
                variant='outline-warning'
                onClick={() => orderDish(dish)}
                key={dish.id}
                style={props.isIntresting ? {display: 'none'} : {}}
              >
                Заказать
              </Button>
            </div>
            <br />
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
