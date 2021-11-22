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
import {useDispatch} from 'react-redux'

import SearchField from '../../userProfile/deliveryAdress/Search'
import {addOrder} from '../../../redux/actions'

import './OrderForms.scss'


interface ITakeawayFormProps {
  handleRadioValueClearance: (value: string) => void
}

const DeliveryForm: React.FC<ITakeawayFormProps> =
  ({handleRadioValueClearance}) => {
    const history = useHistory()

    const [date, setDate] = useState<Date>(new Date('2015-04-02'))
    const [timeSlot, setTimeSlot] = useState<string>('')
    const [isTimeInputSkipped, setTimeInputSkipped] = useState<boolean>(false)

    const [paymentMethod, setPaymentMethod] = useState<string>('')
    const [isPaymentInputSkipped, setPaymentInputSkipped] =
      useState<boolean>(false)

    const [street, setStreet] = useState<string>('')
    const [homeNumber, setHomeNumber] = useState<string>('')
    const [homePart, setHomePart] = useState<string>('')
    const [flat, setFlat] = useState<string>('')

    const useInput = () => {
      const [isDirty, setDirty] = useState<boolean>(false)
      const [error, setError] =
      useState<boolean>(false)

      const onBlur = (e: ChangeEvent<HTMLSelectElement> |
        FocusEvent<HTMLInputElement>) => {
        setDirty(true)
        setError(true)
      }

      return {
        onBlur,
        isDirty,
        error
      }
    }

    const time = useInput()
    const adress = useInput()
    const home = useInput()

    const streetSelect = (value:string) => {
      setStreet(value)
    }

    const isTimeInvalid =
      !time.isDirty ||
      time.isDirty && isTimeInputSkipped

    const timeSlots: Array<string> = [
      '16:00 - 18:00',
      '18:00 - 20:00',
      '20:00 - 22:00',
    ]

    const clearCheckedOrderType = (checkedValue: string) => {
      handleRadioValueClearance(checkedValue)
    }

    const dispatch = useDispatch()
    const handleSubmit = ((e: React.MouseEvent<Element, MouseEvent>)=> {
      dispatch(addOrder({
        city: 'г.Минск',
        street: street,
        homeNumber: homeNumber,
        homePart: homePart,
        flat: flat,
        date: date.toLocaleDateString(),
        timeSlot: timeSlot,
        orderType: 'Доставка'
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
                  aria-label='Floating label select example'
                  defaultValue={timeSlot}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    setTimeSlot(e.target.value)
                    setTimeInputSkipped(!e.target.value)
                  }}
                  onBlur={(e) => time.onBlur(e)}
                  isInvalid={isTimeInputSkipped}
                >
                  <option value={''}>Выбрать...</option>
                  {timeSlots.map((time, idx) => (
                    <option value={time} key={time}>{time}</option>
                  ))}
                </Form.Select>
              </FloatingLabel>
              {
                (time.isDirty && !timeSlot) &&
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
                    <span className='street-lable'>г.Минск</span>
                    <SearchField
                      required
                      searchValue={streetSelect}
                      isInvalid={adress.isDirty && !street}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setStreet(e.target.value)}
                      onBlur={(e: any) =>
                        adress.onBlur(e)}
                    />
                  </Col>
                </Row>
                {
                  (adress.error) &&
                  <div className='error error-adress'>
                    Пожалуйста, укажите адрес доставки
                  </div>
                }
                <Row>
                  <Col>
                    <Form.Control
                      placeholder='Дом'
                      required
                      name='house'
                      defaultValue={homeNumber}
                      isInvalid={home.isDirty && !homeNumber}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setHomeNumber(e.target.value)}
                      onBlur={(e: FocusEvent<HTMLInputElement>) =>
                        home.onBlur(e)}
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
                      defaultValue={flat}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        setFlat(e.target.value)}
                    />
                  </Col>
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
                  value='cash'
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
                  value='card-online'
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
                  value='card-at-the-restaurant'
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
