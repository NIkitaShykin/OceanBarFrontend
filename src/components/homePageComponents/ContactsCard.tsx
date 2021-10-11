/* eslint-disable max-len */
import React from 'react'
import {Container, Row, Col, Button} from 'react-bootstrap'

import GoogleApiWrapper from './CustomMap'

const ContactsCard = () => {
  return (
    <Container fluid style={{backgroundColor: '#eee', padding: '20px 60px', fontSize: '14px'}}>
      <Row style={{display: 'flex'}}>
        <Col style={{width: '50%', display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <Row style={{fontWeight: 'bold', fontSize: '18px', color: '#ff9e05', marginBottom: '25px'}}>
            <span>Контакты</span>
          </Row>
          <span>ул. Революционная д. 17, Минск, Беларусь</span>
          <div>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='#ff9e05' className='bi bi-telephone' viewBox='0 0 16 16'>
              <path d='M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z'/>
            </svg>
            <span style={{paddingLeft: '10px', fontWeight: 'bold'}}>+375 29 123 45 67</span>
          </div>
          <div>
            <svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' fill='#ff9e05' className='bi bi-clock' viewBox='0 0 16 16'>
              <path d='M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z'/>
              <path d='M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z'/>
            </svg>
            <span style={{paddingLeft: '10px'}}>Пн-Вс 08:00 - 23:00</span>
          </div>
          <Button variant='secondary' style={{color: '#ff9e05', padding: '5px 20px', marginTop: '25px', border: '1px solid black', borderRadius: '5px'}}>
            Забронировать стол
          </Button>
        </Col>

        <Col>
          <div style={{position: 'relative', width: '30em', height: '15em'}}>
            <GoogleApiWrapper lat={53.9013128} lng={27.5476703} width='30em' height='15em' />
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default ContactsCard
