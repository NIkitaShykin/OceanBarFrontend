import {useState} from 'react'
import ReserveATableForm from './ReserveATableForm'
import ConfirmReservTable from './ConfirmReservTable'
// import {ApiReserve} from '../../api/ApiBookTable'

type LocalOrderType = {
    date: object,
    timeSlot: string,
    tableSize: string,
    userName: string,
    userPhone: string
}

const Booking = () => {
  const [isComplete, setIsComplete] = useState<boolean>(true)

  const handleBookingData = (bookingOrder: LocalOrderType) => {
    isCompleteToggle()
    console.log(bookingOrder)
    // ApiReserve.bookTableUnregistred(bookingOrder)
    // .then((res)=>console.log(res))
  }

  const isCompleteToggle = ()=>{
    setIsComplete(!isComplete)
  }

  return (
    <div className='cart'>
      <div className='container'>
        {!isComplete ?
          <ConfirmReservTable isCompleteToggle={isCompleteToggle} />:
          <>
            <h1 className='m-3'>Забронируйте стол</h1>
            <ReserveATableForm
              handleBookingData={(bookingOrder: LocalOrderType) =>
                handleBookingData(bookingOrder)
              }/>
          </>
        }
      </div>
    </div>
  )
}

export default Booking
