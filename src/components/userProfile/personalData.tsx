import React from 'react'

const PersonalData = () => {
  return (
    <div className='profile-block ml-md-auto'>
      <h2 className='profile-subtitle'>
        Личные данные
      </h2>
      <div className='info-block'>
        <div className='user-name'>Имя</div>
        <div className='second-name'>Фамилия</div>
        <div className='user-email'>Электронная почта</div>
        <div className='phone-number'>Телефон</div>
      </div>
      <button className='btn btn-outline-warning offset-md-10'>
        Изменить
      </button>
    </div>
  )
}

export default PersonalData
