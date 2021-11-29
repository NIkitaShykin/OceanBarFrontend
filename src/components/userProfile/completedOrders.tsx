import {Accordion} from 'react-bootstrap'

const CompletedOrders =() => {
  return (
    <>
      {/* {completedOrders.map((order, id) => <Accordion></Accordion>} */}
      <Accordion
        // defaultActiveKey='1'
        flush
      >
        <Accordion.Item eventKey='0'>
          <Accordion.Header>
            <div className='history-order-title'>
                Заказ №28 от 28.10.2021г
            </div>
          </Accordion.Header>
          <Accordion.Body>
            <div className='history-order-block'>

              <div className='shadow border'>
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
                {/* {orderedDishes.map((item, id) => */}
                <div
                  className='history-order-item'>
                  {/* // id={id)}
                      // key={item.id}> */}
                  <div className='history-header-name'>
                    <span className='details-name'>Суп с лососем</span>
                  </div>
                  <div className='history-header-quant'>
                    <span className='counter'>2</span>
                  </div>
                  <div className='history-header-price'>
                    <span>25 BYN</span>
                  </div>
                </div>
                {/* )} */}

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
                <div className='details-devider' />
                <div className='row'>
                  <div className='col order-type-header mb'>
                    Cтатус заказа:
                  </div>
                  <div className='col order-type-text mb'>
                    выполнено
                  </div>
                </div>
              </div>
            </div>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey='1'>
          <Accordion.Header>
            <div className='history-order-title'>
              Заказ №30 от 19.11.2021г
            </div>
          </Accordion.Header>
          <Accordion.Body>
            some order
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  )
}

export default CompletedOrders
