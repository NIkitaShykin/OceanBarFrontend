import React from 'react'
import {Row, Col} from 'react-bootstrap'
import SliderGallery from './SliderGallery'
import { useAppSelector } from '../../../redux/hooks'


const Slider = () => {

 
  const allDishes = useAppSelector<any>(state => state.dish)
  




  return (
    <>
<<<<<<< HEAD
      {/* <div
         style={{width: '65%', borderColor: '#ff9e05',
         borderStyle: "solid", padding: "1px 5px 20px 25px",
         margin:"50px auto" }}
         > */}
      <br/><br/>
      <Row >
        <Col> <h2> Блюдо дня </h2> </Col>
      </Row>
      <Row className='justify-content-md-center'>
        <Col xs lg='1'></Col>
        <Col>
          <SliderGallery/>
        </Col>
        <Col xs lg='1'></Col>
      </Row>
      <br/><br/><br/><br/>
=======
          <br/><br/>
          <Row  >
            <Col> <h2> Предложение недели </h2> </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="1"></Col>
              <Col>
              { allDishes.length>10 ? <SliderGallery/> : null }
              </Col>
            <Col xs lg="1"></Col>
          </Row> 
          <br/><br/><br/><br/>      
>>>>>>> sprint_4
    </>

  )
}

export default Slider
