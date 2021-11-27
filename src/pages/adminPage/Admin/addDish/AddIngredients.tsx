// import {useState} from 'react'
import {Form} from 'react-bootstrap'

// import {IngredientType} from '../../../../common/types/dishesType'

type PropsType = {
  // setIngredient: (arg0: any) => void
  ingredients: Array<string>
  inputDishIngredients:(e:any, id: number)=>void
}

const AddIngredients = (props:PropsType) => {
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
      <Form.Control
        key={i}
        style={{width: '250px', height: '30px', marginBottom: '5px'}}
        id='Ingredients'
        type='text'
        placeholder={`ингридиет ${i+1}`}
        value={ingredient}
        onChange={(e) => props.inputDishIngredients(e, i)}
      />
    )
  })

  return <div>{ingridientsItem}</div>
}

export default AddIngredients
