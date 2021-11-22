import {useState} from 'react'
import {useEffect} from 'react'
import {AppStoreType} from '../../redux/reducers/rootReducer'
import {CommonUserType} from '../../common/types/userTypes'
import {useSelector} from 'react-redux'
import ShiftingDeliveryAPI from
  './deliveryAdress/shiftingDeliveryAPI'
import CompletedDelivery from
  './deliveryAdress/completedDelivery'
import AbsentDelivery from
  './deliveryAdress/absentDelivery'


const DeliveryAdress = () => {
  const delivery = useSelector<AppStoreType,
   CommonUserType>((state:any) => state.user.userProfile)
  const [isChange, setChangeStatus] = useState<boolean>(true)
  const [adressAbsent, setAdressAbsent] = useState<boolean>(true)

  useEffect(() => {
    if (delivery.street=='') {
      setAdressAbsent(true)
    } else {
      setAdressAbsent(false)
      setChangeStatus(false)
    }
  }, [delivery])


  const changeAbsent=(status:boolean)=>{
    setAdressAbsent(status)
  }
  const changeStatus=(status:boolean)=>{
    setChangeStatus(status)
  }

  return (
    <div className='profile-block ml-md-auto' >
      <h2>Адрес доставки</h2>

      {adressAbsent ?
        <AbsentDelivery changeAbsent={changeAbsent}/> :
        <>
          {isChange ?
            <ShiftingDeliveryAPI changeStatus={changeStatus}/> :
            <CompletedDelivery
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
