<<<<<<< HEAD
import React from 'react'
import {Row} from 'react-bootstrap'
import ListItem from './ListItem'
import foodData from '../DB/foodData'


const PlatoList = () => {
  return (
    <>
      <Row>
        <ListItem data={foodData[0]} />
      </Row>
=======
import {Row} from 'react-bootstrap'
import ListItem from './ListItem'
import { useAppSelector } from '../../../../redux/hooks'


function PlatoList() {

  const allDishes = useAppSelector<any>(state => state.dish)
  //@ts-ignores
  const platoDishes = allDishes.filter(dish => {
    return dish.dishCategory=="Плато"
  })

  return (
    <>
        <Row>
          <ListItem data={platoDishes} />
        </Row>
>>>>>>> sprint_4
    </>

  )
}

export default PlatoList
