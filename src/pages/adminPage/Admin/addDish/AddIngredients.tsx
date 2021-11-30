import {Form} from 'react-bootstrap'

type PropsType = {

  ingredients: Array<string>
  inputDishIngredients:(e:any, id: number)=>void
}

const AddIngredients = (props:PropsType) => {

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
