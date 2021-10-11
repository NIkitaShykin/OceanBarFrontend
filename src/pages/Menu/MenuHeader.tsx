import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {PATH} from './MenuRoutes'


const MenuHeader = () => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={3}>
          <NavLink to={PATH.BREAKFAST_MENU}>
            <h3>Завтраки</h3>
          </NavLink>
        </Col>
        <Col xs={3}>
          <NavLink to={PATH.MAIN_MENU}>
            <h3>Основное меню</h3>
          </NavLink>
        </Col>
        <Col xs={3}>
          <NavLink to={PATH.BAR_MENU}>
            <h3>Меню бара</h3>
          </NavLink>
        </Col>
        <Col xs={3}>
          <NavLink to={PATH.CATCHWEEK_MENU}>
            <h3>Улов недели</h3>
          </NavLink>
        </Col>
      </Row>
    </Container>
  )
}

export default MenuHeader
