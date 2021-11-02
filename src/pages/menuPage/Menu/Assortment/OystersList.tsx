<<<<<<< HEAD
import React from 'react'
import foodData from '../DB/foodData'
import {Row} from 'react-bootstrap'
import ListItem from './ListItem'
=======
import {Row} from 'react-bootstrap'
import ListItem from './ListItem'
import { useAppSelector } from '../../../../redux/hooks'

function OystersList() {

  
const allDishes = useAppSelector<any>(state => state.dish)
//@ts-ignores
const oystersDishes = allDishes.filter(dish => {
  return dish.dishCategory=="Запеченные устрицы"
})

>>>>>>> sprint_4

const OystersList = () => {
  return (
    <>
<<<<<<< HEAD
      <Row>
        <ListItem data={foodData[3]} />
      </Row>
=======
        <Row>
        <ListItem data={oystersDishes} />
        </Row>
>>>>>>> sprint_4
    </>
  )
}

export default OystersList
