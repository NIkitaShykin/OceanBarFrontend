import React from 'react'
import './HowItWorks.scss'
const HowItWorks = () => {
  return (
    <div className='HowItWorks'>
      <h5 className='HowItWorks-text'>Как это работает</h5>
      <p className='howItWorks-info'>
        4 простых шага для экономии вашего времени
      </p>
      <ul className='steps'>
        <li>
          <div className='step'>1</div>
          <p className='hint'>Забронируйте стол</p>
        </li>
        <li>
          <div className='step'>2</div>
          <p className='hint'>Сделайте предзаказ</p>
        </li>
        <li>
          <div className='step'>3</div>
          <p className='hint'>Оплатите онлайн</p>
        </li>
        <li>
          <div className='step'>4</div>
          <p className='hint'>К вашему приходу все готово</p>
        </li>
      </ul>
    </div>
  )
}

export default HowItWorks
