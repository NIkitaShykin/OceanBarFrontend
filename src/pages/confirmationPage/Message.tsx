import {Button, Card} from 'react-bootstrap'
import {useHistory} from 'react-router'
import {useDispatch} from 'react-redux'
import Cookies from 'js-cookie'

import {clearCart} from '../../redux/actions'
import ScrollToTop from '../../components/scrollToTop/ScrollToTop'
import {ApiCart} from '../../api/ApiCart'
import {useAppSelector} from '../../redux/hooks'

import './confirmation.scss'

type ConfirmProps = {
  orderID: number
}

// eslint-disable-next-line react/prop-types
const Message: React.FC<ConfirmProps> = ({orderID}) => {
  const history = useHistory()
  const dispatch = useDispatch()

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
              Номер вашего заказа : {orderID}, к выдаче {date} г.
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

