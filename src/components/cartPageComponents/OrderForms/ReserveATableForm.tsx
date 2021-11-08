import React, {ChangeEvent, useState} from 'react'
import DatePicker from 'react-date-picker'
import {
  Form,
  FloatingLabel,
  Button
} from 'react-bootstrap'

import './OrderForms.scss'

interface IReserveATableFormProps {
  handleRadioValueClearance: (value: string) => void
}

const ReserveATableForm: React.FC<IReserveATableFormProps> =
  ({handleRadioValueClearance}) => {
    const [date, setDate] = useState(new Date())
    const [timeSlot, setTimeSlot] = useState('')
    const [tableSize, setTableSize] = useState('')
    const [ispaymentConfirmed, setPaymentConfirmed] = useState(false)
    const [isTimeInputSkipped, setTimeInputSkipped] = useState(false)
    const [isTableInputSkipped, setTableInputSkipped] = useState(false)
    const [isPaymentSkipped, setPaymentSkipped] = useState(false)

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

    const table = useInput()
    const time = useInput()

    const isTimeInvalid =
      !time.isDirty ||
      time.isDirty && isTimeInputSkipped

    const isTableInvalid =
      !table.isDirty ||
      table.isDirty && isTableInputSkipped

    const tableSizes: Array<string> = [
      'двоих гостей',
      'четверых гостей',
      'шестерых гостей',
      'восьмерых гостей',
      'десятерых гостей',
    ]

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
      <div className='reserve-a-table-form shadow'>
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
              <span>Количество гостей</span>
            </div>

            <div className='section-content'>
              <FloatingLabel
                controlId='floatingSelectGrid'
                label='Столик для:'
              >
                <Form.Select
                  aria-label='Floating label select example'
                  defaultValue={tableSize}
                  onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                    setTableSize(e.target.value)
                    !e.target.value ?
                      setTableInputSkipped(true) :
                      setTableInputSkipped(false)
                  }}
                  onBlur={(e) => table.onBlur(e)}
                  isInvalid={isTableInputSkipped}
                >
                  <option value=''>Выбрать...</option>
                  {tableSizes.map((size, idx) => (
                    <option
                      value={size}
                      key={idx}
                    >
                      {size}
                    </option>
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
              <span>4</span>
            </div>

            <div className='section-header'>
              <span>Оплата</span>
            </div>

            <div className='section-content payment-types'>
              <Form.Group className='mb-3' controlId='formBasicCheckbox'>
                <Form.Check
                  type='checkbox'
                  label='Я согласен оплатить заказ онлайн'
                  checked={ispaymentConfirmed}
                  onChange={
                    (e: any) => {
                      if (e.target.checked) {
                        setPaymentConfirmed(true)
                        setPaymentSkipped(false)
                      } else {
                        setPaymentConfirmed(false)
                        setPaymentSkipped(true)
                      }
                    }
                  }
                  isInvalid={isPaymentSkipped}
                />
              </Form.Group>
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
                isTableInvalid || isTimeInvalid || isPaymentSkipped || !date
              }
            >
              Далее
            </Button>
          </div>
        </div>
      </div>
    )
  }

export default ReserveATableForm
