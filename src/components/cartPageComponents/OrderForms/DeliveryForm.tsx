import React, {ChangeEvent, useState} from 'react'
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

import SearchField from '../../userProfile/deliveryAdress/Search'

import './OrderForms.scss'
import {useDispatch} from 'react-redux'
import {addOrder} from 'src/redux/actions'


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

    const [street, setStreet] = useState<string>()
    const [isStreetInputSkipped, setStreetInputSkipped] =
      useState<boolean>(false)

    const [homeNumber, setHomeNumber] = useState<string>()
    const [isHomeInputSkipped, setHomeInputSkipped] =
      useState<boolean>(false)

    const [homePart, setHomePart] = useState<string>()
    const [flat, setFlat] = useState<string>()

    const useInput = () => {
      const [isDirty, setDirty] = useState<boolean>(false)

      const onBlur = (e: any) => {
        setDirty(true)
      }

      return {
        onBlur,
        isDirty
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

    // const isStreetInvalid =
    //   !street ||
    //   !adress.isDirty ||
    //   adress.isDirty && isStreetInputSkipped

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
                (time.isDirty && isTimeInputSkipped) &&
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

              <Form>
                <Row className='mb-3'>
                  <Col>
                    <span className='street-lable'>г.Минск</span>
                    <SearchField
                      searchValue={streetSelect}
                      isInvalid={isStreetInputSkipped}
                      onChange={(e: any) => {
                        setStreet(e.target.value)
                        setStreetInputSkipped(!e.target.value)
                      }}
                      onBlur={(e: any) => {
                        adress.onBlur(e)
                        setStreetInputSkipped(true)
                      }}
                    />
                  </Col>
                </Row>
                {
                  (adress.isDirty && isStreetInputSkipped) &&
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
                      isInvalid={isHomeInputSkipped}
                      onChange={(e: any) => {
                        setHomeNumber(e.target.value)
                        setHomeInputSkipped(!e.target.value)
                      }}
                      onBlur={(e: any) => {
                        home.onBlur(e)
                        setHomeInputSkipped(true)
                      }}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      placeholder='Корпус'
                      defaultValue={homePart}
                      onChange={(e: any) => setHomePart(e.target.value)}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      required
                      placeholder='Квартира'
                      defaultValue={flat}
                      onChange={(e: any) => setFlat(e.target.value)}
                    />
                  </Col>
                </Row>
              </Form>
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

                isPaymentInputSkipped
              }
              onClick={
                (e) => {
                  !paymentMethod && setPaymentInputSkipped(true)
                  !street && setStreetInputSkipped(true)

                  if (paymentMethod &&
                    !isTimeInvalid

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
