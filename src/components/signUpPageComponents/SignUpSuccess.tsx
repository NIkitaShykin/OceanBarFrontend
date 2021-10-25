import React from 'react'
import {useHistory} from 'react-router-dom'
import {Card, Button} from 'react-bootstrap'

// import {useSelector} from 'react-redux'

const SignUpSuccess = () => {
  const history = useHistory()
  // const tempAuthUlr = useSelector((state) => state.tempAuthUrl) //
  // console.log(`temp ${tempAuthUlr}`) //

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
              {/* {tempAuthUlr} */}
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
