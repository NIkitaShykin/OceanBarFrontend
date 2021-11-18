import {Form} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import './BookATable.scss'

const BookATable = () => {
  const history = useHistory()

  const handleClose = () => {
    history.push('booking-table/')
  }

  return (
    <div className='book-a-table'>
      <h2 className='bookTable'>Забронируйте стол по телефону</h2>
      <div className='order-form'>
        <Form>
          <Form.Control
            className={'form-item'}
            size='sm'
            type='text'
            placeholder='Имя Фамилия'
          />
          <br />
          <Form.Control
            className={'form-item'}
            size='sm'
            type='tel'
            placeholder='Номер телефона'
          />
        </Form>
      </div>
      <div className={'order-button-container'}>
        <button className={'order-button'}>
          <span className='menu-text-main-page'
            onClick={handleClose}
          >Забронировать</span>
        </button>
      </div>
    </div>
  )
}
export default BookATable
