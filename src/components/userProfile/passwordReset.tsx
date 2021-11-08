
import {Form} from 'react-bootstrap'
import PasswordResetFrorm from './passwordReset/passwordResetForm'


const PasswordReset = () => {
  return (
    <div className='profile-block ml-md-auto'>
      <h2>
        Изменение пароля
      </h2>
      <div className='info-block'>

        <PasswordResetFrorm/>


        {/* <Form>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Control type='password' placeholder='Старый пароль' />
          </Form.Group>

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
        </Form> */}
      </div>
    </div>
  )
}

export default PasswordReset
