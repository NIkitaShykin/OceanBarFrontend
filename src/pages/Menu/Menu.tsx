import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { HashRouter } from "react-router-dom";
import MenuHeader from "./MenuHeader";
import MenusRoutes from "./MenuRoutes";




function Menu() {

  return (
      <Container>
        <Row>
          <Col xs={12} className="justify-content-md-center">
            <h1 className="menu-text-main-page" style={{padding:"20px"}}>Меню</h1>
          </Col>
        </Row>
        <HashRouter>
          <MenuHeader/>
          <MenusRoutes />
        </HashRouter>
      </Container>
  );
}

export default Menu;
