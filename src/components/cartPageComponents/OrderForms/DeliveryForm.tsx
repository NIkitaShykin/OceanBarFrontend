import React, {useState} from 'react'
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

import './OrderForms.scss'

const DeliveryForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date())

  const timeSlots: Array<string> = [
    '16:00 - 18:00',
    '18:00 - 20:00',
    '20:00 - 22:00',
  ]

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
              onChange={(date: Date) => setSelectedDate(date)}
              required
              value={selectedDate}
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
              <Form.Select aria-label='Floating label select example'>
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
            <span>3</span>
          </div>

          <div className='section-header'>
            <span>Укажите адрес</span>
          </div>

          <div className='section-content'>
            <Form>
              <Row className='mb-3'>
                <Col>
                  <Form.Control placeholder='Улица' required />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Control placeholder='Дом' required />
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
            >
              <ToggleButton
                id='tbg-radio-1'
                value='cash'
                variant='outline-warning'
              >
                Наличными
              </ToggleButton>
              <ToggleButton
                id='tbg-radio-2'
                value='card-online'
                variant='outline-warning'
              >
                Картой онлайн
              </ToggleButton>
              <ToggleButton
                id='tbg-radio-3'
                value='card-at-the-restaurant'
                variant='outline-warning'
              >
                Картой на месте
              </ToggleButton>
            </ToggleButtonGroup>
          </div>
        </div>

        <div className='form-separation'></div>
      </div>

      <div className='form-section'>
        <div className='form-buttons'>
          <Button variant='outline-secondary mx-2'>Отмена</Button>
          <Button variant='outline-warning'>Далее</Button>
        </div>
      </div>
    </div>
  )
}

export default DeliveryForm
