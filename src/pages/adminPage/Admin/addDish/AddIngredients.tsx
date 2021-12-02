import {Form} from 'react-bootstrap'

type PropsType = {
  ingredients: Array<string>
  inputDishIngredients:(e:any, id: number)=>void
  deleteDishIngredients:(id: number)=>void
}

const AddIngredients = (props:PropsType) => {
  const ingridientsItem = props.ingredients.map((ingredient, i) => {
    return (
      <div key={i} style={{display: 'flex'}}>
        <Form.Control
          style={{width: '250px', height: '30px', marginBottom: '5px'}}
          id='Ingredients'
          type='text'
          placeholder={`ингредиент ${i+1}`}
          value={ingredient}
          onChange={(e) => props.inputDishIngredients(e, i)}
        />
        <span
          style={{marginTop: '4px', opacity: '0.4', cursor: 'pointer'}}
          onClick={()=>props.deleteDishIngredients(i)}
        >
           &#10060;
        </span>
      </div>
    )
  })

  return <div>{ingridientsItem}</div>
}

export default AddIngredients
