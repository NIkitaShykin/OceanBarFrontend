import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
import AdminHeader from './AdminHeader'
import ScrollToTop from '../../../components/scrollToTop/ScrollToTop'


const Menu: React.FC = () => (
  <Container>
    <ScrollToTop />
    <Row>
      <Col xs={6} className='justify-content-md-start'>
        <h2 style={{padding: '20px', color: 'black'}}>
            Панель администратора
        </h2>
      </Col>
      <Col xs={9}>
      </Col>
    </Row>
    <AdminHeader/>
  </Container>
)

export default Menu
