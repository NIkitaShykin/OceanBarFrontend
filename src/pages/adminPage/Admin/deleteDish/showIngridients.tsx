// import {useState} from 'react'
// import {Col, Row} from 'react-bootstrap'

import {IngredientType} from '../../../../common/types/dishesType'

type PropsType = {
  // setIngredient: (arg0: any) => void
  ingredients: Array<IngredientType>
}

const ShowIngridients = (props:PropsType) => {
  // const [ingredients, setIngredients] = useState<Array<IngredientType>>(
  //   props.ingredients
  // )

  // const toggleIngredient = (el: IngredientType, i: number) => {
  //   const elCopy = {...el}
  //   elCopy.isAdded = !el.isAdded
  //   const copyIngredients = [...ingredients]
  //   copyIngredients[i] = elCopy
  //   setIngredients(copyIngredients)
  //   props.setIngredient(copyIngredients)
  // }

  const ingridientsItem = props.ingredients.map((ingredient, i) => {
    return (
      <span
        key={i}
        style={{paddingRight: '13px'}}
      >
        {ingredient.name};
      </span>
    )
  })

  return (
    <div
      style={{
        textAlign: 'left',
        // display: 'flex',
        lineHeight: '15px',
      }}
    >
      {ingridientsItem}
    </div>)
}

export default ShowIngridients
