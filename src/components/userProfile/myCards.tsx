import {useState} from 'react'
import {useEffect} from 'react'
import {AppStoreType} from '../../redux/reducers/rootReducer'
import {userCardsType} from '../../common/types/bankCardTypes'
import {useSelector} from 'react-redux'
import NewBankCardContainer from './myCards/NewBankCardContainer'
import PreviewCards from './myCards/previewCards'
import AbsentBankCard from './myCards/absentCard'


const DeliveryAdress = () => {
  const userCards =
   useSelector<AppStoreType, userCardsType>((state) => state.bankCard.userCards)

  const [isAddingCard, setIsAddingCard] = useState<boolean>(false)
  const [cardAbsent, setCardAbsent] = useState<boolean>(true)

  useEffect(() => {
    if (userCards.length>1) {
      setCardAbsent(false)
    } else {
      setCardAbsent(true)
      setIsAddingCard(true)
    }
  }, [userCards])

  const changeAbsent=(status:boolean)=>{
    setCardAbsent(status)
  }

  const changeIsAddingCard=()=>{
    setIsAddingCard(!isAddingCard)
  }

  return (
    <div className='profile-block ml-md-auto' >
      <h2> Мои карты</h2>

      {cardAbsent ?
        <AbsentBankCard changeAbsent={changeAbsent}/> :
        <>
          {isAddingCard ?
            <NewBankCardContainer changeStatus={changeIsAddingCard} /> :
            <PreviewCards
              changeStatus={changeIsAddingCard}
              changeAbsent={changeAbsent}
            />
          }
        </>
      }
    </div>
  )
}

export default DeliveryAdress
