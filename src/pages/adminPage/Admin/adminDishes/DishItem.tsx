import {NavLink} from 'react-router-dom'
import {Button, Col, Row} from 'react-bootstrap'
// import {useDispatch} from 'react-redux'

import {DishType} from '../../../../common/types/dishesType'
// import {mapDishTypeToDishInCart} from '../../../../utils/typeMappers'

// import {orderedToast} from '../../../../components/OrderToast/OrderedToast'
// import {addDishToCart} from '../../../../redux/actions'
// import {ApiCart} from '../../../../api/ApiCart'
// import {parseString} from '../../../../common/parceInString'
// import Cookies from 'js-cookie'
// import {useAppSelector} from '../../../../redux/hooks'

type PropsType = {
  data: Array<DishType>
  isIntresting: boolean
}

const DishItem = (props: PropsType) => {
  // const history = useHistory()
  // const isLogIn = useAppSelector((state) => state.auth)
  // const dispatch = useDispatch()
  // const dishes: Array<DishInCart> =
  // useAppSelector((state) => state.cart.dishes)


  const orderDish = async (Dish: DishType) => {
    //     await ApiCart.addDishToCart(
    //       Dish.id,
    //       Cookies.get('token'),
    //       parseString(Dish.ingredients)
    //     ).then((res) => {})
  }

  const arrayDishes = props.data.map((dish) => {
    return (
      <div
        key={dish.id}
        style={{position: 'relative',
          border: '1px solid black',
          margin: '10px'
        }}
      >

        <Row>


          <Col>
            <Col style={{margin: '20px'}}>
              <NavLink to={'/dish/' + dish.id}>
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
            </Col>

          </Col>


          <Col>
            <h1>{dish.name}</h1>
            <span style={{fontSize: '25px'}}>
              <strong>{dish.price}</strong>
            </span>
            <span style={{fontSize: '14px', marginLeft: '2px'}}>
              <strong> BYN</strong>
            </span>
            <p>
              <span style={{fontSize: '25px'}}>
                {dish.weight}
              </span>
            </p>
          </Col>

          <Col>
            <Button
              variant='outline-warning'
              onClick={() => orderDish(dish)}
              key={dish.id}
              style={{marginTop: '20px', marginLeft: '-4px'}}
            >
                Удалить
            </Button>
          </Col>

        </Row>

      </div>
    )
  })

  return (
    <div>
      <Col className='row my-3'>{arrayDishes}</Col>
    </div>
  )
}

export default DishItem
