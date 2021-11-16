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
import {AddressSuggestions, DaDataSuggestion, DaDataAddress} from 'react-dadata'
import {useHistory} from 'react-router-dom'

import './OrderForms.scss'
import 'react-dadata/dist/react-dadata.css'

interface ITakeawayFormProps {
  handleRadioValueClearance: (value: string) => void
}

const DeliveryForm: React.FC<ITakeawayFormProps> =
  ({handleRadioValueClearance}) => {
    const history = useHistory()

    const [date, setDate] = useState<Date>(new Date())
    const [timeSlot, setTimeSlot] = useState<string>('')
    const [isTimeInputSkipped, setTimeInputSkipped] = useState<boolean>(false)

    const [paymentMethod, setPaymentMethod] = useState<string>('')
    const [isPaymentInputSkipped, setPaymentInputSkipped] =
      useState<boolean>(false)

    const [adress, setAdress] =
      useState<DaDataSuggestion<DaDataAddress> | undefined>()

    const token = '9ca4903b39a3e857c09d921ee7bd29a41e495a09'

    const useInput = () => {
      const [isDirty, setDirty] = useState<boolean>(false)

      const onBlur = (e: ChangeEvent<HTMLSelectElement>) => {
        setDirty(true)
      }

      return {
        onBlur,
        isDirty
      }
    }

    const time = useInput()

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

    // @ts-ignore
    const handleSubmit = ((e)=> history.push('/confirmation'))

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
                format='d-MM-y'
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
                  name='time'
                  aria-label='Floating label select example'
                  defaultValue={timeSlot}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    setTimeSlot(e.target.value)
                    setTimeInputSkipped(false)
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
                    <AddressSuggestions
                      token={token}
                      value={adress}
                      onChange={setAdress}
                      filterLocations={[
                        {'country': 'Беларусь',
                          'city': 'Минск',
                          'restrict_value': true}
                      ]}
                      hintText='Выберите вариант или продолжите ввод'
                      count={8}
                      delay={500}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Control
                      placeholder='Дом'
                      required
                      name='house'
                    />
                  </Col>
                  <Col>
                    <Form.Control placeholder='Корпус' />
                  </Col>
                  <Col>
                    <Form.Control placeholder='Квартира' />
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
                !date ||
                isTimeInvalid ||
                isPaymentInputSkipped
              }
              onClick={
                (e) => {
                  !paymentMethod && setPaymentInputSkipped(true)

                  !isTimeInvalid && setTimeInputSkipped(true)

                  handleSubmit(e)
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
