import React, {ChangeEvent, useState} from 'react'
import DatePicker from 'react-date-picker'
import {
  Form,
  FloatingLabel,
  Button,
  ToggleButton,
  ToggleButtonGroup
} from 'react-bootstrap'

import './OrderForms.scss'

interface ITakeawayFormProps {
  handleRadioValueClearance: (value: string) => void
}

const TakeawayForm: React.FC<ITakeawayFormProps> =
  ({handleRadioValueClearance}) => {
    const [date, setDate] = useState(new Date())
    const [timeSlot, setTimeSlot] = useState('')
    const [paymentMethod, setPaymentMethod] = useState('')
    const [isTimeInputSkipped, setTimeInputSkipped] = useState(false)
    const [isPaymentInputSkipped, setPaymentInputSkipped] = useState(false)

    const useInput = () => {
      const [isDirty, setDirty] = useState(false)

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
      '16:00 - 16:30',
      '16:30 - 17:00',
      '17:00 - 17:30',
      '17:30 - 18:00',
      '18:00 - 18:30',
      '18:30 - 19:00',
      '19:00 - 19:30',
      '19:30 - 20:00',
      '20:00 - 20:30',
      '20:30 - 21:00',
      '21:00 - 21:30',
      '21:30 - 22:00',
    ]

    const clearCheckedOrderType = (checkedValue: string) => {
      handleRadioValueClearance(checkedValue)
    }

    return (
      <div className='takeaway-form shadow'>
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
                  aria-label='Floating label select example'
                  defaultValue={timeSlot}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    setTimeSlot(e.target.value)
                    !e.target.value ?
                      setTimeInputSkipped(true) :
                      setTimeInputSkipped(false)
                  }}
                  onBlur={(e) => time.onBlur(e)}
                  isInvalid={isTimeInputSkipped}
                >
                  <option value=''>Выбрать...</option>
                  {timeSlots.map((time, idx) => (
                    <option value={time} key={idx}>{time}</option>
                  ))}
                </Form.Select>
              </FloatingLabel>
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
                  onChange={(e) => setPaymentMethod(e.currentTarget.value)}
                >
                  Наличными
                </ToggleButton>
                <ToggleButton
                  id='tbg-radio-2'
                  value='card-online'
                  variant='outline-warning'
                  onChange={(e) => setPaymentMethod(e.currentTarget.value)}
                >
                  Картой онлайн
                </ToggleButton>
                <ToggleButton
                  id='tbg-radio-3'
                  value='card-at-the-restaurant'
                  variant='outline-warning'
                  onChange={(e) => setPaymentMethod(e.currentTarget.value)}
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
                !date || isTimeInvalid || isPaymentInputSkipped
              }
              onClick={
                () => {
                  if (!paymentMethod) {
                    setPaymentInputSkipped(true)
                  }
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

export default TakeawayForm
