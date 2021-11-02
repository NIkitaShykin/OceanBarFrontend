<<<<<<< HEAD
import React from 'react'
import foodData from '../DB/foodData'
import {Row} from 'react-bootstrap'
import ListItem from './ListItem'
=======
import {Row} from 'react-bootstrap'
import ListItem from './ListItem'
import { useAppSelector } from '../../../../redux/hooks'

function SaladList() {
  
  const allDishes = useAppSelector<any>(state => state.dish)
  //@ts-ignores
  const saladDishes = allDishes.filter(dish => {
    return dish.dishCategory=="Салаты"
  })

>>>>>>> sprint_4

const SaladList = () => {
  return (
    <>
<<<<<<< HEAD
      <Row>
        <ListItem data={foodData[2]} />
      </Row>
=======
        <Row>
          <ListItem data={saladDishes} />
        </Row>
>>>>>>> sprint_4
    </>
  )
}

export default SaladList
