import BanksCard from './bankCards/BankCards'
import {useState} from 'react'

const MyCreditCards = () => {
  const [isShifting, setChangeStatus] = useState<boolean>(false)

  const addCard=()=>{
    setChangeStatus(!isShifting)
  }

  return (
    <div className='profile-block ml-md-auto'>
      <h2>
        Мои карты
      </h2>
      <div className='info-block'>
        <div className='mycard'>Visa</div>
      </div>

      {isShifting ?
        <BanksCard/> :
        <div>Добавить карту</div>
      }

      <button className='btn btn-outline-warning offset-md-10'
        onClick={()=>{
          addCard()
        }}
      >
     Изменить
      </button>


      {/* <iframe src='https://demo.open-processing.ru/form/' style={{width: '100%', height: '800px'}}></iframe> */}


    </div>
  )
}

export default MyCreditCards

