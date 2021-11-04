<<<<<<< HEAD

import {UserType} from '../../common/types/userTypes'
import {AppStoreType} from '../../redux/reducers/rootReducer'
import {useSelector} from 'react-redux'

const PersonalData = () => {
  const user =
    useSelector<AppStoreType, UserType>((state) => state.user)
   console.log(user.user)


  return (
    <div className='profile-block ml-md-auto'>
      <h2 className='profile-subtitle'>
        Личные данные
      </h2>
      <div className='info-block'>
        <div className='user-name'>Имя</div>
        <div className='second-name'>Фамилия</div>
        <div className='user-email'>Электронная почта</div>
        <div className='phone-number'>Телефон</div>
      </div>
      <button className='btn btn-outline-warning offset-md-10'>
        Изменить
      </button>


const PersonalData = () => (
  <div className='profile-block ml-md-auto'>
    <h2 className='profile-subtitle'>
      Личные данные
    </h2>
    <div className='info-block'>
      <div className='user-name'>Имя</div>
      <div className='second-name'>Фамилия</div>
      <div className='user-email'>Электронная почта</div>
      <div className='phone-number'>Телефон</div>
    </div>
    <button className='btn btn-outline-warning offset-md-10'>
      Изменить
    </button>
  </div>
)


export default PersonalData
