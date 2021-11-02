<<<<<<< HEAD
/* eslint-disable require-jsdoc */
import React, {useState} from 'react'
import ShiftingDish from './ShiftingDish'
import CompletedDish from './CompletedDish'
import {useParams} from 'react-router-dom'
import foodData from '../DB/foodData'
// eslint-disable-next-line max-len
import MaybeIntresting from '../../../../components/maybeIntresting/maybeIntresting'
=======
import { useState, useEffect } from "react"
import ShiftingDish from './ShiftingDish'
import CompletedDish from './CompletedDish'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../../../redux/hooks'
import MaybeIntresting from '../../../../components/maybeIntresting/maybeIntresting'
import { IngredientType } from '../../../../redux/reducers/dishesReducer'
import { IngredientsType } from '../../../../redux/reducers/dishesReducer'
import { DishType } from '../../../../redux/reducers/dishesReducer'
>>>>>>> sprint_4


function Dish() {
  const token = useParams<{ token: string }>()
<<<<<<< HEAD

  // @ts-ignore
  const currentDish = foodData[3].find((el) => el.id == token.token)

  // -------------new structur ingridients-----------------------------------
  // const allDishes=useSelector<AppStoreType>(state=>state.dishes)

  // @ts-ignore
  // const currentDish = allDishes.find((el) => el.id == token.token)

  console.log(currentDish)

  // @ts-ignore
  // eslint-disable-next-line max-len
  const [ingredients, setIngredients] = useState<Object>(currentDish.ingredients)


  const updatedDish = {...currentDish, ingredients}

const updateIngredients = (updIngridients: any) => {
  setIngredients(updIngridients)
}

// -----------------------------------------------------------------------



  // const [ingredients, setIngredients] = useState<Object>(currentDish.ingredients);
  const [dishСhangeStatus, setDishСhangeStatus] = useState<boolean>(false)
=======
  const allDishes = useAppSelector<any>(state => state.dish)
  //@ts-ignore
  const currentDish = allDishes.find((el) => el.id == token.token)
  
  const [dishСhangeStatus, setDishСhangeStatus] = useState<boolean>(false);
  const [ingredients, setIngredients] = useState<IngredientsType>(currentDish.ingredients);
  

  useEffect(() => {
     setIngredients(currentDish.ingredients)
       }, [currentDish])
>>>>>>> sprint_4

  const updatedDish = { ...currentDish, ingredients }

  const updateIngredients = (updIngridients: IngredientsType) => {
    setIngredients(updIngridients)
   }

  const changeStatus = () => {
    setDishСhangeStatus(!dishСhangeStatus)
  }

  return (
    <div>
      {dishСhangeStatus
        ?
        <ShiftingDish
<<<<<<< HEAD
          dishisChanged={changeStatus}
          // currentDish={updatedDish}
          updateIngredients={updateIngredients}
        //   // --------------new structur ingridients-----------------------------
          currentDish ={updatedDish}
        //   // updateIngredients2={updateIngredients2}
        //   // --------------new structur ingridients-------------------------
        /> :
=======
          changeStatus={changeStatus}
          currentDish={updatedDish}
          updIngredients={updateIngredients}
        />
        :
>>>>>>> sprint_4
        <CompletedDish
          changeStatus={changeStatus}
          currentDish={updatedDish}
        />
      }

      {!dishСhangeStatus ?
        <div>
          <MaybeIntresting />
        </div>
        : <div style={{ marginTop: "100px" }}></div>
      }
    </div>
  )
}

export default Dish


