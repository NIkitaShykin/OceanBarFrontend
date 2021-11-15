/* eslint-disable react/prop-types */
import {Image} from 'react-bootstrap'


import './orderDetails.scss'
import '../cartPageComponents/Cart.scss'

interface IOrderItemProps {
  id?: number
  name?: string
  price?: string
  image?: string
  numberOfDishes: number | undefined
  position?: number
}
// @ ts-ignore
const OrderDetails: React.FunctionComponent<IOrderItemProps> = ({
  id,
  name,
  price,
  image,
  numberOfDishes = 1,
  position
}) => {
  return (
    <>
      <div className='details-block'>
        <div className='details-title'>
         Заказ:
        </div>
        <div className='details-shadow details-border'>
          <div className='details-item' id={String(id)}>
            <div className='details-item-block details-header'>
              <span>Название</span>
            </div>
            <div className='details-item-block details-header'>
              <span>Количество</span>
            </div>
            <div className='details-item-block details-header'>
              <span>Цена за 1 позицию</span>
            </div>
          </div>
          <div className='details-item' id={String(id)}>
            <div className='details-item-block details-img'>
              <Image className='rounded-3' src='https://www.edimdoma.ru/system/images/contents/0000/6787/wide/AdobeStock_275611083_%D0%B8%D1%81%D0%BF%D1%80.jpg?1564142039' width={40} height={40} />
            </div>
            <div className='details-item-block details-details'>
              <a href='#' className='details-name'>Тартар</a>
            </div>
            <div className='details-item-block details-counter text-left'>
              1
            </div>
            <div className='details-item-block details-counter'>
              <span>120 BYN</span>
            </div>
          </div>

          <div className='details-devider'></div>

          <div className='details-item' id={String(id)}>
            <div className='details-item-block details-img'>
              <Image className='rounded-3' src='https://www.edimdoma.ru/system/images/contents/0000/6788/wide/AdobeStock_166014726_result.jpeg?1564134468'
              />
            </div>

            <div className='details-item-block details-details'>
              <a className='details-name'>Тунец</a>
            </div>
            <div className='details-item-block details-counter'>
              <span className='counter'>1</span>
            </div>
            <div className='details-item-block details-counter'>
              <span>150 BYN</span>
            </div>
          </div>

          <div className='details-devider'></div>
          <div className='details-ordertype-block'>
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
                30 ноября 2021г
              </div>
            </div>
            <div className='row'>
              <div className='col order-type-header'>
                Время:
              </div>
              <div className='col order-type-text'>
                15.00
              </div>
            </div>
            <div className='row'>
              <div className='col order-type-header'>
                Контактная информация:
              </div>
              <div className='col order-type-text'>
                Кристина, +375291234567
              </div>
            </div>
            <div className='row'>
              <div className='col order-type-header'>
                Стол на:
              </div>
              <div className='col order-type-text'>
                двоих
              </div>
            </div>
          </div>
          <div className='details-devider'></div>
          <div className='row mb-3'>
            <div className='col order-type-total text-right'>
              Итого:
            </div>
            <div className='col order-type-total'>
              270 BYN
            </div>
          </div>
        </div>

        <div className='details-payment'>
          <div className='row'>
            <div className='col order-type-total text-right'>
              Оплата онлайн:
            </div>
            <div className='col payment-cards'>
              <Image className='rounded-3' src='https://mockups-design.com/wp-content/uploads/2020/04/Free_Credit_Card_Mockup_4.jpg' width={100} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderDetails
