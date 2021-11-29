import React, {useState, ChangeEvent} from 'react'
import {useHistory} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import Cookies from 'js-cookie'
import {Button, CloseButton, Form, Modal} from 'react-bootstrap'

import Spinner from '../Spinner/Spinner'

import {ApiAuth, TOKEN_EXPIRATION_TIME} from '../../api/ApiAuth'
import {ApiCart} from '../../api/ApiCart'

import {addDishToCart, logIn, getUserAC} from '../../redux/actions'

import {useValidation} from '../../utils/validation'
import {mapApiDishToDishInCart} from '../../utils/typeMappers'

import {ValidationType} from '../../common/types/userTypes'
import {ApiDish} from '../../common/types/dishesType'

import './LoginForm.scss'

type FormControlElement = HTMLInputElement | HTMLTextAreaElement

const LogInForm = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const [authFailed, setAuthFailed] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const useInput = (initialValue: string, validations: ValidationType) => {
    const [value, setValue] = useState<string>(initialValue)
    const [isDirty, setDirty] = useState<boolean>(false)
    const valid = useValidation(value, validations)

    const onChange = (e: ChangeEvent<FormControlElement>) => {
      setValue(e.target.value)
      setAuthFailed(false)
    }

    const onBlur = (e: ChangeEvent<FormControlElement>) => {
      setDirty(true)
    }

    return {
      value,
      onChange,
      onBlur,
      isDirty,
      ...valid,
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

  const user = {
    email: email.value,
    password: password.value,
  }

  const isEmailInvalid =
    email.isDirty &&
    (email.isEmpty ||
      email.minLengthError ||
      email.maxLengthError ||
      email.emailError)

  const isPasswordInvalid =
    password.isDirty &&
    (password.isEmpty ||
      password.minLengthError ||
      password.maxLengthError ||
      password.passwordError)

  const handleClose = () => {
    history.push('/')
  }

  const handleSubmit = (e: React.MouseEvent<Element, MouseEvent>) => {
    e.preventDefault()
    setIsLoading(true)

    ApiAuth.login(user.email, user.password).then((response) => {
      try {
        if (response.status >= 200 && response.status < 300) {
          Cookies.set(
            'token',
            response.data.accessToken,
            {expires: TOKEN_EXPIRATION_TIME}
          )
          Cookies.set(
            'refreshToken',
            response.data.refreshToken,
            {expires: TOKEN_EXPIRATION_TIME}
          )
          setIsLoading(false)
          dispatch(logIn(response.data.data))
          dispatch(getUserAC(response.data.data))
          history.push('/')
        } else {
          setIsLoading(false)
          throw new Error(response.statusText)
        }
      } catch (error) {
        console.log(error)
      }
    })
      .catch((error) => {
        setIsLoading(false)
        setAuthFailed(true)
      })
      .then(() => {
        ApiCart.getCart(Cookies.get('token')).then((resp) => {
          resp.data.cart.forEach((dish: ApiDish) => {
            dispatch(
              addDishToCart(mapApiDishToDishInCart(dish))
            )
          })
        })
      })
  }

  return (
    <div className='login-form'>
      <div className='container'>
        <Modal.Dialog className='shadow p-3 mb-5 bg-body rounded'>
          <Modal.Header className='border-0'>
            <Modal.Title className='form-title'>Вход</Modal.Title>
            <CloseButton onClick={() => handleClose()} />
          </Modal.Header>
          {isLoading && <Spinner />}
          {authFailed && (
            <div className='error validation'>
              Адрес электронной почты или пароль введен с ошибкой. Пожалуйста,
              попробуйте еще раз.
            </div>
          )}

          <Modal.Body>
            <Form className='my-3' style={{width: '100%'}}>
              <Form.Floating className='mb-3 mx-3'>
                <Form.Control
                  autoFocus
                  id='userEmail'
                  type='email'
                  placeholder='name@example.com'
                  value={email.value}
                  onChange={(e) => email.onChange(e)}
                  onBlur={(e) => email.onBlur(e)}
                />
                <label htmlFor='userEmail'>Электронная почта</label>
                {isEmailInvalid && (
                  <div className='error'>
                    Электронная почта должна быть в формате xxx@yyy.zzz, без
                    специальных символов (#, %, &, !, $, etc.). Обязательно к
                    заполнению.
                  </div>
                )}
              </Form.Floating>

              <Form.Floating className='mx-3'>
                <Form.Control
                  id='userPassword'
                  type='password'
                  placeholder='password'
                  value={!authFailed ? password.value : ''}
                  onChange={(e) => password.onChange(e)}
                  onBlur={(e) => password.onBlur(e)}
                />
                <label htmlFor='userPassword'>Пароль</label>
                {isPasswordInvalid && (
                  <div className='error'>
                    Пароль должен содержать 8-15 символов (включая 1 символ в
                    верхнем регистре, 1 символ в нижнем регистре и 1 цифру) без
                    пробелов и специальных знаков (#, %, &, !, $, etc.).
                    Обязательно к заполнению.
                  </div>
                )}
              </Form.Floating>
            </Form>
          </Modal.Body>

          <Modal.Footer className='justify-content-center border-0'>
            <Button
              variant='outline-secondary'
              type='button'
              onClick={() => handleClose()}
            >
              Отменить
            </Button>
            <Button
              disabled={!email.inputValid || !password.inputValid || authFailed}
              variant='outline-warning'
              type='submit'
              onClick={(e) => handleSubmit(e)}
            >
              Войти
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
    </div>
  )
}

export default LogInForm
