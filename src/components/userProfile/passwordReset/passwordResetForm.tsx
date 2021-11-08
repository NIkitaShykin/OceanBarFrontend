import {useState} from 'react'
import {Form, Button, Modal} from 'react-bootstrap'
import {ValidationType} from '../../../common/types/userTypes'
import {useValidation} from '../../../utils/validation'




const passwordResetForm = () => {

  const [authFailed, setAuthFailed] = useState(false)
  const [oldPassword, setOldPassword] = useState('')

  const oldPassChange = (e: any) => {
    setOldPassword(e.target.value)
  }


  const oldPassOnBlur = (e: any) => {
  }

    const useInput = (initialValue: string, validations: ValidationType) => {
    const [value, setValue] = useState(initialValue)
    const [isDirty, setDirty] = useState(false)
    const valid = useValidation(value, validations)

    const onChange = (e: any) => {
      setValue(e.target.value)
      setAuthFailed(false)
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

  const password = useInput('', {
    isEmpty: true,
    minLengthError: 8,
    maxLengthError: 15,
    passwordError: true,
  })

  const isPasswordInvalid = password.isDirty && (password.isEmpty || password.minLengthError || password.maxLengthError || password.passwordError)


  const handleSubmit = (e: any) => {
  }

  return (

    <div className='login-form'>
      <div className='container'>
        <Modal.Dialog className='shadow p-3 mb-5 bg-body rounded'>
          {
            authFailed &&
          <div className='error validation'>
            Адрес электронной почты или пароль введен с ошибкой.
            Пожалуйста, попробуйте еще раз.
          </div>
          }

          <Modal.Body>
            <Form className='my-3' style={{width: '100%'}}>
              <Form.Floating className='mb-3 mx-3'>
                <Form.Control
                  id='userOldPassword'
                  type='password'
                  placeholder='password'
                  value={oldPassword}
                  onChange={(e) => oldPassChange(e)}
                  onBlur={(e) => oldPassOnBlur(e)}
                />
                <label htmlFor='userPassword'>Старый пароль</label>
                {
                  isPasswordInvalid &&
                <div className='error'>
                  Пароль должен содержать 8-15 символов
                  (включая 1 символ в верхнем регистре,
                  1 символ в нижнем регистре и 1 цифру)
                  без пробелов и специальных знаков (#, %, &, !, $, etc.).
                </div>
                }
              </Form.Floating>

              <Form.Floating className='mb-3 mx-3'>
                <Form.Control
                  id='userNewPassword'
                  type='password'
                  placeholder='password'
                  value={!authFailed ? password.value : ''}
                  onChange={(e) => password.onChange(e)}
                  onBlur={(e) => password.onBlur(e)}
                />
                <label htmlFor='userPassword'>Новый пароль</label>
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

              <Form.Floating className='mx-3'>
                <Form.Control
                  id='userAgainNewPassword'
                  type='password'
                  placeholder='password'
                  value={!authFailed ? password.value : ''}
                  onChange={(e) => password.onChange(e)}
                  onBlur={(e) => password.onBlur(e)}
                />
                <label htmlFor='userPassword'>Повторите новый пароль</label>
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

          <Button className='btn btn-outline-warning offset-md-8'
            style={{width: '100px'}}
            // disabled={
            //   !email.inputValid ||
            //    authFailed}
            variant='outline-warning'
            type='submit'
            onClick={(e) => handleSubmit(e)}
          >
             Сохранить
          </Button>


          <Modal.Footer className='justify-content-center border-0'>
          </Modal.Footer>


        </Modal.Dialog>
      </div>
    </div>
  )
}

export default passwordResetForm