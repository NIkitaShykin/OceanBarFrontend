import {useState} from 'react'
import {AddressSuggestions, DaDataSuggestion, DaDataAddress} from 'react-dadata'
import 'react-dadata/dist/react-dadata.css'

type PropsType = {
  changeStatus: (status:boolean) => void
}

const shiftingDeliveryR = (props:PropsType) => {
  const KEY = 'dff137738364ea1d173be3de51fd7c58c1ccba70'
  // const secret = 'bc4e9baf934b999a702edc43fca98656cb02f7b6'

  const [value, setValue] =
useState<DaDataSuggestion<any>>()


  console.log(value?.data.street)

  return (
    <>
      <AddressSuggestions
        token={KEY}
        // value={value?.data.street}
        // count={3}
        // autoload={true}
        onChange={setValue}
        filterLocations={[
          {'country': 'Беларусь', 'region': 'Минск'}]
        }
      />
      <br/>
      <button
        className='btn btn-outline-warning offset-md-10'
        onClick={()=>{
          props.changeStatus(false)
        }}
      >
        Изменить
      </button>
    </>

  )
}

export default shiftingDeliveryR
