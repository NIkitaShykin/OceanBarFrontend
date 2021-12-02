import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {userCardsType} from '../../../common/types/bankCardTypes'
import {AppStoreType} from '../../../redux/reducers/rootReducer'
import {deleteBankCardTC} from '../../../redux/reducers/bankCardReducer'
import PreviewCardsItem from '../myCards/previewCardItem'


type PropsType = {
  changeStatus: (status:boolean) => void
  changeAbsent: (status:boolean) => void
}

const previewCard = (props:PropsType) => {
  const userCards =
   useSelector<AppStoreType, userCardsType>((state) => state.bankCard.userCards)
  const dispatch = useDispatch()

  const deleteCard=(cardNumber: number)=>{
    dispatch(deleteBankCardTC(cardNumber))
  }

  return (
    <div className='info-block' >

      {userCards.map((card, i) =>{
        return (
          <div key={card.id}>
            <PreviewCardsItem
              cardNumber={i}
              card={card}
              deleteCard={deleteCard}
            />
          </div>)
      }) }

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
