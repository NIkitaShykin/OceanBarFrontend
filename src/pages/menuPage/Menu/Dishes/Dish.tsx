import { useState } from "react"
import ShiftingDish from './ShiftingDish'
import CompletedDish from './CompletedDish'
import { useParams } from 'react-router-dom'
import foodData from '../DB/foodData'
import { useSelector } from 'react-redux'
// import { AppStoreType } from "../../../../bll/store";
import MaybeIntresting from '../../../../components/maybeIntresting/maybeIntresting'

import {AppStoreType} from "../../../../bll/store";


function Dish() {

  const token = useParams<{ token: string }>()

  // @ts-ignore
  const currentDish = foodData[3].find((el) => el.id == token.token)

// -------------new structur ingridients-----------------------------------
// const allDishes=useSelector<AppStoreType>(state=>state.dishes)

//@ts-ignore
// const currentDish = allDishes.find((el) => el.id == token.token)

console.log(currentDish);

//@ts-ignore
const [ingredients, setIngredients] = useState<Object>(currentDish.ingredients);


const updatedDish = { ...currentDish, ingredients }

const updateIngredients = (updIngridients: any) => {
  setIngredients(updIngridients)
}
  
// -----------------------------------------------------------------------

  
  
  // const [ingredients, setIngredients] = useState<Object>(currentDish.ingredients);
  const [dishСhangeStatus, setDishСhangeStatus] = useState<boolean>(false);

  // @ts-ignore
  // const updatedDish = { ...currentDish, ingredients }
     
  // const updateIngredients = (updIngridients: any) => {
  //   setIngredients(updIngridients)
  // }

  const changeStatus = () => {
    setDishСhangeStatus(!dishСhangeStatus)
  }

    return (
    <div>

      {dishСhangeStatus
         ? 
        <ShiftingDish
          dishisChanged={changeStatus}
          // currentDish={updatedDish}
          updateIngredients={updateIngredients}
        //   // --------------new structur ingridients-----------------------------
          currentDish ={updatedDish} 
        //   // updateIngredients2={updateIngredients2}
        //   // --------------new structur ingridients-----------------------------
        />
        :
        <CompletedDish
          dishisChanged={changeStatus}
          currentDish={updatedDish}
           // --------------new structur ingridients-----------------------------
          //  currentDish2 ={updatedDish2} 
           // --------------new structur ingridients-----------------------------
          />
        }

      {!dishСhangeStatus
        ?
        <div>
            <MaybeIntresting/>         
        </div>
        : <div style={{marginTop:"100px"}}></div>
      }
      </div>
  )
}

export default Dish;




