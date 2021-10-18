import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {PATH} from './MenuRoutes'

// import style from './NavStyle.module.css';
// const linkStyle = {
//   color: '#adb3ad',
//   textDecoration:"none"
//   };


const MenuHeader = () => {
  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={2}>
          <NavLink
            className={'linkStyle'}
            activeClassName={'activeLink'}
            to={PATH.PLATO}>
            <h4 >Плато</h4>
          </NavLink>
        </Col>
        <Col xs={2}>
          <NavLink
            className={'linkStyle'}
            activeClassName={'activeLink'}
            to={PATH.SOUP}>
            <h4>Супы</h4>
          </NavLink>
        </Col>
        <Col xs={2}>
          <NavLink
            className={'linkStyle'}
            activeClassName={'activeLink'}
            to={PATH.SALAD}>
            <h4>Салаты</h4>
          </NavLink>
        </Col>

        <Col xs={3}>
          <NavLink
            className={'linkStyle'}
            activeClassName={'activeLink'}
            to={PATH.OYSTERS}>
            <h4 >Запеченные устрицы</h4>
          </NavLink>
        </Col>

        <Col xs={2}>
          <NavLink 
            className={'linkStyle'}
            activeClassName={'activeLink'}
            to={PATH.DESSERT}>
            <h4 >Дессерты</h4>
          </NavLink>
        </Col>

      </Row>
    </Container>
  )
}

export default MenuHeader
