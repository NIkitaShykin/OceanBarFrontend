import {useState} from 'react'
import {ApiAuth, TOKEN_EXPIRATION_TIME} from '../../../api/ApiAuth'
import AdminHeader from './AdminHeader'
import ScrollToTop from '../../../components/scrollToTop/ScrollToTop'
import {Form, Button} from 'react-bootstrap'
import Cookies from 'js-cookie'

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('')
  const [login, setLogin] = useState<string>('')
  const [passIsWrong, setPassIsWrong] = useState<boolean>(false)

  const inputPassword=(e:any)=>{
    setPassword(e.target.value)
  }

  const inputLogin=(e:any)=>{
    setLogin(e.target.value)
  }

  const checkPasword=()=>{
    ApiAuth.login(login, password)
      .then((response) => {
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
            setIsAdmin(true)
            setPassIsWrong(false)
          } else {
            setIsAdmin(false)
            setPassIsWrong(true)
            // setIsLoading(false)
            throw new Error(response.statusText)
          }
        } catch (error) {
          setIsAdmin(false)
          setPassIsWrong(true)
          console.log(error)
        }
      })
      .catch((error) => {
        setIsAdmin(false)
        setPassIsWrong(true)
      })
  }

  return (
    <div>
      <ScrollToTop />
      <br/>
      <h2 style={{padding: '20px', color: 'black'}}>
             Панель администратора
      </h2>

      {isAdmin?
        null :
        <>
          <h4 style={{padding: '20px', color: 'black'}}>
             для входа:
          </h4>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <div>
              <h5> введите логин администратора</h5>
              <Form.Control
                style={{width: '400px'}}
                id='userName'
                type='password'
                value={login}
                onChange={(e) => inputLogin(e)}
              />
              <br/>
              <h5> введите пароль администратора</h5>
              <Form.Control
                style={{width: '400px'}}
                id='userName'
                type='password'
                value={password}
                onChange={(e) => inputPassword(e)}
              />
              <br/>
            </div>
          </div>
          <Button
            onClick={()=>checkPasword()}
            style={{width: '160px'}}
            variant='outline-warning'
          >
              Вход
          </Button>
        </>}

      {passIsWrong? <div
        style={{color: 'red', marginTop: '40px'}}>
        <h3>пароль неверный</h3>
      </div> : null }

      {isAdmin ?
        <AdminHeader/>:
        <div style={{height: '200px'}}>
        </div>}

    </div>
  )
}

export default Admin
