import React from 'react'
import {Col, Container, Row, Nav} from 'react-bootstrap'
import {NavLink} from 'react-router-dom'
import {PATH} from './MenuRoutes'
import './Menu.scss'  

 
const MenuHeader = () => {
  return (
    <Container>
      <Nav className="justify-content-start" activeKey="/home">
      <Row 
      // className='justify-content-md-start'
      >
        <Col xs={"auto"}>
          <NavLink
            className={'menuLinkStyle'}
            activeClassName={'menuActiveLink'}
            to={PATH.PLATO}>
            <h5>Плато</h5>
          </NavLink>
        </Col>
        <Col xs={"auto"}>
          <NavLink
            className={'menuLinkStyle'}
            activeClassName={'menuActiveLink'}

            to={PATH.SOUP}>
            <h5>Супы</h5>
          </NavLink>
        </Col>
        <Col xs={"auto"}>
          <NavLink
            className={'menuLinkStyle'}
            activeClassName={'menuActiveLink'}
            to={PATH.SALAD}>
            <h5>Салаты</h5>
          </NavLink>
        </Col>

        <Col xs={"auto"}>
          <NavLink
            className={'menuLinkStyle'}
            activeClassName={'menuActiveLink'}
            to={PATH.OYSTERS}>
            <h5>Запеченные устрицы</h5>
          </NavLink>
        </Col>

        <Col xs={"auto"}>
          <NavLink 
            className={'menuLinkStyle'}
            activeClassName={'menuActiveLink'}
            to={PATH.DESSERT}>
            <h5>Дессерты</h5>
          </NavLink>
        </Col>

      </Row>
      </Nav>
      <hr style={{height: "2px", borderWidth:"0", color: "gray", backgroundColor:"gray"}}  />
    </Container>
  )
}

export default MenuHeader
