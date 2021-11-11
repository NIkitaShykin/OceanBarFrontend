import {useState, ChangeEvent} from 'react'
import {DeliveryAdressType} from '../../../common/types/userTypes'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import {useSelector} from 'react-redux'
import EditableSpan from './editableSpan/editableSpan'
import {Form, Modal} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {setUserDeliveryData} from '../../../redux/reducers/deliveryReducer'

type PropsType = {
  changeStatus: (status:boolean) => void
}

const shiftingDelivery = (props:PropsType) => {
  const delivery =
    useSelector<AppStoreType, DeliveryAdressType>((state) => state.delivery)
  const dispatch = useDispatch()

  const [userCity, setUserCity] = useState<string>(delivery.city)
  const [userStreet, setUserStreet] = useState<string>(delivery.street)
  const [userHome, setUserHome] = useState<string>(delivery.home)
  const [userHomePart, setUserHomePart] = useState<string>(delivery.homePart)
  const [userFlat, setUserFlat] = useState<string>(delivery.flat)


  const setCityCallback=(e: ChangeEvent<HTMLInputElement>)=>{
    setUserCity(e.target.value)
  }
  const setStreetCallback=(e: ChangeEvent<HTMLInputElement>)=>{
    setUserStreet(e.target.value)
  }
  const setHomeCallback=(e: ChangeEvent<HTMLInputElement>)=>{
    setUserHome(e.target.value)
  }
  const setHomePartCallback=(e: ChangeEvent<HTMLInputElement>)=>{
    setUserHomePart(e.target.value)
  }
  const setFlatCallback=(e: ChangeEvent<HTMLInputElement>)=>{
    setUserFlat(e.target.value)
  }

  const deliveryData={
    city: userCity,
    street: userStreet,
    home: userHome,
    homePart: userHomePart,
    flat: userFlat
  }

  const clickHandler=()=>{
    props.changeStatus(true)
    dispatch(
      setUserDeliveryData(deliveryData)
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
              valueName={userCity}
              valueType='Город'
              setValueCallback={setCityCallback}
            />
            <EditableSpan
              valueName={userStreet}
              valueType='Улица'
              setValueCallback={setStreetCallback}
            />
            <EditableSpan
              valueName={userHome}
              valueType='Дом'
              setValueCallback={setHomeCallback}
            />
            <EditableSpan
              valueName={userHomePart}
              valueType='Корпус'
              setValueCallback={setHomePartCallback}
            />
            <EditableSpan
              valueName={userFlat}
              valueType='Квартира'
              setValueCallback={setFlatCallback}
            />
          </Form>
          <button
            className='btn btn-outline-warning offset-md-5'
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

export default shiftingDelivery
