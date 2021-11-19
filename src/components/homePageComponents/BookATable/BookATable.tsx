import {Form} from 'react-bootstrap'
import {useState} from 'react'
import './BookATable.scss'
import {Card, Button} from 'react-bootstrap'

const BookATable = () => {
  const [needPhoneCall, setNeedPhoneCall] = useState<boolean>(false)

  const handleClose = () => {
    setNeedPhoneCall(!needPhoneCall)
  }

  return (<>

    {needPhoneCall ?
      <div className='registration-form'>
        <div className='container'>
          <Card className='shadow p-3 my-5 bg-body rounded'>
            <Card.Body>
              <Card.Title><h2>Заявка принята!</h2></Card.Title>
              <Card.Text className='mb-5'>
                <h4>Администратор свяжется с вами в течение 10 минут</h4>
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
      </div> :
      <div className='book-a-table'>
        <h2 className='bookTable'>Забронируйте стол по телефону</h2>
        <div className='order-form'>
          <Form>
            <Form.Control
              className={'form-item'}
              size='sm'
              type='text'
              placeholder='Имя'
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


    }


  </>
  )
}
export default BookATable
