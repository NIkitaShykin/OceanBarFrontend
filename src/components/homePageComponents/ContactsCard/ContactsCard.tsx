import React from 'react'
import {Image, Nav} from 'react-bootstrap'

import CustomMap from '../CustomMap/CustomMap'

import './ContactsCard.scss'

const ContactsCard = () => {
  return (
    <>
      <div className='contacts-card'>
        <div className='container'>
          <div className='col'>
            <div className='title'>Контакты</div>
            <div className='contacts'>
              <div className='contact-item'>
                <Image
                  src='images/icons/location-icon.svg'
                  alt='address'
                  width={20}
                  height={20}
                />
                <span> ул. Революционная д. 17, Минск, Беларусь</span>
              </div>
              <div className='contact-item'>
                <Image
                  src='images/icons/phone-icon.svg'
                  alt='phone'
                  width={20}
                  height={20}
                />
                <span> +375 29 123 45 67</span>
              </div>
              <div className='contact-item'>
                <Image
                  src='images/icons/clock-icon.svg'
                  alt='timetable'
                  width={20}
                  height={20}
                />
                <span> Пн-Вс 08:00 - 23:00</span>
              </div>
            </div>
            <div className='socials'>
              <Nav>
                <Nav.Item>
                  <Nav.Link href='https://www.instagram.com/' target='_blank' style={{padding: 0, marginRight: '7px'}}>
                    <Image
                      src='images/socials/instagram.png'
                      alt='instagram'
                      width={30}
                      height={30}
                    />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='https://www.facebook.com/' target='_blank' style={{padding: 0}}>
                    <Image
                      src='images/socials/facebook.png'
                      alt='facebook'
                      width={30}
                      height={30}
                    />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>

          <div className='col'>
            <div className='title'>Наше приложение Ocean bar</div>
            <div className='description'>
              <span>
                позволяет забронировать стол,
                выбрать еду и оформить заказ в несколько касаний
              </span>
            </div>
            <div className='socials'>
              <Nav className='justify-content-flex-start'>
                <Nav.Item>
                  <Nav.Link href='https://play.google.com/store' target='_blank' style={{padding: 0}}>
                    <Image
                      src='images/socials/google-play.png'
                      alt='google-play'
                      width={146}
                      height={56}
                    />
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link href='https://www.apple.com/app-store/' target='_blank' style={{padding: 0}}>
                    <Image
                      src='images/socials/app-store.png'
                      alt='app-store'
                      width={146}
                      height={56}
                    />
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
          </div>
        </div>
      </div>

      <CustomMap mapState={{center: [53.901573, 27.549749], zoom: 16}} />
    </>
  )
}

export default ContactsCard
