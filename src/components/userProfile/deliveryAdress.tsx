import {useState} from 'react'
import {useEffect} from 'react'
import {AppStoreType} from '../../redux/reducers/rootReducer'
import {useSelector} from 'react-redux'
import {DeliveryAdressType} from '../../common/types/userTypes'
import ShiftingDelivery from
  './deliveryAdress/shiftingDelivery'
import ShiftingDeliveryAPI from
  './deliveryAdress/shiftingDeliveryAPI'
// import ShiftingDeliveryR from
//   './deliveryAdress/shiftingDeliveryR'
import CompletedDelivery from
  './deliveryAdress/completedDelivery'
import AbsentDelivery from
  './deliveryAdress/absentDelivery'


const DeliveryAdress = () => {
  const delivery =
  useSelector<AppStoreType, any>((state:any) => state.user)

  const [isShifting, setChangeStatus] = useState<boolean>(true)
  const [adressAbsent, setadressPresent] = useState<boolean>(true)

  useEffect(() => {
    if (delivery.street==='') {
      setadressPresent(true)
    } else {
      setadressPresent(false)
    }
  }, [delivery])


  const isAdress=(status:boolean)=>{
    setadressPresent(status)
  }
  const changeStatus=(status:boolean)=>{
    setChangeStatus(status)
  }

  return (
    <div className='profile-block justify-content-start'>
      <h2>Адрес доставки</h2>
      {adressAbsent ?
        <AbsentDelivery changeStatus={isAdress}/> :
        <>
          {isShifting ?
            <CompletedDelivery changeStatus={changeStatus}/> :
            <ShiftingDeliveryAPI changeStatus={changeStatus}/>
          }
        </>
      }
      {/* <ShiftingDeliveryR changeStatus={changeStatus}/> */}


    </div>
  )
}

export default DeliveryAdress
