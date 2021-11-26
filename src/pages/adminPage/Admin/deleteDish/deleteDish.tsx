import {Button, Col, Row} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'

import ShowIngridients from './showIngridients'
import {useAppSelector} from '../../../../redux/hooks'

const AdminDishes = () => {
  const allDishes = useAppSelector((state) => state.dish.dishes)

  // const dishIngredients=props.data

  const arrayDishes = allDishes.map((dish) => {
    return (
      <div
        key={dish.id}
        style={{
          // position: 'relative',
          border: '1px solid black',
          margin: '10px'
        }}
      >

        <Row>

          <Col style={{margin: '20px'}}>
            <h3 style={{
              display: 'flex',
              textAlign: 'left'}}>
              {dish.name}</h3>
            <NavLink to={'/dishes/' + dish.id}>
              <div
                key={dish.id}
                style={{
                  height: '180px',
                  width: '80%',
                  backgroundImage: `url(${dish.imageURL})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                } }
              />
            </NavLink>
          </Col>

          <Col>
            <Row>
              <br/>
              <br/>
              <br/>
              <br/>
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
              <Col
              //  xs={'auto'} sm={6} md={4} lg={4}
              >
                <div className={'ingredients'}>
                  {/* <div className={'changing-shifting'}> */}
                  <span
                  // className={'composition'}
                  >Состав</span>
                  {/* </div> */}
                  <ShowIngridients
                  // setIngredient={updateIngridient}
                    ingredients={dish.ingredients}
                  />
                </div>
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
