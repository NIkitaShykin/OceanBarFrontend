/* eslint-disable max-len */
import React from 'react'

import './Footer.scss'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
        <div className='footer-row'>
          <div className='title'>
            <span>Ocean bar</span>
          </div>
          <div className='links'>
            <div className='links-col'>
              <span>Меню</span>
              <span>Оформить заказ</span>
              <span>Забронировать стол</span>
              <span>Корзина</span>
            </div>
            <div className='links-col'>
              <span>Профиль</span>
              <span>Условия пользования</span>
              <span>Политика конфиденциальности</span>
              <span>Политика cookies</span>
            </div>
          </div>
        </div>

        <div className='footer-row'>
          <span>© All rights reserved</span>
        </div>
      </div>
    </div>
  )
}


export default Footer
