import {useState} from 'react'
import {Row, Col} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {setUserPersonalDataTC} from '../../../redux/reducers/userReducer'
import {Form, Modal} from 'react-bootstrap'
import Search from './Search'


type PropsType = {
  changeStatus: (status:boolean) => void
}


const shiftingDeliveryAPI = (props:PropsType) => {
  const dispatch = useDispatch()
  const [homeNumber, setHome] = useState()
  const [homePart, setHomePart] = useState()
  const [street, setStreet] = useState('')
  const [flat, setFlat] = useState()

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
    <div className='container'>
      <Modal.Dialog className='shadow p-3 mb-1 bg-body rounded'>

        <Modal.Body>
          <Form className='my-1' style={{width: '100%'}}>
            <Form.Floating className='mb-3 mx-3'>
              <Row>
                <Col xs={'auto'} sm={9} md={9} lg={9}>
                </Col>
                <Col xs={'auto'} sm={3} md={3} lg={3}>
                  <h5 style={{cursor: 'pointer'}}
                    onClick={() => props.changeStatus(false)}>
                    Oтмена
                  </h5>
                </Col>
              </Row>
              <Row>
                <Col xs={'auto'} sm={6} md={8} lg={8}>
                  <span>г.Минск</span>
                </Col>
                <Col>
                </Col>
              </Row>

              <Search searchValue={streetSelect}/>

              <br/>
              <Row>
                <Col xs={'auto'} sm={3} md={3} lg={2}>
                  <input
                    style={{width: '50px', height: '22px', borderRadius: '4px'}}
                    placeholder='Дом'
                    name='home'
                    type='text'
                    value={homeNumber}
                    onChange={homeSelect}
                  />
                </Col>
                <Col xs={'auto'} sm={3} md={3} lg={2}>
                  <input
                    style={{width: '60px', height: '22px', borderRadius: '4px'}}
                    placeholder='Корпус'
                    name='homePart'
                    type='text'
                    value={homePart}
                    onChange={homePartSelect}
                  />
                </Col>
                <Col xs={'auto'} sm={4} md={4} lg={5}>
                  <input
                    style={{width: '70px', height: '22px', borderRadius: '4px'}}
                    placeholder='Квартира'
                    name='flat'
                    type='text'
                    value={flat}
                    onChange={flatSelect}
                  />
                </Col>
                <Col xs={'auto'} sm={3} md={3} lg={3}>
                  <div
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
                  </div>

                </Col>
              </Row>

            </Form.Floating>

          </Form>
        </Modal.Body>
      </Modal.Dialog>
    </div>
  )
}

export default shiftingDeliveryAPI
