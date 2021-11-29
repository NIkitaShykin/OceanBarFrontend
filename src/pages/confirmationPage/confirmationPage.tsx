import {useState} from 'react'
import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'

import {createOrder} from '../../api/ApiOrder'
import {useAppSelector} from '../../redux/hooks'
import Message from './Message'
import OrderDetailsSection from
  '../../components/confirmationComponents/OrderDetailsSection'

import './confirmation.scss'
// import {useDispatch} from 'react-redux'


const Confirmation = () => {
  const history = useHistory()
  // const dispatch = useDispatch()
  const [success, setSuccess] = useState<boolean>(false)
  // const [orderID, setOrderID] = useState<number>(0)

  const orderCompleted = useAppSelector(
    (state) => state.order
  )

  const handleClose = () => {
    history.goBack()
  }
  const handleSubmit = () => {
    return new Promise<void>((resolve, reject) => {
      return createOrder(orderCompleted, Cookies.get('token'))
        .then((res) => {
          resolve(res)
          console.log(res)
          // dispatch(orderSubmitSucess(res.data))
        }).catch((error) => {
          resolve()
        })
    })
    // const orderID = await createOrder(orderCompleted, Cookies.get('token'))
    // .then(() => console.log(response.data.id))
    //
    // setOrderID(response.data.id)

    // setSuccess(!success)
  }

  return (
    <>
      {success ?
        <Message /> :
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


