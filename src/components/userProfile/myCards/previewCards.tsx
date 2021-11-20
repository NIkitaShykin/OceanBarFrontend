import {useSelector} from 'react-redux'
// import {Row} from 'react-bootstrap'
// import {useDispatch} from 'react-redux'
import {userCardsType} from '../../../common/types/bankCardTypes'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
// import {setUserPersonalDataTC} from '../../../redux/reducers/userReducer'
import PreviewBankCards from '../myCards/bankCards/BankCards'


type PropsType = {
  changeStatus: (status:boolean) => void
  changeAbsent: (status:boolean) => void
}

const previewCard = (props:PropsType) => {
  // eslint-disable-next-line max-len
  const userCards = useSelector<AppStoreType, userCardsType>((state) => state.bankCard.userCards)
  // const dispatch = useDispatch()
  console.log(userCards.card1)

  // const userDeliveryData = {
  //   homeNumber: '',
  //   homePart: '',
  //   street: '',
  //   flat: '',
  // }

  // const delDelivery=()=>{
  //   dispatch(setUserPersonalDataTC(userDeliveryData))
  //   props.changeStatus(true)
  //   props.changeAbsent(true)
  // }

  return (
    <div className='info-block' >
      {/* <Row>
        <span style={{cursor: 'pointer', color: 'gray', textAlign: 'right'}}
          onClick={()=>delDelivery()}
        >
          Удалить все карты
        </span>
      </Row> */}

      <PreviewBankCards
        // card={userCards.card1}
      />


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

export default previewCard
