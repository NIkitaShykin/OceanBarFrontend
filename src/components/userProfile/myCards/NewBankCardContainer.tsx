// import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {BankCardType} from '../../../common/types/bankCardTypes'
import {setBankCardTC} from '../../../redux/reducers/bankCardReducer'
import NewBankCardForm from './NewBankCardForm'


type PropsType = {
  changeStatus: () => void
}

const previewCard = (props:PropsType) => {
  // const userCards = useSelector<AppStoreType, any>((state) => state.bankCard)
  // console.log(userCards)


  const dispatch = useDispatch()

  const returnCard=(card: BankCardType)=>{
    dispatch(setBankCardTC(card))
    props.changeStatus()
  }

  return (
    <div className='info-block' >
      <NewBankCardForm returnCard={returnCard}/>
      <br/>
    </div>

  )
}

export default previewCard
