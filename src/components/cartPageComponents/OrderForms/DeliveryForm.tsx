import React, {ChangeEvent, FocusEvent, useState} from 'react'
import DatePicker from 'react-date-picker'
import {
  Form,
  Row,
  Col,
  FloatingLabel,
  Button,
  ToggleButton,
  ToggleButtonGroup
} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'

import SearchDelivery from
  '../../../components/userProfile/deliveryAdress/SearchDelivery'
import {addOrder} from '../../../redux/actions'
import totalSum from '../totalSum'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import {DeliveryAdressType, UserType} from '../../../common/types/userTypes'

import './OrderForms.scss'


interface ITakeawayFormProps {
  handleRadioValueClearance: (value: string) => void
}

const DeliveryForm: React.FC<ITakeawayFormProps> =
  ({handleRadioValueClearance}) => {
    const history = useHistory()
    const city = 'г.Минск'

    const user = useSelector<AppStoreType, UserType & DeliveryAdressType>(
      (state) => state.user.userProfile)

    const [date, setDate] = useState<Date>(new Date())
    const [timeSlot, setTimeSlot] = useState<string>('')
    const [isTimeInputSkipped, setTimeInputSkipped] = useState<boolean>(false)

    const [paymentMethod, setPaymentMethod] = useState<string>('')
    const [isPaymentInputSkipped, setPaymentInputSkipped] =
      useState<boolean>(false)

    const [street, setStreet] = useState<string>(user.street)
    const [streetError, setStreetError] = useState<boolean>(false)
    const [homeNumber, setHomeNumber] = useState<string>(`${user.homeNumber}`)
    const [homeNumberError, setHomeNumberError] = useState<boolean>(false)
    const [homePart, setHomePart] = useState<string>(`${user.homePart}`)
    const [flat, setFlat] = useState<string>(`${user.flat}`)

    const useInput = () => {
      const [isDirty, setDirty] = useState<boolean>(false)

      const onBlur = (e: ChangeEvent<HTMLSelectElement> |
        FocusEvent<HTMLInputElement>) => {
        setDirty(true)
      }

      return {
        onBlur,
        isDirty
      }
    }

    const timeValidation = useInput()
    const streetValidation = useInput()
    const homeValidation = useInput()

    const streetSelect = (value:string) => {
      setStreet(value)
    }

    const isTimeInvalid =
      !timeValidation.isDirty ||
      timeValidation.isDirty && isTimeInputSkipped

    const timeSlots: Array<string> = [
      '16:00 - 18:00',
      '18:00 - 20:00',
      '20:00 - 22:00',
    ]

    const clearCheckedOrderType = (checkedValue: string) => {
      handleRadioValueClearance(checkedValue)
    }

    const sum = totalSum()

    const dispatch = useDispatch()
    const handleSubmit = ((e: React.MouseEvent<Element, MouseEvent>)=> {
      const adress = {
        city,
        street,
        homeNumber,
        homePart,
        flat
      }

      const adressValues = Object.values(adress)
        .toString()
        .replace(/[,\s]*,[,\s]*/g, ', ')
        .replace(/^,/, '').replace(/,$/, '')

      dispatch(addOrder({
        address: adressValues,
        date: date.toLocaleDateString(),
        time: timeSlot,
        type: 'Доставка',
        paymentType: paymentMethod,
        price: sum
      }))
      history.push('/confirmation')
    })

    return (
      <div className='delivery-form shadow'>
        <div className='form-section'>
          <div className='form-data'>
            <div className='section-numeration'>
              <span>1</span>
            </div>

            <div className='section-header'>
              <span>Выберите дату</span>
            </div>

            <div className='section-content'>
              <DatePicker
                clearIcon={null}
                format='dd.MM.y'
                minDate={new Date()}
                onChange={(date: Date) => setDate(date)}
                required
                value={date}
                dayAriaLabel='Day'
                monthAriaLabel='Month'
                yearAriaLabel='Year'
              />
            </div>
          </div>

          <div className='form-separation'></div>
        </div>

        <div className='form-section'>
          <div className='form-data'>
            <div className='section-numeration'>
              <span>2</span>
            </div>

            <div className='section-header'>
              <span>Выберите время</span>
            </div>

            <div className='section-content'>
              <FloatingLabel
                controlId='floatingSelectGrid'
                label='Доставка доступна с 16:00 до 22:00'
              >
                <Form.Select
                  aria-label='Select time slot'
                  defaultValue={timeSlot}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    setTimeSlot(e.target.value)
                    setTimeInputSkipped(!e.target.value)
                  }}
                  onBlur={(e) => timeValidation.onBlur(e)}
                  isInvalid={isTimeInputSkipped}
                >
                  <option value={''}>Выбрать...</option>
                  {timeSlots.map((time, idx) => (
                    <option value={time} key={time}>{time}</option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              {
                (timeValidation.isDirty && !timeSlot) &&
                  <div className='error'>
                    Пожалуйста, выберите время доставки для текущего заказа
                  </div>
              }
            </div>

          </div>
          <div className='form-separation'></div>
        </div>

        <div className='form-section'>
          <div className='form-data'>
            <div className='section-numeration'>
              <span>3</span>
            </div>

            <div className='section-header'>
              <span>Укажите адрес</span>
            </div>

            <div className='section-content'>

              <div>
                <Row className='mb-3'>
                  <Col>
                    <span className='street-lable'>{city}</span>
                    <SearchDelivery
                      required
                      searchValue={streetSelect}
                      currentValue={street}
                      isInvalid={streetValidation.isDirty && !streetValidation}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setStreet(e.target.value)
                        setStreetError(false)
                      }}
                      onBlur={(e: FocusEvent<HTMLInputElement>) => {
                        streetValidation.onBlur(e)
                        setStreetError(true)
                      }}
                    />
                  </Col>
                </Row>

                {
                  (streetError && !street) &&
                <div className='error error-adress'>
                  Пожалуйста, укажите адрес доставки!
                </div>
                }
                <Row>
                  <Col>
                    <Form.Control
                      placeholder='Дом'
                      required
                      name='house'
                      maxLength={3}
                      defaultValue={homeNumber}
                      isInvalid={homeValidation.isDirty && !homeNumber}
                      onChange={(e: ChangeEvent<HTMLInputElement>) => {
                        setHomeNumber(e.target.value)
                        setHomeNumberError(false)
                      }
                      }
                      onBlur={(e: FocusEvent<HTMLInputElement>) => {
                        homeValidation.onBlur(e)
                        setHomeNumberError(true)
                      }}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder='Корпус'
                      defaultValue={homePart}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setHomePart(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder='Квартира'
                      maxLength={4}
                      defaultValue={flat}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFlat(e.target.value)}
                    />
                  </Col>
                  {
                    (homeNumberError && !homeNumber) &&
                  <div className='error'>
                    Поле не может быть пустым!
                  </div>
                  }
                </Row>
              </div>
            </div>
          </div>

          <div className='form-separation'></div>
        </div>

        <div className='form-section'>
          <div className='form-data'>
            <div className='section-numeration'>
              <span>4</span>
            </div>

            <div className='section-header'>
              <span>Выберите способ оплаты</span>
            </div>

            <div className='section-content payment-types'>
              <ToggleButtonGroup
                className='w-100'
                type='radio'
                name='options'
                size='sm'
                defaultValue={paymentMethod}
              >
                <ToggleButton
                  id='tbg-radio-1'
                  value='Наличными'
                  variant='outline-warning'
                  onChange={(e) => {
                    setPaymentMethod(e.currentTarget.value)
                    setPaymentInputSkipped(!e.currentTarget.value)
                  }}
                >
                Наличными
                </ToggleButton>
                <ToggleButton
                  id='tbg-radio-2'
                  value='Картой онлайн'
                  variant='outline-warning'
                  onChange={(e) => {
                    setPaymentMethod(e.currentTarget.value)
                    setPaymentInputSkipped(!e.currentTarget.value)
                  }}
                >
                Картой онлайн
                </ToggleButton>
                <ToggleButton
                  id='tbg-radio-3'
                  value='Картой на месте'
                  variant='outline-warning'
                  onChange={(e) => {
                    setPaymentMethod(e.currentTarget.value)
                    setPaymentInputSkipped(!e.currentTarget.value)
                  }}
                >
                Картой на месте
                </ToggleButton>
              </ToggleButtonGroup>
              {
                isPaymentInputSkipped &&
              <div className='error'>
                Пожалуйста, выберите способ оплаты для текущего заказа
              </div>
              }
            </div>
          </div>

          <div className='form-separation'></div>
        </div>

        <div className='form-section'>
          <div className='form-buttons'>
            <Button
              variant='outline-secondary mx-2'
              onClick={() => clearCheckedOrderType('')}
            >
              Отмена
            </Button>
            <Button
              variant='outline-warning'
              disabled={
                isTimeInvalid ||
                !street ||
                !homeNumber ||
                isPaymentInputSkipped
              }
              onClick={
                (e) => {
                  !paymentMethod && setPaymentInputSkipped(true)

                  if (paymentMethod &&
                    !isTimeInvalid &&
                    street &&
                    homeNumber
                  ) handleSubmit(e)
                }
              }
            >
              Далее
            </Button>
          </div>
        </div>
      </div>
    )
  }

export default DeliveryForm
