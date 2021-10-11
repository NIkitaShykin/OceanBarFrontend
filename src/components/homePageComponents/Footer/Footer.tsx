/* eslint-disable max-len */
import React from 'react'

import {Container, Row, Col, Image} from 'react-bootstrap'

const Footer = () => {
  return (
    <Container fluid style={{backgroundColor: '#000', color: 'rgba(255, 255, 255, 0.55)', padding: '20px 60px', fontSize: '14px'}}>
      <Row style={{display: 'flex'}}>
        <Col style={{width: '50%'}}>
          <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', padding: '0'}}>
            <Row style={{fontWeight: 'bold', fontSize: '18px', color: '#ff9e05', marginBottom: '10px', display: 'flex'}}>
              <Col>
                <Image src='seafood.png' alt='logo' width={25} height={25} />
              </Col>
              <Col style={{padding: '0'}}>
                <span style={{fontWeight: 'bold', fontSize: '18px', color: '#ff9e05', marginBottom: '10px', display: 'flex'}}>OceanBar</span>
              </Col>
            </Row>
            <Row style={{display: 'flex', whiteSpace: 'nowrap'}}>
              <Col style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
                <span>Меню</span>
                <span>Забронировать стол</span>
                <span>Оформить заказ</span>
                <span>Корзина</span>
                <span>Профиль</span>
              </Col>
              <Col style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginLeft: '30px', textAlign: 'left'}}>
                <span>Условия пользования</span>
                <span>Политика конфиденциальности</span>
                <span>Политика cookies</span>
              </Col>
            </Row>
            <Row style={{fontSize: '10px', marginTop: '20px'}}>
              <span>© All rights reserved | OceanBar 2021</span>
            </Row>
          </Container>
        </Col>

        <Col style={{width: '50%'}}>
          <Container style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <Row style={{fontWeight: 'bold', fontSize: '18px', color: '#ff9e05', marginBottom: '10px'}}>
              <span>Мы в социальных сетях</span>
            </Row>
            <Row style={{display: 'flex'}}>
              <Col style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
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
