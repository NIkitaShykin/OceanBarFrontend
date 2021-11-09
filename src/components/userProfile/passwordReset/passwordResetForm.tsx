import {useState} from 'react'
// import {useHistory} from 'react-router-dom'
import {ApiUser} from '../../../api/ApiUser'
// import {ApiDish} from '../../../api/ApiDish'
import {UserType} from '../../../common/types/userTypes'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import {useSelector} from 'react-redux'
import {Form, Button, Modal} from 'react-bootstrap'
import {ValidationType} from '../../../common/types/userTypes'
import {useValidation} from '../../../utils/validation'
import Cookies from 'js-cookie'

const passwordResetForm = () => {
  const userData =
  useSelector<AppStoreType, any>((state) => state.auth)
  console.log(userData)

  const [authFailed, setAuthFailed] = useState(false)
  const [oldPassword, setOldPassword] = useState('')
  const [oldPassCorrect, setOldPassCorrect] = useState(false)
  const [retypeNewPass, setRetypeNewPass] = useState<string>('')
  const [showOldPassError, setShowOldPassError] = useState(false)
  const [newPassIsEqual, setNewPassIsEqual] = useState(false)

  const oldPassChange = (e: any) => {
    setOldPassword(e.target.value)
  }

  const token = Cookies.get('token')

  const oldPassOnBlur = (e: any) => {
    ApiUser.checkUserPassword(
      token,
      {password: oldPassword, email: '7656077@mail.ru'}
    )
      .then((resp: any) =>{
        if (resp.status > 400) {
          throw new Error(resp.statusText)
        }
        if (resp.data.token) {
          setOldPassCorrect(true)
          setShowOldPassError(false)
        }
      })
      .catch((error) => {
        console.log(error.response)
        setOldPassCorrect(false)
        setShowOldPassError(true)
      })
  }
// ---------------------------------------------------------
  const setNewPass = (e: any) => {
    e.preventDefault()
    ApiUser.changeUserPassword(
      token, {password: oldPassword}
    )
      .then((resp: any) =>{
        console.log(resp)
        console.log(resp)
        console.log(resp)
        console.log(resp)
        if (resp.status > 400) {
          throw new Error(resp.statusText)
        }
        if (resp.data.token) {
        //  show popup
        }
      })
      .catch((error) => {
        console.log(error.response)
        //  show popup error
        // clear fields
      })
  }
// ---------------------------------------------------------


  const changeRetypeNewPass=(e: any)=>{
    setRetypeNewPass(e.target.value)

    if (e.target.value===newUserPassword.password &&
      e.target.value!=='') {
      setNewPassIsEqual(true)
    } else {
      setNewPassIsEqual(false)
    }
  }

  const onBlureRetypeNewPass = (e: any) => {
    console.log('remove mouse from retype')
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

  const newUserPassword = {
    password: password.value,
  }

  // if (retypeNewPass===newUserPassword.password &&
  //    retypeNewPass!=='') {
  //   if (!newPassIsEqual) {
  //     setNewPassIsEqual(true)
  //     console.log('pass is Equal')
  //   }
  // }

  // eslint-disable-next-line max-len
  const isPasswordInvalid = password.isDirty && (password.isEmpty || password.minLengthError || password.maxLengthError || password.passwordError)

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
                <label htmlFor='userOldPassword'>Старый пароль</label>
                {showOldPassError && <div className='error'>
                  Вы ввели не верный пароль </div>
                }
                {oldPassCorrect && <div style={{color: 'green'}}>
                  Пароль верный </div>}
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
                <label htmlFor='userNewPassword'>Новый пароль</label>
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
                  value={retypeNewPass}
                  onChange={(e) => changeRetypeNewPass(e)}
                  onBlur={(e) => onBlureRetypeNewPass(e)}
                />
                <label htmlFor='userAgainNewPassword'>
                  Повторите новый пароль
                </label>
                {
                  !newPassIsEqual && (retypeNewPass!=='') &&
                <div className='error'>
                  Пароли не совподают
                </div>
                }
              </Form.Floating>
            </Form>
          </Modal.Body>

          <Button className='btn btn-outline-warning offset-md-8'
            style={{width: '100px'}}
            disabled={!oldPassCorrect || isPasswordInvalid}
            variant='outline-warning'
            type='submit'
            onClick={(e) => setNewPass(e)}
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


