import React from 'react'
import {useHistory} from 'react-router-dom'
import {useAppSelector} from '../../redux/hooks'
import {Card, Button} from 'react-bootstrap'

const SignUpSuccess = () => {
  const history = useHistory()
  const tempAuthUlr = useAppSelector((state) => state.auth.tempAuthUrl)

  const handleClick = () => {
    history.push('/')
  }
  return (
    <div className='registration-form'>
      <div className='container'>
        <Card className='shadow p-3 my-5 bg-body rounded'>
          <Card.Body>
            <Card.Title>Вы успешно зарегистрированы!</Card.Title>
            <Card.Text className='mb-5'>
              {/* На Вашу почту было отправлено письмо с информацией о том,
              как активировать аккаунт. */}
              Перейдите по этой ссылке, чтобы активировать свой аккаунт:
              <span> </span>
              {tempAuthUlr} (тут будет ссылка :))
            </Card.Text>
            <Button
              variant='outline-warning'
              type='button'
              onClick={() => handleClick()}
            >
              Ok
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default SignUpSuccess
