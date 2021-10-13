/* eslint-disable max-len */
import React from 'react'
import {Button} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPhoneAlt, faClock} from '@fortawesome/free-solid-svg-icons'

import './ContactsCard.scss'

import GoogleApiWrapper from '../CustomMap/CustomMap'

const ContactsCard = () => {
  return (
    <div className='contacts-card'>
      <div className='container'>
        <div className='col'>
          <div className='title'>Контакты</div>
          <div>
            <div className='item'>
              <span>ул. Революционная д. 17, Минск, Беларусь</span>
            </div>
            <div className='item'>
              <FontAwesomeIcon
                icon={faPhoneAlt}
                className='fas fa-phone-alt'
                size='1x'
                color='#ff9e05'
              />
              <span> </span>
              <span><b>+375 29 123 45 67</b></span>
            </div>
            <div className='item'>
              <FontAwesomeIcon
                icon={faClock}
                className='far fa-clock'
                size='1x'
                color='#ff9e05'
              />
              <span> </span>
              <span>Пн-Вс 08:00 - 23:00</span>
            </div>
            <Button variant='secondary' style={{color: '#ff9e05', padding: '5px 20px', marginTop: '25px', border: '1px solid black', borderRadius: '5px'}}>
              Забронировать стол
            </Button>
          </div>
        </div>
        <div className='col'>
          <div className='map'>
            <GoogleApiWrapper lat={53.9013128} lng={27.5476703} width='30em' height='12em' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsCard
