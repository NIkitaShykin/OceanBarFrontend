import {useState, ChangeEvent} from 'react'
import {UserType} from '../../common/types/userTypes'
import {AppStoreType} from '../../redux/reducers/rootReducer'
import {useSelector} from 'react-redux'
// import {Form, Button} from 'react-bootstrap'

import ShiftingPersonal from
  './personalData/shiftingPersonal'
import CompletedPersonal from
  './personalData/completedPersonal'


const PersonalData = () => {
  const user =
    useSelector<AppStoreType, UserType>((state) => state.user)

  const [isShifting, setChangeStatus] = useState<boolean>(true)
  const changeStatus=(status:boolean)=>{
    setChangeStatus(status)
  }

  return (
    <div className='profile-block ml-md-auto'>
      <h2 className='profile-subtitle'>
        Личные данные
      </h2>
      {isShifting ?
        <CompletedPersonal changeStatus={changeStatus}/> :
        <ShiftingPersonal changeStatus={changeStatus}/> }
    </div>
  )
}

export default PersonalData


// Добавить адрес: 
// patch /api/users
// {
// city: 'город'
// street: 'улица'
// home№: 'дом'
// homePart: 'корпус'
// flat: 'квартира'
// }

// изменить

// удалить
// {
// теже поля: пустое значение
// }