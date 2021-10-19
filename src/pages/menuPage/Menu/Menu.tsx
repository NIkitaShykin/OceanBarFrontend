import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import MenuHeader from './MenuHeader'


const Menu: React.FC = () => {
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
    </Container>
  )
}

export default Menu
