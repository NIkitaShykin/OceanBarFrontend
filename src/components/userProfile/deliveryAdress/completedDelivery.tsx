import {useSelector} from 'react-redux'
import {Col, Row} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {DeliveryAdressType} from '../../../common/types/userTypes'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import {setUserPersonalDataTC} from '../../../redux/reducers/userReducer'


type PropsType = {
  changeStatus: (status:boolean) => void
  changeAbsent: (status:boolean) => void
}

const completedDelivery = (props:PropsType) => {
  const delivery = useSelector<AppStoreType,
   DeliveryAdressType>((state) => state.user.userProfile)
  const dispatch = useDispatch()

  const userDeliveryData = {
    homeNumber: '',
    homePart: '',
    street: '',
    flat: '',
  }

  const delDelivery=()=>{
    dispatch(setUserPersonalDataTC(userDeliveryData))
    props.changeStatus(true)
    props.changeAbsent(true)
  }

  return (
    <div className='info-block'>
      <Row>
        <span style={{cursor: 'pointer', color: 'gray', textAlign: 'right'}}
          onClick={()=>delDelivery()}
        >
          Удалить адрес
        </span>
      </Row>
      <Row>
        <Col><div className='user-name'>
          <h5>г.Минск</h5></div>
        </Col>
      </Row>
      <Row>
        <Col><div className='user-name'>
          <h5>Улица&nbsp;{delivery.street}</h5></div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='user-name'>
            <h5>Дом&nbsp;{delivery.homeNumber}</h5>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='user-name'>
            <h5>Корпус&nbsp;{delivery.homePart}</h5>
          </div></Col>
      </Row>
      <Row>
        <Col>
          <div className='user-name'>
            <h5>Квартира&nbsp;{delivery.flat}</h5>
          </div>
        </Col>
      </Row>
      <br/>
      <button
        className='btn btn-outline-warning offset-md-9'
        onClick={()=>{
          props.changeStatus(true)
        }}
      >
        Изменить
      </button>
    </div>

  )
}

export default completedDelivery
