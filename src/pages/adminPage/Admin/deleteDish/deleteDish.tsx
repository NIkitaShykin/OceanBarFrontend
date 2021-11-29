import {Button, Col, Row} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {orderedToast} from '../../../../components/OrderToast/OrderedToast'
import {getDishesFromApiTC} from '../../../../redux/reducers/dishesReducer'
import {ApiAdmin} from '../../../../api/ApiAdmin'
import ShowIngridients from './showIngridients'
import {useAppSelector} from '../../../../redux/hooks'
import {useDispatch} from 'react-redux'

const AdminDishes = () => {
  const allDishes = useAppSelector((state) => state.dish.dishes)
  const dispatch = useDispatch()

  const deleteDish=(dishId: number)=>{
    ApiAdmin.deleteDish(dishId)
      .then((res)=>{
        // @ts-ignore
        if (res.data.error) {
          orderedToast(`Блюдо удалить не удалось`)
        } else if (res.status=204) {
          orderedToast(`Блюдо удалено`)
          dispatch(getDishesFromApiTC())
        }
      })
  }

  const arrayDishes = allDishes.map((dish) => {
    return (
      <div
        key={dish.id}
        style={{border: '1px solid black', margin: '10px'}}
      >

        <Row>
          <h4> {dish.name} </h4>

          <Col xs={'auto'} sm={5} md={4} lg={3}
            style={{marginLeft: '10px'}}
          >
            <NavLink to={'/dishes/' + dish.id}>
              <div
                key={dish.id}
                style={{
                  height: '180px',
                  width: '200px',
                  marginBottom: '5px',
                  backgroundImage: `url(${dish.imageURL})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                } }
              />
            </NavLink>
          </Col>

          <Col xs={'auto'} sm={7} md={6} lg={6}>
            <div >
              <div style=
                {{display: 'flex', alignItems: 'baseline', height: '22px'}}
              >
                <span style={{fontSize: '15px'}}>
                  <h5>Стоимость:</h5>
                </span>
                <span style={{fontSize: '20px', marginLeft: '3px'}}>
                  {dish.price}
                </span>
                <span style={{fontSize: '18px', marginLeft: '2px'}}>BYN</span>
              </div>
              <div style=
                {{display: 'flex', alignItems: 'baseline', height: '22px'}}
              >
                <span style={{fontSize: '15px'}}>
                  <h5>Вес:</h5>
                </span>
                <span style={{fontSize: '20px', marginLeft: '3px'}}>
                  {dish.weight}
                </span>
              </div>
              <div style=
                {{display: 'flex', alignItems: 'baseline', height: '22px'}}
              >
                <span style={{fontSize: '15px'}}>
                  <h5>Калории:</h5>
                </span>
                <span style={{fontSize: '20px', marginLeft: '3px'}}>
                  {dish.calories}
                </span>
              </div>
            </div>

            <br/>

            <div style={{
              display: 'flex',
              justifyContent: 'flex-start'
            }}
            >
              <ShowIngridients
                ingredients={dish.ingredients}
              />
            </div>
          </Col>
          <Col>
            <Button
              variant='outline-warning'
              onClick={() => deleteDish(dish.id)}
              style={{margin: '20px', marginLeft: '-4px'}}
            >
                Удалить
            </Button>
          </Col>
        </Row>
      </div>
    )
  })


  return (
    <>
      <div>
        {arrayDishes}
      </div>
    </>
  )
}

export default AdminDishes
