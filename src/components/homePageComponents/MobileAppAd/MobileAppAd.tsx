import React from 'react'

import {Image} from 'react-bootstrap'

import './MobileAppAd.scss'

const MobileAppAd = () => {
  return (
    <div className='mobile-app-ad'>
      <div className='container'>
        <div className='row'>
          <span className='title'>Установите наше приложение :)</span>
        </div>
        <div className='row'>
          <div className='col mobile-view'>
            <Image
              src='images/mobile-1.png'
              alt='logo' width={200}
              height={175}
            />
          </div>
          <div className='col description'>
            <span>
              Приложение <b>OceanBar</b> позволяет
              <br />забронировать стол,
              выбрать еду и оформить заказ в несколько касаний.
            </span>
            <Image
              style={{marginTop: '15px'}}
              src='images/mobile-2.jpg'
              alt='App Store / Google Play'
              width={100}
              height={65}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileAppAd
