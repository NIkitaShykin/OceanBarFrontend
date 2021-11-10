// import {useState, ChangeEvent} from 'react'
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
import {Form, Button, Modal} from 'react-bootstrap'

type PropsType = {
  changeStatus: (status:boolean) => void
}


const shiftingDeliveryAPI = (props:PropsType) => {
  // const token = Cookies.get('token')

  // const KEY = 'dff137738364ea1d173be3de51fd7c58c1ccba70'
  // const secret = 'bc4e9baf934b999a702edc43fca98656cb02f7b6'


  const clickHandler=(query:string)=>{
    ApiDelivery.getDelivery(query)
      .then((resp: any) =>{
        if (resp.status > 400) {
          throw new Error(resp.statusText)
        }
        console.log(resp)
      })
      .catch((error) => {
        console.log(error.response)
      })
  }


  // axios.post(
  //   'https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address',
  //   {'query': 'Чюрленис',
  //     'locations': [
  //       {country_iso_code: 'BY'}
  //     ]
  //   },
  //   {
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/json',
  //       'Authorization': 'Token ' + KEY
  //     },
  //     // withCredentials: true
  //   }
  // )
  //   .then(function(response) {
  //     console.log(response) // Здесь обработать ответ как надо
  //   })
  //   .catch(function(error) {
  //     console.log(error)
  //   })

  const oldPassChange=(e:any)=>{
    console.log(e.target.value)
  }

  return (
    <div className='login-form'>
      <div className='container'>
        <Modal.Dialog className='shadow p-3 mb-5 bg-body rounded'>

          <Modal.Body>
            <Form className='my-3' style={{width: '100%'}}>
              <Form.Floating className='mb-3 mx-3'>


                <Form.Control
                  id='userOldPassword'
                  type='firstName'
                  placeholder='password'
                  value={'gfhg'}
                  onChange={(e) => oldPassChange(e)}
                />
              </Form.Floating>


            </Form>
          </Modal.Body>

          <Modal.Footer className='justify-content-center border-0'>
            <Button
              className='btn btn-outline-warning offset-md-0'
              variant='outline-warning'
              type='submit'
              onClick={(e) => clickHandler('Чюрленис')}
            >           Сохранить
            </Button>
          </Modal.Footer>


        </Modal.Dialog>
      </div>
    </div>
  )
}

export default shiftingDeliveryAPI
