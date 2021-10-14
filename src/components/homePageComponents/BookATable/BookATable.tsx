import React from 'react'
import {Button, Form} from 'react-bootstrap'

const BookATable = () => {
  return (
    <div className='book-a-table'>
      <h2>Забронируйте стол</h2>
      <Form>
        <Form.Control size='sm' type='text' placeholder='Имя Фамилия' />
        <br />
        <Form.Control size='sm' type='tel' placeholder='Номер телефона' />
      </Form>
      <br />
      <div className='time-date'>
        Дата
        <input type='date' id='start' name='trip-start'></input>
        Время
        <input
          type='time'
          id='appt'
          name='appt'
          min='09:00'
          max='18:00'
          required
        ></input>
      </div>
      <Button className='menu-btn' type='submit' variant='secondary'>
        <span className='menu-text-main-page'>Забронировать</span>
      </Button>
    </div>
  )
}
export default BookATable
