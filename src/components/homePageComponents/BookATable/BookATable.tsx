import {useState, ChangeEvent} from 'react'
import {useSelector} from 'react-redux'
import {Card, Button, Form} from 'react-bootstrap'
// import Cookies from 'js-cookie'

import {UserType, ValidationType} from '../../../common/types/userTypes'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import {useValidation} from '../../../utils/validation'
import {ApiReserve} from '../../../api/ApiBookTable'

import './BookATable.scss'

type FormControlElement = HTMLInputElement | HTMLTextAreaElement

const BookATable = () => {
  // const token = Cookies.get('token')

  const user =
    useSelector<AppStoreType, UserType>((state) => state.user.userProfile)

  const [needPhoneCall, setNeedPhoneCall] = useState<boolean>(false)

  const useInput = (initialValue: string, validations: ValidationType) => {
    const [value, setValue] = useState<string>(initialValue)
    const [isDirty, setDirty] = useState<boolean>(false)
    const valid = useValidation(value, validations)

    const onChange = (e: ChangeEvent<FormControlElement>) => {
      setValue(e.target.value)
    }

    const onBlur = (e: ChangeEvent<FormControlElement>) => {
      setDirty(true)
    }

    return {
      value,
      onChange,
      onBlur,
      isDirty,
      ...valid
    }
  }

  const phoneNumber = useInput('', {
    isEmpty: true,
    phoneNumberError: true,
  })

  const userName = useInput('', {
    isEmpty: true,
    firstNameError: true,
    minLengthError: 2,
    maxLengthError: 30,
  })

  const isPhoneNumberInvalid =
    phoneNumber.isDirty &&
    (phoneNumber.isEmpty || phoneNumber.phoneNumberError)

  const isUserNameInvalid =
    (userName.firstNameError && userName.isDirty) ||
    (userName.isEmpty && userName.isDirty)

  const reservOrder={
    date: 'уточнить',
    name: userName.value,
    phone: phoneNumber.value,
    time: 'уточнить',
    amountofpeople: 4
  }

  const handleClose = () => {
    setNeedPhoneCall(!needPhoneCall)
    ApiReserve.bookTableUnregistred(reservOrder)
    // .then((res)=>console.log(res))
  }

  return (
    <>
      {
        needPhoneCall ? (
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
          </div>
        ) : (
          <div className='book-a-table'>
            <h2 className='bookTable'>Забронируйте стол по телефону</h2>
            <div >
              <Form className='order-form'>
                <Form.Floating className='mx-1'>
                  <Form.Control
                    id='userName'
                    type='text'
                    placeholder={user.name}
                    value={userName.value}
                    isInvalid={isUserNameInvalid}
                    onChange={(e) => userName.onChange(e)}
                    onBlur={(e) => userName.onBlur(e)}
                  />
                  <label htmlFor='userName'>
                    Имя
                  </label>
                </Form.Floating>
                {
                  isUserNameInvalid &&
                  <div className='error'>
                    Имя обязательно
                  </div>
                }
                <br />

                <Form.Floating className='mx-1 my-3'>
                  <Form.Control
                    id='userPhones'
                    type='phoneNumber'
                    placeholder={user.phone}
                    value={phoneNumber.value}
                    isInvalid={isPhoneNumberInvalid}
                    onChange={(e) => phoneNumber.onChange(e)}
                    onBlur={(e) => phoneNumber.onBlur(e)}
                  />
                  <label htmlFor='userPhones'>
                    Номер телефона
                  </label>
                  {
                    isPhoneNumberInvalid &&
                    <div className='error'>
                      Телефон должен содержать код в формате
                      +375 (+ опционально) либо 80 и 9 цифр основного номера.
                      Обязательно к заполнению.
                    </div>
                  }
                </Form.Floating>
              </Form>
            </div>

            <div className={'order-button-container'}>
              <button className={'order-button'}
                onClick={handleClose}
                disabled={
                  isUserNameInvalid ||
                  isPhoneNumberInvalid ||
                  phoneNumber.isEmpty ||
                  userName.isEmpty
                }
              >
                <span className='menu-text-main-page'>Забронировать</span>
              </button>
            </div>
          </div>
        )
      }
    </>
  )
}

export default BookATable
