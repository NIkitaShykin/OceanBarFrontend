import {useState} from 'react'
import ShiftingDelivery from
  './deliveryAdress/shiftingDelivery'
import CompletedDelivery from
  './deliveryAdress/completedDelivery'
import AbsentDelivery from
  './deliveryAdress/absentDelivery'
// import {findDOMNode} from 'react-dom'

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
      <div className='info-block'>

        {adressAbsent ?
          <AbsentDelivery changeStatus={isAdress}/> :
          <div>
            {isShifting ?
              <CompletedDelivery changeStatus={changeStatus}/> :
              <ShiftingDelivery changeStatus={changeStatus}/> }
          </div>
        }


      </div>
    </div>
  )
}

export default DeliveryAdress
