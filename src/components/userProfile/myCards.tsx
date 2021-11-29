import {useState} from 'react'
import {useEffect} from 'react'
import {AppStoreType} from '../../redux/reducers/rootReducer'
import {userCardsType} from '../../common/types/bankCardTypes'
import {useSelector} from 'react-redux'
import NewBankCardContainer from './myCards/NewBankCardContainer'
import PreviewCards from './myCards/previewCards'
import AbsentBankCard from './myCards/absentCard'

import '../../pages/profilePage/profile.scss'


const MyCreditCards = () => {
  const userCards =
   useSelector<AppStoreType, userCardsType>((state) => state.bankCard.userCards)

  const [isAddingCard, setIsAddingCard] = useState<boolean>(false)
  const [cardAbsent, setCardAbsent] = useState<boolean>(false)

  useEffect(() => {
    if (userCards.length<1) {
      setCardAbsent(true)
      setIsAddingCard(true)
    } else {
      setCardAbsent(false)
      setIsAddingCard(false)
    }
  }, [userCards])

  const changeAbsent=(status:boolean)=>{
    setCardAbsent(false)
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
            <NewBankCardContainer
              changeStatus={changeIsAddingCard}
            /> :
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

export default MyCreditCards
