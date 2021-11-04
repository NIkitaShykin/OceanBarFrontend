
import {UserType} from '../../common/types/userTypes'
import {AppStoreType} from '../../redux/reducers/rootReducer'
import {useSelector} from 'react-redux'

const PersonalData = () => {
  const user =
    useSelector<AppStoreType, UserType>((state) => state.user)

  return (
    <div className='profile-block ml-md-auto'>
      <h2 className='profile-subtitle'>
        Личные данные
      </h2>
      <div className='info-block'>
        <div className='user-name'>Имя {user.user.name}</div>
        <div className='second-name'>Фамилия {user.user.secondname}</div>
        <div className='user-email'>Электронная почта {user.user.email}</div>
        <div className='phone-number'>Телефон {user.user.name}</div>
      </div>
      <button className='btn btn-outline-warning offset-md-10'>
        Изменить
      </button>
    </div>
  )
}

export default PersonalData
