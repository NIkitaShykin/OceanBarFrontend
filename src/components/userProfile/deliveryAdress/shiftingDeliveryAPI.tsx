import {useState} from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap'
import {useDispatch, useSelector} from 'react-redux'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import {DeliveryAdressType} from '../../../common/types/userTypes'
import {setUserPersonalDataTC} from '../../../redux/reducers/userReducer'
import Search from './Search'


type PropsType = {
  changeStatus: (status:boolean) => void
}

const shiftingDeliveryAPI = (props:PropsType) => {
  const dispatch = useDispatch()

  const delivery =
  useSelector<AppStoreType, DeliveryAdressType>((state) => state.user)

  const [homeNumber, setHome] = useState(delivery.homeNumber)
  const [homePart, setHomePart] = useState(delivery.homePart)
  const [street, setStreet] = useState(delivery.street)
  const [flat, setFlat] = useState(delivery.flat)

  const setDelivery=()=>{
    dispatch(setUserPersonalDataTC(userDeliveryData))
    props.changeStatus(false)
  }

  const userDeliveryData = {
    homeNumber: homeNumber,
    homePart: homePart,
    street: street,
    flat: flat,
  }

  const streetSelect=(value:string)=>{
    setStreet(value)
  }
  const homeSelect=(e:any)=>{
    setHome(e.target.value)
  }

  const homePartSelect=(e:any)=>{
    setHomePart(e.target.value)
  }
  const flatSelect=(e:any)=>{
    setFlat(e.target.value)
  }

  return (
    <div className='info-block'>
      <Row>
        <Col xs={'auto'} sm={0} md={10} lg={10}>
        </Col>
        <Col xs={'auto'} sm={12} md={2} lg={2}>
          <h5 style={{cursor: 'pointer', color: 'gray'}}
            onClick={() => props.changeStatus(false)}>
                    Oтмена
          </h5>
        </Col>
      </Row>

      <Col xs={'auto'} sm={11} md={9} lg={9}>
        <Row>
          <Col xs={'auto'} sm={6} md={8} lg={8}>
            <h4>г.Минск</h4>
            <br/>
          </Col>
          <Col>
          </Col>
        </Row>
        <Row>
          <Search
            searchValue={streetSelect}
            currentValue={street}
          />
        </Row>
        <br/>
        <Row>
          <Col >
            <label htmlFor='home'>Дом</label>
            <Form.Control
              placeholder={homeNumber}
              required
              style={{width: '100%'}}
              name='home'
              value={homeNumber}
              onChange={homeSelect}
            />
          </Col>
          <Col >
            <label htmlFor='homePart'>Корпус</label>
            <Form.Control
              placeholder={homePart}
              required
              style={{width: '100%'}}
              name='homePart'
              value={homePart}
              onChange={homePartSelect}
            />
          </Col>
          <Col >
            <label htmlFor='flat'>Квартира</label>
            <Form.Control
              placeholder={flat}
              required
              style={{width: '100%'}}
              name='flat'
              value={flat}
              onChange={flatSelect}
            />
          </Col>

        </Row>
        <br/>
        {/* <div
                    style={{
                      borderRadius: '4px',
                      border: '2px solid #fdd008',
                      color: 'gray',
                      height: '25px',
                      width: '80px',
                      textAlign: 'center',
                      cursor: 'pointer',
                      lineHeight: '20px',
                    }}
                    onClick={(e) => setDelivery()}>
                    Готово
                  </div> */}
      </Col>
      <Col>
      </Col>
      <Button
        className='btn btn-outline-warning offset-md-10'
        variant='outline-warning'
        type='submit'
        onClick={() => setDelivery()}
      >
              Сохранить
      </Button>
    </div>
  )
}

export default shiftingDeliveryAPI
