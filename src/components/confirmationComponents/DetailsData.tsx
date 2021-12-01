import {useAppSelector} from '../../redux/hooks'

const DetailsData = () => {
  const orderingUser = useAppSelector(
    (state) => state.user.userProfile
  )
  const orderDetails = useAppSelector(
    (state) => state.order
  )

  return (
    <div className='details-ordertype-block'>
      <div className='row'>
        <div className='col order-type-header'>
          Тип заказа:
        </div>
        <div className='col order-type-text'>
          {orderDetails.type}
        </div>
      </div>
      <div className='row'>
        <div className='col order-type-header'>
          Дата:
        </div>
        <div className='col order-type-text'>
          {orderDetails.date}
        </div>
      </div>
      <div className='row'>
        <div className='col order-type-header'>
          Время:
        </div>
        <div className='col order-type-text'>
          {orderDetails.time}
        </div>
      </div>
      <div className='row'>
        <div className='col order-type-header'>
          Контактная информация:
        </div>
        <div className='col order-type-text'>
          {orderingUser.name},  {orderingUser.phone}
        </div>
      </div>
      {orderDetails.type === 'Доставка' && (
        <div className='row'>
          <div className='col order-type-header'>
            Адрес доставки:
          </div>
          <div className='col order-type-text'>
            {orderDetails.address}
          </div>
        </div>
      )}

      {orderDetails.type === 'Бронирование стола' && (
        <div className='row'>
          <div className='col order-type-header'>
            Стол на:
          </div>
          <div className='col order-type-text'>
            {orderDetails.tableSize}
          </div>
        </div>
      )}
    </div>
  )
}

export default DetailsData
