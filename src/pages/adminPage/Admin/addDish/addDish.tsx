import {useState} from 'react'
import {ApiAdmin} from '../../../../api/ApiAdmin'
import {orderedToast} from '../../../../components/OrderToast/OrderedToast'
import {DishType} from './../../../../common/types/dishesType'
import NewDish from './newDish'

const AddDish = () => {
  const [clearForm, setClearForm]=useState<boolean>(false)

  const handleNewDishData=(newDish:DishType)=>{
    ApiAdmin.setNewDish(newDish)
      .then((res)=>{
        // @ts-ignore
        if (res.data.error) {
          orderedToast(`Ошибка добавления блюда`)
        } else if (res.status=200) {
          orderedToast(`Блюдо добавлено`)
          setClearForm(true)
        } else {
          (console.log(res)
          )
        }
      })
  }

  return (
    <div>
      <h3>заполните поля:</h3>
      <NewDish
        handleNewDishData={handleNewDishData }
        setClearForm={setClearForm}
        clearForm={clearForm}
      />
    </div>

  )
}

export default AddDish
