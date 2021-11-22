import {Image} from 'react-bootstrap'

import {useAppSelector} from '../../redux/hooks'
import {DishInCart} from '../../common/types/dishesType'

import './orderDetails.scss'
import DetailsData from './DetailsData'


const OrderDetailsSection = () => {
  const orderedDishes = useAppSelector<DishInCart[]>(
    (state) => state.cart.dishes
  )
  const totalSum = orderedDishes.reduce(
    (sum: number, current) =>
      sum + Number(current.price) * current.numberOfDishes,
    0
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
              detail-header-name'>
              <span>Название</span>
            </div>
            <div className='details-item-block details-header'>
              <span>Количество</span>
            </div>
            <div className='details-item-block details-header'>
              <span>Цена за 1 позицию</span>
            </div>
          </div>
          <div className='details-devider'></div>
          {orderedDishes.map((item, id) =>
            <>
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
              <div className='details-devider'></div>
            </>
          )}

          <DetailsData />

          <div className='details-devider'></div>
          <div className='row mb-3'>
            <div className='col order-type-total text-right'>
              Итого:
            </div>
            <div className='col order-type-total'>
              {totalSum} BYN
            </div>
          </div>
        </div>

        <div className='details-payment'>
          <div className='row'>
            <div className='col order-type-total text-right'>
              Оплата:
            </div>
            <div className='col payment-cards'>
              {/* <MyCards/> // сюда вставить компонент
              с сохраненными кароточками из профайла вместо картинки ниже */}
              <Image className='rounded-3' src='https://mockups-design.com/wp-content/uploads/2020/04/Free_Credit_Card_Mockup_4.jpg' width={100} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderDetailsSection


