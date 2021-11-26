import {Button, Card} from 'react-bootstrap'
import {useHistory} from 'react-router'
import {useDispatch} from 'react-redux'
import Cookies from 'js-cookie'

import {clearCart} from '../../redux/actions'
import ScrollToTop from '../../components/scrollToTop/ScrollToTop'
import {ApiCart} from '../../api/ApiCart'
import {useAppSelector} from '../../redux/hooks'
import {fetchOrder} from '../../api/ApiOrder'

import './confirmation.scss'


const Message = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const orderID = fetchOrder()
  // .then((responce: any) => {
  //   console.log(responce.data.order.id)
  // })
  console.log(orderID)

  const handleClose = () => {
    history.push('/')

    ApiCart.clearCart(Cookies.get('token'))
    dispatch(clearCart())
  }

  const {date} = useAppSelector(
    (state) => state.order
  )


  return (
    <>
      <ScrollToTop />
      <div className='container'>
        <Card className='shadow p-3 my-5 bg-body rounded'>
          <Card.Body>
            <Card.Title><h2>Спасибо за ваш заказ!</h2></Card.Title>
            <Card.Text className='mb-5 message-text'>
              Номер вашего заказа : XXXX от {date} г.
            </Card.Text>
            <Button
              variant='outline-warning'
              type='button'
              onClick={() => handleClose()}
            >
              Ok
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  )
}

export default Message

