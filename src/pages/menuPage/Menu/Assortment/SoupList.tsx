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
    </>
  )
}

export default SoupList


