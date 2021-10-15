import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {BrowserRouter as Router} from 'react-router-dom'
import MenuHeader from './MenuHeader'
import MenuRoutes from './MenuRoutes'


const Menu = () => {
  return (
    <Container>
      <Row>
        <Col xs={12}
          // className="justify-content-md-center"
        >
          <h1 style={{padding: '20px', color: '#ff9e05'}}>
               Меню
          </h1>
        </Col>
      </Row>
      
        <MenuHeader/>
        {/* <MenuRoutes /> */}
     
    </Container>
  )
}

export default Menu
