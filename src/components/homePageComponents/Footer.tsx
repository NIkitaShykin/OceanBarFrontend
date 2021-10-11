/* eslint-disable max-len */
import React from 'react'

import {Container, Row, Col, Image} from 'react-bootstrap'

const Footer = () => {
  return (
    <Container fluid style={{backgroundColor: '#1e3d59', color: '#f5f0e1', padding: '20px 60px', fontSize: '14px'}}>
      <Row style={{display: 'flex'}}>
        <Col style={{width: '50%'}}>
          <Container style={{display: 'flex', flexDirection: 'column'}}>
            <Row style={{fontWeight: 'bold', fontSize: '18px', color: '#ff6e40', marginBottom: '10px'}}>
              <Image src='../logo.png' />
              <span>OceanBar</span>
            </Row>
            <Row style={{display: 'flex'}}>
              <Col style={{display: 'flex', flexDirection: 'column'}}>
                <span>Меню</span>
                <span>Забронировать стол</span>
                <span>Оформить заказ</span>
                <span>Корзина</span>
                <span>Профиль</span>
              </Col>
              <Col style={{display: 'flex', flexDirection: 'column', marginLeft: '25px'}}>
                <span>Условия пользования</span>
                <span>Политика конфиденциальности</span>
                <span>Политика cookies</span>
              </Col>
            </Row>
          </Container>

          <Container style={{fontSize: '10px', marginTop: '20px'}}>
            <Row>
              <span>© All rights reserved | OceanBar 2021</span>
            </Row>
          </Container>
        </Col>

        <Col style={{width: '50%'}}>
          <Container style={{display: 'flex', flexDirection: 'column'}}>
            <Row style={{fontWeight: 'bold', fontSize: '18px', color: '#ff6e40', marginBottom: '10px'}}>
              Мы в социальных сетях
            </Row>
            <Row style={{display: 'flex'}}>
              <Col style={{display: 'flex', flexDirection: 'column'}}>
                <span>Facebook</span>
                <span>Instagram</span>
                <span>VK</span>
              </Col>
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  )
}

export default Footer
