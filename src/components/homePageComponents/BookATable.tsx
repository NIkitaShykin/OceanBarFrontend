import React from 'react'
import {Form} from 'react-bootstrap'

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
        <input
          type='date'
          id='start'
          name='trip-start'
          value='2021-10-01'
        ></input>
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
    </div>
  )
}
export default BookATable
