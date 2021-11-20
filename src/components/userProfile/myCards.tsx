import {useState} from 'react'
import {useEffect} from 'react'
import {AppStoreType} from '../../redux/reducers/rootReducer'
import {useSelector} from 'react-redux'
import NewBankCard from './myCards/NewBankCard'
import PreviewCards from './myCards/previewCards'
import AbsentBankCard from './myCards/absentCard'

const DeliveryAdress = () => {
  const delivery =
  useSelector<AppStoreType, any>((state:any) => state.user)

  const [isAddedCard, setIsAddedCard] = useState<boolean>(false)
  const [cardAbsent, setCardAbsent] = useState<boolean>(false)

  useEffect(() => {
    if (delivery.userProfile.street=='') {
      setCardAbsent(true)
    } else {
      setCardAbsent(false)
      setIsAddedCard(false)
    }
  }, [delivery])


  const changeAbsent=(status:boolean)=>{
    setCardAbsent(status)
  }
  const changeStatus=(status:boolean)=>{
    setIsAddedCard(status)
  }

  return (
    <div className='profile-block ml-md-auto' >
      <h2> Мои карты</h2>

      {cardAbsent ?
        <AbsentBankCard changeAbsent={changeAbsent}/> :
        <>
          {isAddedCard ?
          // @ts-ignore
            <NewBankCard test={'hello'} /> :
            <PreviewCards
              changeStatus={changeStatus}
              changeAbsent={changeAbsent}
            />
          }
        </>
      }
    </div>
  )
}

export default DeliveryAdress
