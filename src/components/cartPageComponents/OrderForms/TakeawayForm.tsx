import React, {ChangeEvent, useState} from 'react'
import DatePicker from 'react-date-picker'
import {
  Form,
  FloatingLabel,
  Button,
  ToggleButton,
  ToggleButtonGroup
} from 'react-bootstrap'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import {addOrder} from '../../../redux/actions'
import totalSum from '../totalSum'

import './OrderForms.scss'

interface ITakeawayFormProps {
  handleRadioValueClearance: (value: string) => void
}

const TakeawayForm: React.FC<ITakeawayFormProps> =
  ({handleRadioValueClearance}) => {
    const history = useHistory()
    const [date, setDate] = useState<Date>(new Date())
    const [timeSlot, setTimeSlot] = useState<string>('')
    const [paymentMethod, setPaymentMethod] = useState<string>('')
    const [isTimeInputSkipped, setTimeInputSkipped] = useState<boolean>(false)
    const [isPaymentInputSkipped, setPaymentInputSkipped] =
      useState<boolean>(false)

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
      '10:00 - 12:00',
      '12:00 - 14:00',
      '14:00 - 16:00',
      '16:00 - 18:00',
      '18:00 - 20:00',
      '20:00 - 22:00',
    ]

    const clearCheckedOrderType = (checkedValue: string) => {
      handleRadioValueClearance(checkedValue)
    }

    const sum = totalSum()
    const dispatch = useDispatch()
    const handleSubmit = (e: React.MouseEvent<Element, MouseEvent>) => {
      dispatch(addOrder({
        date: date.toLocaleDateString(),
        time: timeSlot,
        type: 'Навынос',
        paymentType: paymentMethod,
        price: sum
      }))
      history.push('/confirmation')
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
                label='Самовывоз возможен с 10:00 до 22:00'
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
                  <option value=''>Выбрать...</option>
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
                    setPaymentInputSkipped(false)
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
                    setPaymentInputSkipped(false)
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
                    setPaymentInputSkipped(false)
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
                  if (paymentMethod && !isTimeInvalid) handleSubmit(e)
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
