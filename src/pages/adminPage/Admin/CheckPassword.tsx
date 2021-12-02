import {useState} from 'react'
import AdminHeader from './AdminHeader'
import ScrollToTop from '../../../components/scrollToTop/ScrollToTop'
import {Form, Button} from 'react-bootstrap'

const Admin = () => {
  const [isAdmin, setIsAdmin] = useState<boolean>(false)
  const [password, setPassword] = useState<string>('admin')
  const [passIsWrong, setPassIsWrong] = useState<boolean>(false)

  const inputPassword=(e:any)=>{
    setPassword(e.target.value)
  }

  const checkPasword=()=>{
    if (password==='admin') {
      setIsAdmin(true)
      setPassIsWrong(false)
    } else {
      setIsAdmin(false)
      setPassIsWrong(true)
    }
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
             для входа введите пароль администратора
          </h4>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <Form.Control
              style={{width: '400px'}}
              id='userName'
              type='password'
              value={password}
              onChange={(e) => inputPassword(e)}
            />
            <Button
              onClick={()=>checkPasword()}
              style={{width: '160px'}}
              variant='outline-warning'
            >
              Вход
            </Button>
          </div>
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
