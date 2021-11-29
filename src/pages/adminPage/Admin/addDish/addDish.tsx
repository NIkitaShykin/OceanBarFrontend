// import {useState} from 'react'
import {ApiAdmin} from '../../../../api/ApiAdmin'
import NewDish from './newDish'


const AddDish = () => {
  // const [isComplete, setIsComplete] = useState<string>('')
  // console.log(isComplete)

  const handleNewDishData=(newDish:any)=>{
    ApiAdmin.setNewDish(newDish)
      .then((res)=>console.log(res))
  }

  const handleNewDishImgFile=(newDishImgFile:any)=>{
    ApiAdmin.getNewDishImgFileUrl(newDishImgFile)
      .then((res)=>console.log(res))
  }


  return (
    <div>
      <h3>заполните поля:</h3>
      <NewDish
        handleNewDishData={handleNewDishData }
        handleNewDishImgFile={handleNewDishImgFile }
      />
    </div>

  )
}

export default AddDish
