import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
<<<<<<< refs/remotes/origin/page404
import {BrowserRouter as Router} from 'react-router-dom'
import MenuHeader from './MenuHeader'
import MenuRoutes from './MenuRoutes'


const Menu = () => {
=======
import MenuHeader from './MenuHeader'


const Menu: React.FC = () => {
>>>>>>> hashrouter bug fixed
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
<<<<<<< refs/remotes/origin/page404
      
        <MenuHeader/>
        {/* <MenuRoutes /> */}
     
=======
      <MenuHeader/>
>>>>>>> hashrouter bug fixed
    </Container>
  )
}

export default Menu
