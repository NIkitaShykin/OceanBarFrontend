import React from 'react';
import {Col, Container, Row } from 'react-bootstrap';
import { HashRouter } from "react-router-dom";
import MenuHeader from "./MenuHeader";
import MenusRoutes from "./MenuRoutes";




function Menu() {

  return (
    <div>
      <Container>
        <Row>
          <Col xs={12} className="justify-content-md-center">
            <h1>Меню</h1>
          </Col>
        </Row>
        <HashRouter>
          <MenuHeader/>
          <MenusRoutes />
        </HashRouter>
      </Container>
    </div>
  );
}

export default Menu;
