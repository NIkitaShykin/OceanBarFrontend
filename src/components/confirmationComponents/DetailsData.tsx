import {useAppSelector} from 'src/redux/hooks'

const DetailsData = () => {
  const orderingUser = useAppSelector(
    (state) => state.auth.user
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
          {orderDetails.orderType}
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
          {orderDetails.timeSlot}
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
      {orderDetails.orderType === 'Доставка' && (
        <div className='row'>
          <div className='col order-type-header'>
            Адрес доставки:
          </div>
          <div className='col order-type-text'>
            {orderDetails.city}&nbsp;
            ул.{orderDetails.street}&nbsp;
            д.{orderDetails.homeNumber}&nbsp;
            к.{orderDetails.homePart}&nbsp;
            кв.{orderDetails.flat}
          </div>
        </div>
      )}

      {orderDetails.orderType === 'Бронирование стола' && (
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
