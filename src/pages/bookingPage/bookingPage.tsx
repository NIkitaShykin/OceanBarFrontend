import ReserveATableForm from './ReserveATableForm'

const Booking = () => {
  const handleRadioValueClearance = (value: string) => {
    console.log('Забронировать стол');
    (value)
  }

  return (
    <div className='cart'>
      <div className='container'>
        <h1 className='m-3'>Забронируйте стол</h1>
        <ReserveATableForm
          handleRadioValueClearance={(value: string) =>
            handleRadioValueClearance(value)
          }/>
      </div>
    </div>
  )
}

export default Booking
