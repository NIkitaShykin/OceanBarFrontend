import {useSelector} from 'react-redux'
import {Col, Row} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {DeliveryAdressType} from '../../../common/types/userTypes'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import {setUserPersonalDataTC} from '../../../redux/reducers/userReducer'


type PropsType = {
  changeStatus: (status:boolean) => void
}

const completedDelivery = (props:PropsType) => {
  const delivery =
    useSelector<AppStoreType, DeliveryAdressType>((state) => state.user)
  const dispatch = useDispatch()

  const userDeliveryData = {
    homeNumber: '',
    homePart: '',
    street: '',
    flat: '',
  }

  const setDelivery=()=>{
    dispatch(setUserPersonalDataTC(userDeliveryData))
    props.changeStatus(true)
  }

  return (
    <div className='info-block'>
      <Row>
        <Col xs={'auto'} sm={9} md={9} lg={9}>
        </Col>
        <Col xs={'auto'} sm={3} md={3} lg={3}>
          <span style={{cursor: 'pointer', color: 'gray'}}
            onClick={()=>setDelivery()}
          >
      Удалить адрес
          </span>
        </Col>
      </Row>
      <Row>
        <Col sm={3}><div className='user-name'>
          <h5>&#127984;&nbsp;Город</h5></div></Col>
        <Col sm={4}><div className='user-name'>
          <h5>{delivery.city}</h5></div></Col>
        <Col sm={5}></Col>
      </Row>
      <Row>
        <Col sm={3}><div className='user-name'>
          <h5>&#10153;&nbsp;&nbsp;Улица</h5></div></Col>
        <Col sm={4}><div className='user-name'>
          <h5>{delivery.street}</h5></div></Col>
        <Col sm={5}></Col>
      </Row>
      <Row>
        <Col sm={3}><div className='user-name'>
          <h5>&#10153;&nbsp;&nbsp;Дом</h5></div></Col>
        <Col sm={4}><div className='user-name'>
          <h5>{delivery.homeNumber}</h5></div></Col>
        <Col sm={5}></Col>
      </Row>
      <Row>
        <Col sm={3}><div className='user-name'>
          <h5>&#10153;&nbsp;&nbsp;Корпус</h5></div></Col>
        <Col sm={4}><div className='user-name'>
          <h5>{delivery.homePart}</h5></div></Col>
        <Col sm={5}></Col>
      </Row>
      <Row>
        <Col sm={3}><div className='user-name'>
          <h5>&#10153;&nbsp;&nbsp;Квартира</h5></div></Col>
        <Col sm={4}><div className='user-name'>
          <h5>{delivery.flat}</h5></div></Col>
        <Col sm={5}></Col>
      </Row>
      <br/>
      <button
        className='btn btn-outline-warning offset-md-10'
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
