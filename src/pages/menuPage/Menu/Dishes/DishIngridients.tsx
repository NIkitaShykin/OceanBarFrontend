import {useState} from 'react'
import {Col, Row} from 'react-bootstrap'

import {IngredientType} from '../../../../common/types/dishesType'

type PropsType = {
  setIngredient: (arg0: any) => void
  ingredients: Array<IngredientType>
}

const DishIngredients = (props: PropsType) => {
  const [ingredients, setIngredients] = useState<Array<IngredientType>>(
    props.ingredients
  )

  const toggleIngredient = (el: IngredientType, i: number) => {
    const elCopy = {...el}
    elCopy.isAdded = !el.isAdded
    const copyIngredients = [...ingredients]
    copyIngredients[i] = elCopy
    setIngredients(copyIngredients)
    props.setIngredient(copyIngredients)
  }

  const ingridientsItem = ingredients.map((ingredient, i) => {
    return (
      <>
        <Row key={`${i}`}>
          <Col xs={11}>
            <label style={{marginTop: '10px'}}>
              <input style={{marginRight: '10px'}}
                checked={!!ingredient.isAdded}
                type='checkbox' name='name'
                onChange={() => {
                  toggleIngredient(ingredient, i)
                }}
              />
              <span style={{lineHeight: '15px'}}>
                {ingredient.name}
              </span>
            </label>
          </Col>
          <Col xs={1}>
          </Col>
        </Row>
      </>
    )
  })

  return <>
    {ingridientsItem}
  </>
}

export default DishIngredients
