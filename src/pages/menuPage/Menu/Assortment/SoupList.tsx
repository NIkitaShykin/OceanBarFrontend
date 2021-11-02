<<<<<<< HEAD
import React from 'react'
import foodData from '../DB/foodData'
import {Row} from 'react-bootstrap'
import ListItem from './ListItem'


const SoupList = () => {
  return (
    <>
      <Row >
        <ListItem data={foodData[1]} />
      </Row>
=======
import {Row} from 'react-bootstrap'
import ListItem from './ListItem'
import { useAppSelector } from '../../../../redux/hooks'


function SoupList() {

  const allDishes = useAppSelector<any>(state => state.dish)
  //@ts-ignores
  const soupDishes = allDishes.filter(dish => {
    return dish.dishCategory=="Супы"
  })

  return (
    <>
        <Row >
              <ListItem data={soupDishes} />
         </Row>
>>>>>>> sprint_4
    </>
  )
}

export default SoupList


