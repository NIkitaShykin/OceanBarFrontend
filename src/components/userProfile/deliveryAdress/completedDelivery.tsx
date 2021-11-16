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
  // eslint-disable-next-line max-len
  const delivery = useSelector<AppStoreType, DeliveryAdressType>((state) => state.user.userProfile)
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
    props.changeAbsent(true)
  }

  return (
    <div className='info-block'>
      <Row>
        <span style={{cursor: 'pointer', color: 'gray', textAlign: 'right'}}
          onClick={()=>setDelivery()}
        >
      Удалить адрес
        </span>
      </Row>
      <Row>
        <Col sm={4} md={3} lg={3}><div className='user-name'>
          <h5>&#127984;&nbsp;Город</h5></div></Col>
        <Col sm={3} md={3} lg={3}><div className='user-name'>
          <h5>{delivery.city}</h5></div></Col>
      </Row>
      <Row>
        <Col sm={4} md={3} lg={3}><div className='user-name'>
          <h5>&#10153;&nbsp;&nbsp;Улица</h5></div></Col>
        <Col sm={3} md={3} lg={3}><div className='user-name'>
          <h5>{delivery.street}</h5></div></Col>
      </Row>
      <Row>
        <Col sm={4} md={3} lg={3}><div className='user-name'>
          <h5>&#10153;&nbsp;&nbsp;Дом</h5></div></Col>
        <Col sm={3} md={3} lg={3}><div className='user-name'>
          <h5>{delivery.homeNumber}</h5></div></Col>
      </Row>
      <Row>
        <Col sm={4} md={3} lg={3}><div className='user-name'>
          <h5>&#10153;&nbsp;&nbsp;Корпус</h5></div></Col>
        <Col sm={3} md={3} lg={3}><div className='user-name'>
          <h5>{delivery.homePart}</h5></div></Col>
      </Row>
      <Row>
        <Col sm={4} md={3} lg={3}><div className='user-name'>
          <h5>&#10153;&nbsp;&nbsp;Квартира</h5></div></Col>
        <Col sm={3} md={3} lg={3}><div className='user-name'>
          <h5>{delivery.flat}</h5></div></Col>
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
