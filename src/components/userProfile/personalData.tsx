import {useState} from 'react'
import ShiftingPersonalForm from './personalData/shiftingPersonalForm'

import CompletedPersonal from
  './personalData/completedPersonal'


const PersonalData = () => {
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
        <ShiftingPersonalForm changeStatus={changeStatus}/> }

    </div>
  )
}

export default PersonalData
