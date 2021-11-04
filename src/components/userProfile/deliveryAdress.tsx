

const DeliveryAdress = () => {
  return (
    <div className='profile-block justify-content-start'>
      <h2>Адрес доставки</h2>
      <div className='info-block'>
        <div className='locality'>г. Минск</div>
        <div className='street'>ул. Улица</div>
        <div className='building'>д. 10</div>
        <div className='apartment'>кв. 3</div>
        <div className='entrance-floor'>подъезд 3, этаж 3</div>
      </div>

      <button className='btn btn-outline-warning offset-md-10'>
        Изменить
      </button>
    </div>
  )
}

export default DeliveryAdress
