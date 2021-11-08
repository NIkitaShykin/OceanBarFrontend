import {useState, ChangeEvent} from 'react'
import {UserType} from '../../../common/types/userTypes'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import {useSelector} from 'react-redux'
import EditableSpan from './editableSpan/editableSpan'
import {Form, Modal} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {setPersonalUsersData} from '../../../redux/reducers/userReducer'

type PropsType = {
  changeStatus: (status:boolean) => void
}

const shiftingPersonal = (props:PropsType) => {
  const user =
    useSelector<AppStoreType, UserType>((state) => state.user)
  const dispatch = useDispatch()

  const [userName, setUserName] = useState<string>(user.name)
  const [userSecondname, setUserSecondname] =
   useState<string>(user.secondname)
  const [userPhone, setUserPhone] = useState<string>(user.phone)
  const [userEmail, setUserEmail] = useState<string>(user.email)

  const setNameCallback=(e: ChangeEvent<HTMLInputElement>)=>{
    setUserName(e.target.value)
  }
  const setSecondNameCallback=(e: ChangeEvent<HTMLInputElement>)=>{
    setUserSecondname(e.target.value)
  }
  const setPhoneCallback=(e: ChangeEvent<HTMLInputElement>)=>{
    setUserPhone(e.target.value)
  }
  const setEmailCallback=(e: ChangeEvent<HTMLInputElement>)=>{
    setUserEmail(e.target.value)
  }

  const userData={
    userName: userName,
    userSecondname: userSecondname,
    userPhone: userPhone,
    userEmail: userEmail
  }

  const clickHandler=()=>{
    props.changeStatus(true)
    dispatch(
      setPersonalUsersData(userData)
    )
  }

  return (
    <div >
      <Modal.Dialog className='shadow p-3 mb-5 bg-body rounded'>
        <Modal.Header className='border-0'>
          <Modal.Title className='form-title'>
            Изменение личных данных
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className='my-1' style={{width: '100%'}}>
            <EditableSpan
              valueName={userName}
              valueType='Имя'
              setNameCallback={setNameCallback}
            />
            <EditableSpan
              valueName={userSecondname}
              valueType='Фамилия'
              setNameCallback={setSecondNameCallback}
            />
            <EditableSpan
              valueName={userPhone}
              valueType='Телефон'
              setNameCallback={setPhoneCallback}
            />
            <EditableSpan
              valueName={userEmail}
              valueType='Почта'
              setNameCallback={setEmailCallback}
            />
          </Form>
          <button
            className='btn btn-outline-warning offset-md-10'
            onClick={()=>{
              clickHandler()
            }}
          >
        Сохранить
          </button>
        </Modal.Body>
      </Modal.Dialog>
    </div>

  )
}

export default shiftingPersonal
