import {useState, ChangeEvent} from 'react'
import {DropdownButton, Row, Col, Dropdown} from 'react-bootstrap'
// import {DeliveryAdressType} from '../../../common/types/userTypes'
// import {AppStoreType} from '../../../redux/reducers/rootReducer'
// import {useSelector} from 'react-redux'
// import EditableSpan from './editableSpan/editableSpan'
// import {Form, Modal} from 'react-bootstrap'
// import {useDispatch} from 'react-redux'
// import {setUserDeliveryData} from '../../../redux/reducers/deliveryReducer'
import {ApiDelivery} from '../../../api/ApiDelivery'
// import Cookies from 'js-cookie'
// import axios from 'axios'
import {Form, Modal} from 'react-bootstrap'
import Search from './Search'


type PropsType = {
  changeStatus: (status:boolean) => void
}


const shiftingDeliveryAPI = (props:PropsType) => {
  // const token = Cookies.get('token')

  // const KEY = 'dff137738364ea1d173be3de51fd7c58c1ccba70'
  // const secret = 'bc4e9baf934b999a702edc43fca98656cb02f7b6'
  const [searchAdress, setSearchAdress] = useState('Улица')
  const [resivedAdress, setResivedAdress] = useState([])

  const clickHandler=()=>{
    ApiDelivery.getDelivery(searchAdress)
      .then((resp: any) =>{
        if (resp.status > 400) {
          throw new Error(resp.statusText)
        }
        setResivedAdress(resp.data.suggestions)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }

  const inputAdress=(e:any)=>{
    setSearchAdress(e.target.value)
  }

  // const cancellHandleer=()=>{
  //   props.changeStatus(false)
  // }


  const adressSuggestionsList = resivedAdress.map((adress, i)=> {
    // @ts-ignore
    console.log(adress.value)
    // @ts-ignore
    return <div key={i}>{adress.value}</div>
  } )

  console.log('adressSuggestionsList')
  console.log(adressSuggestionsList)

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

              <Search/>

              {adressSuggestionsList}

              <Row>
                <Col xs={'auto'} sm={4} md={4} lg={4}>
                  {/* <input
                    name='search'
                    type='text'
                    value={searchAdress}
                    onChange={(e)=>inputAdress(e)} /> */}
                </Col>
                <Col xs={'auto'} sm={8} md={8} lg={8}>

                </Col>
              </Row>

              <br/>

              <Row>
                <Col>
                  <select>
                    <option selected value='Дом'>Дом</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                  </select>
                </Col>
                <Col>
                  <select>
                    <option selected value='Корпус'>Корпус</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                  </select>
                </Col>
                <Col>
                  <select>
                    <option selected value='Квартира'>Квартира</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
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
                    onClick={(e) => clickHandler()}>
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
