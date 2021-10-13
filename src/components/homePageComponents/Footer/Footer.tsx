/* eslint-disable max-len */
import React from 'react'

import {Image} from 'react-bootstrap'

import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='title'>
              <Image style={{marginRight: '10px'}} src='images/logo.png' alt='logo' width={25} height={25} />
              <span>OceanBar</span>
            </div>
            <div className='links'>
              <div className='items'>
                <span>Меню</span>
                <span>Забронировать стол</span>
                <span>Оформить заказ</span>
                <span>Корзина</span>
                <span>Профиль</span>
              </div>
              <div className='items'>
                <span>Условия пользования</span>
                <span>Политика конфиденциальности</span>
                <span>Политика cookies</span>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='title'>
              <span>Мы в социальных сетях</span>
            </div>
            <div className='links'>
              <div className='items'>
                <span>Facebook</span>
                <span>Instagram</span>
                <span>VK</span>
              </div>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='info-block'>
            <span>© All rights reserved | OceanBar 2021</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
