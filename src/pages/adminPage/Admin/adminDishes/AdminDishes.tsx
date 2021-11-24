import {Button, Col, Row} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

// import DishItem from './DishItem'
import {useAppSelector} from '../../../../redux/hooks'

const AdminDishes = () => {
  const allDishes = useAppSelector((state) => state.dish.dishes)

  // const dishIngredients=props.data

  const arrayDishes = allDishes.map((dish) => {
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
                    true ?
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
            <Row>
              <h3>{dish.name}</h3>
              <Col>
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
                <ul>
                  <li>Ингридиенты</li>
                  <li>Ингридиенты</li>
                  <li>Ингридиенты</li>
                  <li>Ингридиенты</li>
                  <li>Ингридиенты</li>
                </ul>
              </Col>

              {/* console.log(dish.ingredients) */}
            </Row>
          </Col>


          <Col>
            <Button
              variant='outline-warning'
              // onClick={() => orderDish(dish)}
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
    <>

      <div>
        {/* <Col className='row my-3'> */}
        {arrayDishes}
        {/* </Col> */}
      </div>

      {/* <DishItem data={allDishes} isIntresting={false} /> */}


    </>
  )
}

export default AdminDishes
