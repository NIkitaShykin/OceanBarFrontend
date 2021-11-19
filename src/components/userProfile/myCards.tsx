import {useState} from 'react'
import {useEffect} from 'react'
import {AppStoreType} from '../../redux/reducers/rootReducer'
import {useSelector} from 'react-redux'
import ShiftingDeliveryAPI from
  './deliveryAdress/shiftingDeliveryAPI'
import CompletedCards from
  './myCards/completedCards'
import AbsentBankCard from
  './myCards/absentCard'


const DeliveryAdress = () => {
  const delivery =
  useSelector<AppStoreType, any>((state:any) => state.user)

  const [isChange, setChangeStatus] = useState<boolean>(false)
  const [cardAbsent, setCardAbsent] = useState<boolean>(false)

  useEffect(() => {
    if (delivery.userProfile.street=='') {
      setCardAbsent(true)
    } else {
      setCardAbsent(false)
      setChangeStatus(false)
    }
  }, [delivery])


  const changeAbsent=(status:boolean)=>{
    setCardAbsent(status)
  }
  const changeStatus=(status:boolean)=>{
    setChangeStatus(status)
  }

  return (
    <div className='profile-block ml-md-auto' >
      <h2> Мои карты</h2>

      {cardAbsent ?
        <AbsentBankCard changeAbsent={changeAbsent}/> :
        <>
          {isChange ?
            <ShiftingDeliveryAPI changeStatus={changeStatus}/> :
            <CompletedCards
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


// import BanksCard from './bankCards/BankCards'
// import {useState} from 'react'

// const MyCreditCards = () => {
//   const [isShifting, setChangeStatus] = useState<boolean>(false)
//   const [visaCard, setVisaCard] = useState<any>({cvc: '',
//     expiry: '',
//     focus: '',
//     name: 'Andrei',
//     number: '4345436547545356'})

//   const addCard=()=>{
//     setChangeStatus(!isShifting)
//     setVisaCard({})
//   }


//   return (
//     <div className='profile-block ml-md-auto'>
//       <h2>
//         Мои карты
//       </h2>
//       <div className='info-block'>
//         <div className='mycard'>Visa</div>
//       </div>
//       {isShifting ?
//         <BanksCard/> :
//         <div>Добавить карту</div>
//       }

//       <button className='btn btn-outline-warning offset-md-10'
//         onClick={()=>{
//           addCard()
//         }}
//       >
//      Изменить
//       </button>


//       {/* <iframe src='https://demo.open-processing.ru/form/' style={{width: '100%', height: '800px'}}></iframe> */}


//     </div>
//   )
// }

// export default MyCreditCards

