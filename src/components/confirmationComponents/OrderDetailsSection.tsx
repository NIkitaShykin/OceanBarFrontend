import {Image} from 'react-bootstrap'

import {useAppSelector} from '../../redux/hooks'
import {DishInCart} from '../../common/types/dishesType'
import DetailsData from './DetailsData'
import totalSum from '../cartPageComponents/totalSum'
import ChoosePaymentCart from './ChoosePaymentCart'

import './orderDetails.scss'


const OrderDetailsSection = () => {
  const total = totalSum()
  const orderedDishes = useAppSelector<DishInCart[]>(
    (state) => state.cart.dishes
  )
  const orderCompleted = useAppSelector(
    (state) => state.order
  )


  return (
    <>
      <div className='details-block'>
        <div className='details-title'>
         Заказ:
        </div>
        <div className='shadow details-border'>
          <div className='details-item'>
            <div className='
              details-item-block
              details-header
              detail-header-name'
            >
              <span>Название</span>
            </div>
            <div className='details-item-block details-header'>
              <span>Количество</span>
            </div>
            <div className='details-item-block details-header'>
              <span>Цена за 1 позицию</span>
            </div>
          </div>
          <div className='details-devider' />
          {orderedDishes.map((item, id) =>
            <div key={item.id}>
              <div className='details-item' id={String(item.id)} key={item.id}>
                <div className='details-item-block details-img'>
                  <Image className='rounded-3' src={item.imageURL} />
                </div>

                <div className='details-item-block details-dish-name'>
                  <a className='details-name'>{item.name}</a>
                </div>
                <div className='details-item-block details-counter'>
                  <span className='counter'>{item.numberOfDishes}</span>
                </div>
                <div className='details-item-block details-sum'>
                  <span>{Number(item.price) * item.numberOfDishes} BYN</span>
                </div>
              </div>
              <div className='details-devider' />
            </div>
          )}

          <DetailsData />

          <div className='details-devider'></div>
          <div className='row mb-3'>
            <div className='col order-type-total text-right'>
              Итого:
            </div>
            <div className='col order-type-total'>
              {total} BYN
            </div>
          </div>
        </div>

        <div className='details-payment'>

          {orderCompleted.paymentType === 'Наличными' && (
            <div className='row'>
              <div className='col order-type-total text-right'>
                  Оплата:
              </div>
              <div className='col text'>
                  На месте наличными
              </div>
            </div>
          )}
          {orderCompleted.paymentType === 'Картой на месте' && (
            <div className='row'>
              <div className='col order-type-total text-right'>
                Оплата:
              </div>
              <div className='col text'>
                  На месте картой
              </div>
            </div>
          )}
        </div>
        {orderCompleted.paymentType === 'Картой онлайн' && (
          <>
            <div className='online-payment'>
              <div className=' order-type-total'>
                Оплата:
              </div>
              <div className=''>
                <ChoosePaymentCart />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default OrderDetailsSection


