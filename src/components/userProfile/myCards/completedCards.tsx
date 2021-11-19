import {useSelector} from 'react-redux'
import {Row, Col} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {DeliveryAdressType} from '../../../common/types/userTypes'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import {setUserPersonalDataTC} from '../../../redux/reducers/userReducer'
import BankCards from '../bankCards/BankCards'


type PropsType = {
  changeStatus: (status:boolean) => void
  changeAbsent: (status:boolean) => void
}

const completedDelivery = (props:PropsType) => {
  // eslint-disable-next-line max-len
  const delivery = useSelector<AppStoreType, DeliveryAdressType>((state) => state.user.userProfile)
  const dispatch = useDispatch()
  console.log(delivery)

  const userDeliveryData = {
    homeNumber: '',
    homePart: '',
    street: '',
    flat: '',
  }

  const delDelivery=()=>{
    dispatch(setUserPersonalDataTC(userDeliveryData))
    props.changeStatus(true)
    props.changeAbsent(true)
  }

  return (
    <div className='info-block'>
      <Row>
        <span style={{cursor: 'pointer', color: 'gray', textAlign: 'right'}}
          onClick={()=>delDelivery()}
        >
          Удалить все карты
        </span>
      </Row>

      <Row>
        <Col>
          <BankCards />
        </Col>
      </Row>
      <Col>
        <BankCards />
      </Col>
      <Col>
        <BankCards />
      </Col>


      <br/>
      <button
        className='btn btn-outline-warning offset-md-9'
        style={{width: '150px'}}
        onClick={()=>{
          props.changeStatus(true)
        }}
      >
        Добавить карту
      </button>
    </div>

  )
}

export default completedDelivery
