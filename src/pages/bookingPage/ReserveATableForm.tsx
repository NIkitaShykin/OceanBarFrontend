import React, {ChangeEvent, useState} from 'react'
import DatePicker from 'react-date-picker'
import {Form, FloatingLabel, Button} from 'react-bootstrap'
// import {useHistory} from 'react-router-dom'

import './OrderForms.scss'


interface IReserveATableFormProps {
  handleRadioValueClearance: (value: string) => void
}

// появляется сообщение :
// «Спасибо за вашу заявку ! Администратор свяжется с вами в течение 10 минут»

const ReserveATableForm: React.FC<IReserveATableFormProps> =
  ({handleRadioValueClearance}) => {
    // const history = useHistory()
    const [date, setDate] = useState<Date>(new Date())
    const [timeSlot, setTimeSlot] = useState<string>('')
    const [tableSize, setTableSize] = useState<string>('')
    const [isTimeInputSkipped, setTimeInputSkipped] = useState<boolean>(false)
    const [isTableInputSkipped, setTableInputSkipped] = useState<boolean>(false)
    const [userNamer, setUserNamer] = useState<string>('')
    const [userPhone, setUserPhone] = useState<string>('')

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
      '10:00 - 11:00',
      '11:00 - 12:00',
      '12:00 - 13:00',
      '13:00 - 14:00',
      '14:00 - 15:00',
      '15:00 - 16:00',
      '16:00 - 17:00',
      '17:00 - 18:00',
      '18:00 - 19:00',
      '19:00 - 20:00',
      '20:00 - 21:00',
      '21:00 - 22:00',
    ]

    // const handleSubmit =
    //   ((e: any) =>
    //     history.push('/confirmation'))

    const reserveTable = () => {
      // handleRadioValueClearance()
      console.log('reserve table')
    }

    const enterName = (e:any) => {
      setUserNamer(e.target.value)
      console.log(e.target.value)
    }

    const enterPhone = (e:any) => {
      setUserPhone(e.target.value)
      console.log(e.target.value)
    }

    return (
      <div className='reserve-a-table-form-booking shadow'>
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
                    setTableInputSkipped(!e.target.value)
                  }}
                  onBlur={(e) => table.onBlur(e)}
                  isInvalid={isTableInputSkipped}
                >
                  <option value=''>Выбрать...</option>
                  {tableSizes.map((size, idx) => (
                    <option
                      value={size}
                      key={size}
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
                label='Бронь столика доступна с 10:00 до 22:00'
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
              <span>Контактные данные</span>
            </div>

            <div className='section-content payment-types'>


              {/* <Form.Group controlId='formBasicCheckbox'> */}
              <Form.Floating className='mx-1'>

                <Form.Control
                  id='userName'
                  // disabled={!oldPassCorrect}
                  type='text'
                  placeholder='password'
                  value={userNamer}
                  onChange={(e) => enterName(e)}
                />
                <label htmlFor='userName'>
                  Введите имя
                </label>
              </Form.Floating>

              <Form.Floating className='mx-1 my-3'>
                <Form.Control
                  id='userPhones'
                  // disabled={!oldPassCorrect}
                  type='phones'
                  placeholder='phones'
                  value={userPhone}
                  onChange={(e) => enterPhone(e)}
                />
                <label htmlFor='userPhones'>
                  Введите номер телефона
                </label>
              </Form.Floating>

            </div>
          </div>

          <div className='form-separation'></div>
        </div>

        <div className='form-section'>
          <div className='form-buttons'>
            {/* <Modal.Footer className='justify-content-center border-0'> */}
            <Button
              className='btn btn-outline-warning offset-md-0'
              onClick={reserveTable}
              style={{width: '140px'}}
              variant='outline-warning'
              disabled={
                isTableInvalid ||
                isTimeInvalid ||
                !date
              }
            >
              Забронировать
            </Button>

            {/* <div
                style={{
                  borderRadius: '4px',
                  border: '2px solid #fdd008',
                  color: 'gray',
                  height: '25px',
                  width: '80px',
                  textAlign: 'center',
                  cursor: 'pointer',
                  lineHeight: '20px',
                }}
                onClick={reserveTable}>
                    Готово
              </div> */}
            {/* </Modal.Footer> */}
          </div>
        </div>
      </div>
    )
  }

export default ReserveATableForm
