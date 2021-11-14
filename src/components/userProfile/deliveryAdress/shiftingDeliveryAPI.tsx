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
    props.changeStatus(true)
  }

  const arr = []
  for (let i = 1; i <= 10; i++) {
    arr.push(i)
  }
  const numberArray=arr.map((el:number, i:number) =>{
    return (<option key={i} value={el}>{el}</option>)
  } )

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
                    onClick={() => props.changeStatus(true)}>
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

              <Row>
                <Col xs={'auto'} sm={4} md={4} lg={4}>
                </Col>
                <Col xs={'auto'} sm={8} md={8} lg={8}>
                </Col>
              </Row>
              <br/>
              <Row>
                <Col>
                  <select onChange={homeSelect}>
                    <option selected value='Дом'>Дом</option>
                    {numberArray}
                    {/* <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option> */}
                  </select>
                </Col>
                <Col>
                  <select onChange={homePartSelect}>
                    <option selected value='Корпус'>Корпус</option>
                    {numberArray}
                    {/* <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option> */}
                  </select>
                </Col>
                <Col>
                  <select onChange={flatSelect}>
                    <option selected value='Квартира'>Квартира</option>
                    {numberArray}
                    {/* <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option> */}
                  </select>
                </Col>
                <Col>
                  <div
                    style={{
                      border: '1px solid gray',
                      color: 'black',
                      height: '22px',
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
