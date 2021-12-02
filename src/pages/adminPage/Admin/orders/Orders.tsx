import {useEffect, useState} from 'react'
import {ApiAdmin} from '../../../../api/ApiAdmin'
import {useDispatch} from 'react-redux'
import {setUsersOrders} from '../../../../redux/actions'
import {Col, Container, Row} from 'react-bootstrap'
import './Orders.scss'
import OrdersBooking from './OrderTypeBooking'
import {useAppSelector} from '../../../../redux/hooks'
import OrderTypeTakeaway from './OrderTypeTakeaway'
import OrdersDelivery from './OrderTypeDelivery'

const Orders = () => {
  const dispatch = useDispatch()
  const [show, setShow] = useState('')
  const orders = useAppSelector((state) => state.orders.orders)
  const handleLoad = () => {
    ApiAdmin.getAllOrders().then((el) => {
      dispatch(setUsersOrders(el.data.orders))
      const a:any = document.querySelector('#delivery')
      a.classList.add('menuLinkStylesActive')
    })
  }
  useEffect(() => {
    handleLoad()
  }, [])

  const setClassName = (text: string) => {
    const htmlCollection = document.getElementsByClassName('menuLinkStyles')
    const arr = [].slice.call(htmlCollection)
    arr.forEach((el: any) => {
      if (el.innerText === text) {
        setShow(text)
        el.classList.add('menuLinkStylesActive')
      } else {
        el.classList.remove('menuLinkStylesActive')
      }
    })
  }

  return (
    <>
      <Container className={'cont'}>
        <Row
          className={'row'}
          onClick={(e: any) => {
            setClassName(e.target.innerText)
          }}
          style={{width: '100%'}}
        >
          <Col xs={2} sm={2} md={3} lg={2}>
            <a className={'menuLinkStyles'}>
              <span style={{fontSize: '15px'}}>Навынос</span>
            </a>
          </Col>
          <Col xs={3} sm={3} md={3} lg={3}>
            <a id={'delivery'} className={'menuLinkStyles'}>
              <span style={{fontSize: '15px'}}>Доставка</span>
            </a>
          </Col>
          <Col xs={4} sm={4} md={4} lg={3}>
            <a className={'menuLinkStyles'}>
              <span style={{fontSize: '15px'}}>Бронирование стола</span>
            </a>
          </Col>
        </Row>
      </Container>
      {show === 'Бронирование стола' ? (
        <div>
          <OrdersBooking orders={orders} />
        </div>
      ) : show === 'Навынос' ? (
        <div>
          <OrderTypeTakeaway orders={orders} />
        </div>
      ): <div>
        <OrdersDelivery orders={orders} />
      </div>}
    </>
  )
}

export default Orders
