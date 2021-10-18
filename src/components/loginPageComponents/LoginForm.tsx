import React, {useState} from 'react'
import {Form, Button, Modal, CloseButton} from 'react-bootstrap'

import {useValidation} from '../../utils/validation'

import './LoginForm.scss'

const LogInForm = () => {
  const useInput = (initialValue: string, validations: any) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e: any) => {
      setValue(e.target.value)
    }

    const onBlur = (e: any) => {
      setDirty(true)
    }

    return {
      value,
      onChange,
      onBlur,
      isDirty,
      ...valid
    }
  }

  const email = useInput('', {
    isEmpty: true,
    minLengthError: 8,
    maxLengthError: 325,
    emailError: true,
  })

  const password = useInput('', {
    isEmpty: true,
    minLengthError: 8,
    maxLengthError: 15,
    passwordError: true,
  })

  // eslint-disable-next-line max-len
  const isEmailInvalid = email.isDirty && (email.isEmpty || email.minLengthError || email.maxLengthError || email.emailError)
  // eslint-disable-next-line max-len
  const isPasswordInvalid = password.isDirty && (password.isEmpty || password.minLengthError || password.maxLengthError || password.passwordError)

  const handleClose = () => {
    window.history.go(-1)
  }

  return (
    <div className='login-form'>
      <div className='container'>
        <Modal.Dialog className='shadow p-3 mb-5 bg-body rounded'>
          <Modal.Header className='border-0'>
            <Modal.Title className='form-title'>Вход</Modal.Title>
            <CloseButton onClick={() => handleClose()}/>
          </Modal.Header>

          <Modal.Body>
            <Form className='my-3'>
              <Form.Floating className='mb-3 mx-3'>
                <Form.Control
                  id='userEmail'
                  type='email'
                  placeholder='name@example.com'
                  value={email.value}
                  onChange={(e) => email.onChange(e)}
                  onBlur={(e) => email.onBlur(e)}
                />
                <label htmlFor='userEmail'>Электронная почта</label>
                {
                  isEmailInvalid &&
                  <div className='error'>
                    Электронная почта должна быть в формате xxx@yyy.zzz,
                    без специальных символов (#, %, &, !, $, etc.).
                    Обязательно к заполнению.
                  </div>
                }
              </Form.Floating>

              <Form.Floating className='mx-3'>
                <Form.Control
                  id='userPassword'
                  type='password'
                  placeholder='password'
                  value={password.value}
                  onChange={(e) => password.onChange(e)}
                  onBlur={(e) => password.onBlur(e)}
                />
                <label htmlFor='userPassword'>Пароль</label>
                {
                  isPasswordInvalid &&
                  <div className='error'>
                    Пароль должен содержать 8-15 символов
                    (включая 1 символ в верхнем регистре,
                    1 символ в нижнем регистре и 1 цифру)
                    без пробелов и специальных знаков (#, %, &, !, $, etc.).
                    Обязательно к заполнению.
                  </div>
                }
              </Form.Floating>
            </Form>
          </Modal.Body>

          <Modal.Footer className='justify-content-center border-0'>
            <Button
              variant='outline-secondary'
              onClick={() => handleClose()}
            >
              Отменить
            </Button>
            <Button
              disabled={!email.inputValid || !password.inputValid}
              variant='outline-warning'
              type='submit'
            >
              Зарегистрироваться
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  )
}

export default LogInForm
