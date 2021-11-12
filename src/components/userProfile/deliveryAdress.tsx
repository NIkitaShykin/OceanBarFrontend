import {useState} from 'react'
// import ShiftingDelivery from
//   './deliveryAdress/shiftingDelivery'
// import ShiftingDeliveryAPI from
//   './deliveryAdress/shiftingDeliveryAPI'
import ShiftingDeliveryR from
  './deliveryAdress/shiftingDeliveryR'
import CompletedDelivery from
  './deliveryAdress/completedDelivery'
import AbsentDelivery from
  './deliveryAdress/absentDelivery'


const DeliveryAdress = () => {
  const [isShifting, setChangeStatus] = useState<boolean>(true)
  const [adressAbsent, setadressPresent] = useState<boolean>(true)
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
        <ShiftingDeliveryR changeStatus={changeStatus}/>
        // <div>
        //   {isShifting ?
        //     <CompletedDelivery changeStatus={changeStatus}/> :
        //     <>
        //       {/* <ShiftingDelivery changeStatus={changeStatus}/> */}
        //       {/* <ShiftingDeliveryAPI changeStatus={changeStatus}/> */}
        //     </>}
        // </div>
      }


    </div>
  )
}

export default DeliveryAdress
