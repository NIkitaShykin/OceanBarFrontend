import {useDispatch} from 'react-redux'
import {CloseButton, Modal} from 'react-bootstrap'
import {BankCardType} from '../../../common/types/bankCardTypes'
import {setBankCardTC} from '../../../redux/reducers/bankCardReducer'
import NewBankCardForm from './NewBankCardForm'


type PropsType = {
  changeStatus: () => void
}

const previewCard = (props:PropsType) => {
  const dispatch = useDispatch()

  const returnCard=(card: BankCardType)=>{
    dispatch(setBankCardTC(card))
    props.changeStatus()
  }

  const handleClose = () => {
    props.changeStatus()
  }

  return (
    <div className='info-block' >
      <Modal.Header className='border-0'>
        <CloseButton onClick={() => handleClose()} />
      </Modal.Header>
      <NewBankCardForm returnCard={returnCard}/>
      <br/>
    </div>

  )
}

export default previewCard
