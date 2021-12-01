import {useState} from 'react'
import {ApiUser} from '../../../api/ApiUser'
import {UserType} from '../../../common/types/userTypes'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import {useSelector} from 'react-redux'
import {Form, Button, Modal} from 'react-bootstrap'
import {ValidationType} from '../../../common/types/userTypes'
import {useValidation} from '../../../utils/validation'
import Spinner from '../../Spinner/Spinner'
import Cookies from 'js-cookie'

const passwordResetForm = () => {
  const token = Cookies.get('token')
  const userPersonal =
   useSelector<AppStoreType, UserType>((state) => state.user.userProfile)

  const [authFailed, setAuthFailed] = useState(false)
  const [oldPassword, setOldPassword] = useState('')
  const [oldPassCorrect, setOldPassCorrect] = useState(false)
  const [retypeNewPass, setRetypeNewPass] = useState('')
  const [showOldPassError, setShowOldPassError] = useState(false)
  const [newPassIsEqual, setNewPassIsEqual] = useState(false)
  const [showEqualPassError, setShowEqualPassError] = useState(false)
  const [passSuccessChanged, setPassSuccessChanged] = useState(false)
  const [isLoading, setIsLoading] = useState(false)


  const oldPassChange = (e: any) => {
    setOldPassword(e.target.value)
    setShowOldPassError(false)
  }

  const oldPassCheck = (e: any) => {
    e.preventDefault()
    setIsLoading(true)
    ApiUser.checkUserPassword(
      token,
      {password: oldPassword, email: userPersonal.email}
    )
      .then((resp: any) =>{
        if (resp.status > 400) {
          throw new Error(resp.statusText)
        }
        // if (resp.data.token) {
        if (resp.data.accessToken) {
          setOldPassCorrect(true)
          setShowOldPassError(false)
        }
        setIsLoading(false)
      })
      .catch((error) => {
        console.log(error.response)
        setIsLoading(false)
        setOldPassCorrect(false)
        setShowOldPassError(true)
      })
  }

  const setNewPass = (e: any) => {
    if (!newPassIsEqual) {
      setShowEqualPassError(true)
      return
    }
    e.preventDefault()
    setIsLoading(true)
    ApiUser.changeUserPassword(
      token, userPersonal.id, {password: newUserPassword.password}
    )
      .then((resp: any) =>{
        if (resp.status > 400) {
          throw new Error(resp.statusText)
        }
        if (resp.statusText=='OK') {
          setPassSuccessChanged(true)
          setOldPassword('')
          setOldPassCorrect(false)
          setRetypeNewPass('')
          password.value='' // Не работает => как обнулить это значение???
          // или задиспатчить запрос за данными =>
          // перерисовать всю страницу ???
        }
        setIsLoading(false)
      })
      .catch((error) => {
        setIsLoading(false)
        console.log(error.response)
      })
  }

  const changeRetypeNewPass=(e: any)=>{
    setRetypeNewPass(e.target.value)
    setShowEqualPassError(false)

    if (e.target.value===newUserPassword.password &&
      e.target.value!=='') {
      setNewPassIsEqual(true)
    } else {
      setNewPassIsEqual(false)
    }
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

  const isPasswordInvalid = password.isDirty &&
   (password.isEmpty || password.minLengthError || password.maxLengthError ||
     password.passwordError)

  return (
    <div className='login-form'>
      { isLoading && <Spinner/> }
      <div className='container'>
        <Modal.Dialog className='shadow p-3 mb-5 bg-body rounded'>

          <Modal.Body>
            <Form className='my-3' style={{width: '100%'}}>

              {passSuccessChanged &&
              <div
                style={{display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <h4>Пароль успешно изменен</h4>
                <Button
                  className='btn btn-outline-warning offset-md-0'
                  variant='outline-warning'
                  type='submit'
                  onClick={() => setPassSuccessChanged(false)}
                >
             Ok
                </Button>
              </div>}

              {!passSuccessChanged &&
              <>
                {!oldPassCorrect &&<><h4>Подтвердите старый пароль</h4><br/></>}
                <Form.Floating className='mb-3 mx-3'>
                  {!oldPassCorrect &&<>
                    <Form.Control
                      id='userOldPassword'
                      disabled={oldPassCorrect}
                      type='password'
                      placeholder='password'
                      value={oldPassword}
                      onChange={(e) => oldPassChange(e)}
                    />
                    <label htmlFor='userOldPassword'>Старый пароль</label>
                    {(showOldPassError) &&
                 <div className='error'>
                  Вы ввели не верный пароль </div>
                    }
                  </>}

                  { !oldPassCorrect && <>
                    <Modal.Footer className='justify-content-center border-0'>
                      <br/><br/><br/>
                      <Button
                        className='btn btn-outline-warning offset-md-4'
                        variant='outline-warning'
                        type='submit'
                        onClick={(e) => oldPassCheck(e)}
                      >
              Проверить
                      </Button>
                    </Modal.Footer>
                  </>}

                </Form.Floating>

              </>}


              {oldPassCorrect &&<><h4>Введите новый пароль</h4><br/></>}
              { oldPassCorrect &&
              <>
                <Form.Floating className='mb-3 mx-3'>
                  <Form.Control
                    id='userNewPassword'
                    disabled={!oldPassCorrect}
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
                    disabled={!oldPassCorrect}
                    type='password'
                    placeholder='password'
                    value={retypeNewPass}
                    onChange={(e) => changeRetypeNewPass(e)}
                  />
                  <label htmlFor='userAgainNewPassword'>
                  Повторите новый пароль
                  </label>

                  {(!newPassIsEqual && showEqualPassError) &&
                     (retypeNewPass!=='') &&
                <div className='error'>
                  Пароли не совпадают
                </div>
                  }
                </Form.Floating>

              </>}

            </Form>
          </Modal.Body>

          { oldPassCorrect && <>
            <Modal.Footer className='justify-content-center border-0'>
              <Button
                className='btn btn-outline-warning offset-md-0'
                disabled={isPasswordInvalid || retypeNewPass===''}
                variant='outline-warning'
                type='submit'
                onClick={(e) => setNewPass(e)}
              >
             Сохранить
              </Button>
            </Modal.Footer>
          </>}

        </Modal.Dialog>
      </div>
    </div>
  )
}

export default passwordResetForm


