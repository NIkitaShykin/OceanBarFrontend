import React from 'react'
import {Row, Col } from 'react-bootstrap'
import SliderGallery from './SliderGallery'


const Slider = () => {
  return (
    <>
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
          <br/><br/><br/><br/>      
    </>

  )
}

export default Slider
