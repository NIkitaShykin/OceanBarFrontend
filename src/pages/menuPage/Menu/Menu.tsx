import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import MenuHeader from './MenuHeader'


const Menu: React.FC = () => {
  return (
    <Container>
      <Row>
        <Col xs={3} className="justify-content-md-start">
          <h2 style={{padding: '20px', color: 'black'}}>
             Меню
          </h2>
        </Col>
        <Col xs={9}>
        </Col>
      </Row>
      <MenuHeader/>
    </Container>
  )
}

export default Menu
