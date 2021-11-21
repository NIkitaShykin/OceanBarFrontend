import {useSelector} from 'react-redux'
// import {Row} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
// import {userCardsType} from '../../../common/types/bankCardTypes'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import {setBankCardTC} from '../../../redux/reducers/bankCardReducer'
import NewBankCardForm from './NewBankCardForm'
// import { propTypes } from 'react-bootstrap/esm/Image'


type PropsType = {
  changeStatus: () => void
  // changeAbsent: (status:boolean) => void
}

const previewCard = (props:PropsType) => {
  // eslint-disable-next-line max-len
  const userCards = useSelector<AppStoreType, any>((state) => state.bankCard)
  console.log(userCards)
  const dispatch = useDispatch()

  const returnCard=(card: any)=>{
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
