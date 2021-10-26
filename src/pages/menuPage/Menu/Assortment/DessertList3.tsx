/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */

import {useSelector} from 'react-redux'
import {AppStoreType} from "../../../../bll/store";
import {Row} from 'react-bootstrap'
import ListItem from './ListItem'

const DessertList2 = () => {

  // const foodData=useSelector<AppStoreType>(state=>state.dishes)
  
  
  // --------select specific category of dishes--------- 
  //@ts-ignore
  const desertDishes = foodData.filter(dish => {
    return dish.dishCategory=="Дессерты"
  })
  // ---------------------------------------------------

  // --------change ingredients structure id dishes------ 
              
  //@ts-ignore
 const newdesertDishes = desertDishes.map(dish => {

               let myObj:any=[]

           // @ts-ignore
           dish.ingredients.split(";").forEach(ingr => {
          // @ts-ignore
          myObj.push({name:ingr,isAdded:true}) 
          } )   
         return ({...dish, ingredients:myObj })
  })
  // --------------------------------------------------
   
  // @ts-ignore
  const test = newdesertDishes[0].ingredients.map( el => { 
       if (el.isAdded) return <div>{el.name}</div>
      })
// ------------------------------------------------------
      


   return (
        <>
          <Row >
            десерты
            {test}
            {/* <ListItem data={desertDishes} /> */}
          </Row>
        </>
      )
    // }


}

export default DessertList2




