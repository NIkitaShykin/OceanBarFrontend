import {DeliveryAdressType} from '../../../common/types/userTypes'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import {useSelector} from 'react-redux'
import {Col, Row} from 'react-bootstrap'

type PropsType = {
  changeStatus: (status:boolean) => void
}

const completedDelivery = (props:PropsType) => {
  const delivery =
    useSelector<AppStoreType, DeliveryAdressType>((state) => state.user)

  return (
    <div className='info-block'>
      <br/>
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
          props.changeStatus(false)
        }}
      >
        Изменить
      </button>
    </div>

  )
}

export default completedDelivery
