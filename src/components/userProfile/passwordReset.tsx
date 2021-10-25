import React from 'react'
import { Button, Form } from 'react-bootstrap'

const PasswordReset = () => {
  return (
    <div className='profile-block ml-md-auto'>
      <h2>
        Изменение пароля
      </h2>
      <div className='info-block'>
        <Form>
          <Form.Group className='mb-3' controlId='formBasicPassword'>

            <Form.Control type='password' placeholder='Новый пароль' />
          </Form.Group>

          <Form.Group className='mb-3' controlId='formBasicPassword'>

            <Form.Control type='password' placeholder='Повторить пароль' />
          </Form.Group>

          <button
            type='submit'
            className='btn btn-outline-warning offset-md-10 disabled'>
            Сохранить
          </button>
        </Form>
      </div>
    </div>
  )
}

export default PasswordReset
