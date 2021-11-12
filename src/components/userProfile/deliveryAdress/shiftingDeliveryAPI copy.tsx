import {useState, ChangeEvent} from 'react'
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
  const [searchAdress, setSearchAdress] = useState('')
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

 
  
  const adressSuggestionsList = resivedAdress.map((adress, i)=> {
    //@ts-ignore
    console.log(adress.value)
    //@ts-ignore
    return <div key={i}>{adress.value}</div>
  } )

  console.log("adressSuggestionsList");
  console.log(adressSuggestionsList);
  

  return (
    <div className='login-form'>
      <div className='container'>
        <Modal.Dialog className='shadow p-3 mb-5 bg-body rounded'>

          <Modal.Body>
            <Form className='my-3' style={{width: '100%'}}>
              <Form.Floating className='mb-3 mx-3'>
 
                <h3>adress</h3>
                {adressSuggestionsList}
                <h3>adress</h3>

                <Form.Control
                  id='adress'
                  type='adress'
                  placeholder='adress'
                  value={searchAdress}
                  onChange={(e) => inputAdress(e)}
                />
              </Form.Floating>

            </Form>
          </Modal.Body>

          <Modal.Footer className='justify-content-center border-0'>
            <Button
              className='btn btn-outline-warning offset-md-0'
              variant='outline-warning'
              type='submit'
              onClick={(e) => clickHandler()}
            >           Сохранить
            </Button>
          </Modal.Footer>


        </Modal.Dialog>
      </div>
    </div>
  )
}

export default shiftingDeliveryAPI
