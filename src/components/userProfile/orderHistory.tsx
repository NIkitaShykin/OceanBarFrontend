import {useAppSelector} from '../../redux/hooks'
import {DishInCart} from '../../common/types/dishesType'

import '../../pages/profilePage/profile.scss'


const orderHistory = () => {
  const orderedDishes = useAppSelector<DishInCart[]>(
    (state) => state.cart.dishes
  )

  return (
    <div className='profile-block history ml-md-auto'>
      <h2>
        Текущие заказы
      </h2>
      <div className='history-order-block'>
        <div className='history-order-title'>
         Заказ №36 от 27.11.2021:
        </div>
        <div className='shadow'>
          <div className='history-order-item'>
            <div className='history-header-name'>
             Название
            </div>
            <div className='history-header-quant'>
             Количество
            </div>
            <div className='history-header-price'>
             Цена за 1 позицию
            </div>
          </div>
          <div className='details-devider' />
          {orderedDishes.map((item, id) =>
            <div key={item.id}>
              <div className='history-item' id={String(item.id)} key={item.id}>
                <div className='details-item-block'>
                  <span className='details-name'>Суп с лососем</span>
                </div>
                <div className='details-item-block'>
                  <span className='counter'>2</span>
                </div>
                <div className='details-item-block'>
                  <span>25 BYN</span>
                </div>
              </div>
              <div className='details-devider' />
            </div>
          )}

          <div className='history-order-type-block'>
            <div className='row'>
              <div className='col order-type-header'>
          Тип заказа:
              </div>
              <div className='col order-type-text'>
          Доставка
              </div>
            </div>
            <div className='row'>
              <div className='col order-type-header'>
          Дата:
              </div>
              <div className='col order-type-text'>
               27.11.2021
              </div>
            </div>
            <div className='row'>
              <div className='col order-type-header'>
               Время:
              </div>
              <div className='col order-type-text'>
               16.00-17.00
              </div>
            </div>
            <div className='row'>
              <div className='col order-type-header'>
                Адрес доставки:
              </div>
              <div className='col order-type-text'>
                г.Минск
              </div>
            </div>
            <div className='row'>
              <div className='col order-type-header'>
                Стол на:
              </div>
              <div className='col order-type-text'>
                на двоих гостей
              </div>
            </div>
          </div>

          <div className='details-devider'></div>
          <div className='row mb-3'>
            <div className='col history-total text-right'>
              Итого:
            </div>
            <div className='col history-total'>
              25 BYN
            </div>
          </div>
        </div>
      </div>

      <div className='history-order-block'>
        <div className='history-order-title'>
         Заказ №40 от 28.11.2021:
        </div>
        <div className='shadow'>
          <div className='history-order-item'>
            <div className='history-header-name'>
             Название
            </div>
            <div className='history-header-quant'>
             Количество
            </div>
            <div className='history-header-price'>
             Цена за 1 позицию
            </div>
          </div>
          <div className='details-devider' />
          {orderedDishes.map((item, id) =>
            <div key={item.id}>
              <div className='history-item' id={String(item.id)} key={item.id}>
                <div className='details-item-block'>
                  <span className='details-name'>Суп с лососем</span>
                </div>
                <div className='details-item-block'>
                  <span className='counter'>2</span>
                </div>
                <div className='details-item-block'>
                  <span>50 BYN</span>
                </div>
              </div>
              <div className='details-devider' />
            </div>
          )}

          <div className='history-order-type-block'>
            <div className='row'>
              <div className='col order-type-header'>
               Тип заказа:
              </div>
              <div className='col order-type-text'>
               Бронирование стола
              </div>
            </div>
            <div className='row'>
              <div className='col order-type-header'>
               Дата:
              </div>
              <div className='col order-type-text'>
               28.11.2021
              </div>
            </div>
            <div className='row'>
              <div className='col order-type-header'>
               Время:
              </div>
              <div className='col order-type-text'>
               16.00-17.00
              </div>
            </div>
            <div className='row'>
              <div className='col order-type-header'>
                Адрес доставки:
              </div>
              <div className='col order-type-text'>
                г.Минск
              </div>
            </div>
            <div className='row'>
              <div className='col order-type-header'>
                Стол на:
              </div>
              <div className='col order-type-text'>
                на двоих гостей
              </div>
            </div>
          </div>

          <div className='details-devider'></div>
          <div className='row mb-3'>
            <div className='col history-total text-right'>
              Итого:
            </div>
            <div className='col history-total'>
              50 BYN
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default orderHistory
