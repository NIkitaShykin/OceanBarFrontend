import {useState} from 'react'
import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'

import {useAppSelector} from '../../redux/hooks'
import Message from './Message'
import Spinner from '../../components/Spinner/Spinner'
import OrderDetailsSection from
  '../../components/confirmationComponents/OrderDetailsSection'
import {ApiOrder} from '../../api/ApiOrder'

import './confirmation.scss'


const Confirmation = () => {
  const history = useHistory()
  const token = Cookies.get('token')

  const [success, setSuccess] = useState<boolean>(false)
  const [orderID, setOrderID] = useState<number>(0)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const orderCompleted = useAppSelector(
    (state) => state.order
  )

  const handleClose = () => {
    history.goBack()
  }
  const handleSubmit = () => {
    setIsLoading(true)
    ApiOrder.createOrder(orderCompleted, token)
      .then((response) => {
        setIsLoading(false)
        const apiOrderID: any = response.data.order.id
        setOrderID(apiOrderID)
      })
  }

  return (
    <>
      {isLoading && <Spinner />}
      {success ?
        <Message orderID={orderID}/> :
        <div className='confirmation'>
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
            <OrderDetailsSection />
          </div>
          <div className='confirm-submit-button'>
            <Button
              type='submit'
              className='btn'
              variant='warning'
              size='lg'
              onClick={() => {
                handleSubmit()
                setSuccess(!success)
              }}
            >
          Подтвердить
            </Button>{' '}
          </div>
        </div>
      }
    </>
  )
}


export default Confirmation


