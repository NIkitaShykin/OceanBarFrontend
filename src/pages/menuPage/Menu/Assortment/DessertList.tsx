/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable require-jsdoc */
import foodData from '../DB/foodData'
import {Row} from 'react-bootstrap'
import ListItem from './ListItem'


function DessertList(): JSX.Element {
  return (
    <>
      <Row >
        <ListItem data={foodData[4]} />
      </Row>
    </>
  )
}

export default DessertList



