import {useState} from 'react'
import {Row, Col} from 'react-bootstrap'

import DishIngridients from './DishIngridients'

import {
  DishType,
  DishInCart,
  IngredientType,
  IngredientsType
} from '../../../../common/types/dishesType'

import './Dish.scss'

type PropsType = {
  changeStatus: () => void
  currentDish: DishType | DishInCart
  updateIngredients: (arg0: any) => void
  handleClose?: () => void
}

const ShiftingDish = ({
  changeStatus,
  currentDish,
  updateIngredients,
  handleClose,
}: PropsType) => {
  const [ingredients, setIngredients] = useState<IngredientType[]>(
    currentDish?.ingredients
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
    updateIngredients(updIngredients)
    setIngredients(updIngredients)
  }

  const finishSifting = () => {
    if (handleClose) {
      handleClose()
    } else changeStatus()
  }

  return (
    <>
      <div className={'title-dish'}>
        <h1>{currentDish.name}</h1>
      </div>
      <Row>
        <Col xs={'auto'} sm={6} md={8} lg={8}>
          <div
            style={{
              height: '100%',
              width: '100%',
              backgroundImage: `url(${currentDish.imageURL})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
        </Col>
        <Col xs={'auto'} sm={6} md={4} lg={4}>
          <div className={'ingredients'}>
            <div className={'changing-shifting'}>
              <span className={'composition'}>Состав</span>
            </div>
            <br />
            <br />
            <br />
            <DishIngridients
              setIngredient={updateIngridient}
              ingredients={ingredients}
            />
            {
              disableIngredientAccept &&
              <span className='error'>
                Блюдо должно содержать не менее двух ингредиентов :)
              </span>
            }
            <button
              className='btn btn-warning mt-4 w-50'
              onClick={finishSifting}
              disabled={disableIngredientAccept}>
              Готово
            </button>
            <br /> <br /> <br />
            <span>
              <h5>Вес: {currentDish?.weight}</h5>
            </span>
            <span>
              <h5>Калории: {currentDish?.calories}</h5>
            </span>
            <div className='line-dish'></div>
            <br />
            <div style={{display: 'flex', alignItems: 'baseline'}}>
              <span style={{fontSize: '15px'}}>
                <h5>Стоимость:</h5>
              </span>
              <span style={{fontSize: '20px', marginLeft: '3px'}}>
                {currentDish?.price}
              </span>
              <span style={{fontSize: '18px', marginLeft: '2px'}}>BYN</span>
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default ShiftingDish
