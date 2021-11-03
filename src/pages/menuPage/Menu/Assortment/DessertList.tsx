import React from 'react'
import {Row} from 'react-bootstrap'

import ListItem from './ListItem'
import {useAppSelector} from '../../../../redux/hooks'


const DessertList = () => {
  const allDishes = useAppSelector<any>((state) => state.dish)
  // @ts-ignores
  const desertDishes = allDishes.filter((dish) => {
    return dish.dishCategory=='Десерты'
  })

  return (
    <>
      <Row >
        <ListItem data={desertDishes} />
      </Row>
    </>
  )
}

export default DessertList


