import {DeliveryAdressType} from '../../../common/types/userTypes'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import {useSelector} from 'react-redux'
import {Col, Row} from 'react-bootstrap'

type PropsType = {
  changeStatus: (status:boolean) => void
}

const completedDelivery = (props:PropsType) => {
  const delivery =
    useSelector<AppStoreType, DeliveryAdressType>((state) => state.delivery)

  return (
    <div >

      <div className='info-block'>
        <Row>
        &#127984;
          <Col sm={3}><div className='user-name'><h5>Город</h5></div></Col>
          <Col sm={2}><div className='user-name'>
            <h5>{delivery.city}</h5></div></Col>
          <Col sm={7}></Col>
        </Row>
        <Row>
        &#10153;
          <Col sm={3}><div className='user-name'><h5>Улица</h5></div></Col>
          <Col sm={2}><div className='user-name'>
            <h5>{delivery.street}</h5></div></Col>
          <Col sm={7}></Col>
        </Row>
        <Row>
        &#10153;
          <Col sm={3}><div className='user-name'><h5>Дом</h5></div></Col>
          <Col sm={2}><div className='user-name'>
            <h5>{delivery.home}</h5></div></Col>
          <Col sm={7}></Col>
        </Row>
        <Row>
        &#10153;
          <Col sm={3}><div className='user-name'><h5>Корпус</h5></div></Col>
          <Col sm={2}><div className='user-name'>
            <h5>{delivery.homePart}</h5></div></Col>
          <Col sm={7}></Col>
        </Row>
        <Row>
        &#10153;
          <Col sm={3}><div className='user-name'><h5>Квартира</h5></div></Col>
          <Col sm={2}><div className='user-name'>
            <h5>{delivery.flat}</h5></div></Col>
          <Col sm={7}></Col>
        </Row>
      </div>
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
