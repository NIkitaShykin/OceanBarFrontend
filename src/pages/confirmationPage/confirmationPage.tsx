import {useEffect} from 'react'
import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'

import {getUserPersonalDataTC} from '../../redux/reducers/userReducer'
import {getUserDeliveryDataTC} from
  '../../redux/reducers/deliveryReducer'
import OrderDetails from '../../components/confirmationComponents/OrderDetails'
import ScrollToTop from '../../components/scrollToTop/ScrollToTop'

import './confirmation.scss'


const Confirmation = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const handleClose = () => {
    history.goBack()
  }

  useEffect(() => {
    dispatch(getUserPersonalDataTC())
    dispatch(getUserDeliveryDataTC())
  }, [])

  return (
    <div className='confirmation'>
      <ScrollToTop />
      <div className='container'>
        <Button
          className='justify-content-start go-back'
          variant='link'
          type='button'
          onClick={() => handleClose()}
        >
          Вернуться назад
        </Button>
        <div className='confirm-title'>
          Подтверждение заказа
        </div>
        <OrderDetails />
      </div>
      <div className='confirm-submit-button'>
        <Button
          type='submit'
          className='btn'
          variant='warning'
          size='lg'
          disabled
        >
          Подтвердить
        </Button>{' '}
      </div>
    </div>
  )
}


export default Confirmation

