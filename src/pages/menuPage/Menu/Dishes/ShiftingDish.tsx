import { useState } from 'react'
import './Dish.scss'
import DishIngridients from './DishIngridients'
import { Row, Col, Button, Card } from 'react-bootstrap'
import { IngredientType } from '../../../../redux/reducers/dishesReducer'
import { IngredientsType } from '../../../../redux/reducers/dishesReducer'
import { DishType } from '../../../../redux/reducers/dishesReducer'

type PropsType = {
  changeStatus?: () => void
  currentDish: DishType
  updIngredients?: (any) => void
}


function ShiftingDish(props: PropsType) {
  const [ingredients, setIngredients] = useState<IngredientsType>(
    props.currentDish?.ingredients
  )

  let disableIngredientAccept = false
  const minAmountIngredient = 1

  const addedIngredients = ingredients.filter((el) => {
    return el.isAdded == true
  })

  if (addedIngredients.length > minAmountIngredient) {
    disableIngredientAccept = false
  } else {
    disableIngredientAccept = true
  }

  const updateIngridient = (updIngredients: IngredientsType) => {
    props.updIngredients(updIngredients)
    setIngredients(updIngredients)
  }

  const finishSifting = () => {
    props.changeStatus()
  }

  return (
    <>
      <div className={'title-dish'}>
        <h1>{props.currentDish.name}</h1>
      </div>
      <Row>
        <Col md={8} lg={8}>
        <div
            key={props.currentDish.id}
            style={{
                height: '100%', width: '100%',
                backgroundImage: `url(${props.currentDish.imageURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              } }
          />
          {/* <img
            className={'image'}
            style={{ width: '100%', height: 'auto' }}
            // src={props.currentDish.image}
            src={"https://img.poehalisnami.by/static/countries/c84/small/84_637145235972434334.jpg"}
            alt='dish image'
          /> */}
        </Col>
        <Col md={4} lg={4}>
          <div className={'ingredients'}>
            <div className={'changing-shifting'}>
              <span className={'composition'}>Состав</span>
            </div>
            <br /><br /><br />
            <DishIngridients
              setIngredient={updateIngridient}
              ingredients={ingredients}
            />
            <button
              className={'order-btn-ingredients'}
              onClick={finishSifting}
              disabled={disableIngredientAccept}
            >
              Готово
            </button>
            <br />  <br />  <br />
            <span>
              <h5>Вес: {props.currentDish?.weight}</h5>
            </span>
            <span>
              <h5>Калории: {props.currentDish?.calories}</h5>
            </span>
            <div className='line-dish'></div>
            <br />
            <div style={{ display: "flex", alignItems: "baseline" }}>
              <span style={{ fontSize: "15px" }}><h5>Стоимость:</h5></span>
              <span style={{ fontSize: "20px", marginLeft: "3px" }}>{props.currentDish?.price}</span>
              <span style={{ fontSize: "18px", marginLeft: "2px" }}>BYN</span>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default ShiftingDish
