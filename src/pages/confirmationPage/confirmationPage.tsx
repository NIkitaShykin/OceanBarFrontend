import {Button} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import OrderDetails from '../../components/confirmationComponents/OrderDetails'

import './confirmation.scss'


const Confirmation = () => {
  const history = useHistory()
  const handleClose = () => {
    history.goBack()
  }

  return (
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
        <OrderDetails numberOfDishes={undefined}/>
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

