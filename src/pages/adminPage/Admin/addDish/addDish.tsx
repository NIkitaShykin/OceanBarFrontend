import {useState} from 'react'
import NewDish from './newDish'


const AddDish = () => {
  const [isComplete, setIsComplete] = useState<string>('')
  console.log(isComplete)

  const handleNewDishData=(newDish:any)=>{
    setIsComplete(newDish)
  }


  return (
    <div>
      <h3>заполните поля:</h3>
      <NewDish handleNewDishData={handleNewDishData}/>
    </div>

  )
}

export default AddDish
