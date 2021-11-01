import React from 'react'
import foodData from '../DB/foodData'
import {Row} from 'react-bootstrap'
import ListItem from './ListItem'

const OystersList = () => {
  return (
    <>
      <Row>
        <ListItem data={foodData[3]} />
      </Row>
    </>
  )
}

export default OystersList
