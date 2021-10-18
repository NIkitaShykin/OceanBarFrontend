import React from 'react'
import { Carousel, Row, Col, Card} from 'react-bootstrap'
// import data from '../../../pages/Menu/DB/foodData'
import SliderRouter from './SliderRoutes'
// import SliderRouter from '../../../pages/Menu/MenuRoutes'
import SliderGallery from './SliderGallery'

import {BrowserRouter as Router} from 'react-router-dom'


const Slider = () => {
  return (
    <>
      <Router>
        {/* <div 
         style={{width: '65%', borderColor: '#ff9e05',
         borderStyle: "solid", padding: "1px 5px 20px 25px",
         margin:"50px auto" }}
         > */}

          <br/><br/>
          <Row  >
            <Col> <h2> Блюдо дня </h2> </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="1"></Col>
              <Col>
                <SliderGallery/>
              </Col>
            <Col xs lg="1"></Col>
          </Row>
          
          <SliderRouter />

      </Router>
    </>

  )
}

export default Slider
