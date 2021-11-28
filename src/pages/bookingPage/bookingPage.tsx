import {useState} from 'react'
import ReserveATableForm from './ReserveATableForm'
import ConfirmReservTable from './ConfirmReservTable'
import {ApiReserve} from '../../api/ApiBookTable'
import {bookingOrderType} from '../../common/types/bookingTypes'


const Booking = () => {
  const [isComplete, setIsComplete] = useState<boolean>(true)

  const handleBookingData = (reservOrder: bookingOrderType) => {
    isCompleteToggle()
    ApiReserve.bookTableUnregistred(reservOrder)
      .then((res)=>console.log(res))
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
              handleBookingData={(reservOrder: bookingOrderType) =>
                handleBookingData(reservOrder)
              }/>
          </>
        }
      </div>
    </div>
  )
}

export default Booking
