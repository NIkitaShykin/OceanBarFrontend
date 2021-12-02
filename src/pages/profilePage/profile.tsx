import {useHistory} from 'react-router-dom'
import Cookies from 'js-cookie'
import {useAppDispatch} from '../../redux/hooks'
import {logOut} from '../../redux/actions'
import OrderHistory from '../../components/userProfile/orderHistory'
import DeliveryAdress from '../../components/userProfile/deliveryAdress'
import MyCreditCards from '../../components/userProfile/myCards'
import PasswordReset from '../../components/userProfile/passwordReset'
import PersonalData from '../../components/userProfile/personalData'
import './profile.scss'

const UserProfile = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()


  const handleClose = () => {
    Cookies.remove('token')
    Cookies.remove('refreshToken') //
    // localStorage.removeItem('token')
    dispatch(logOut())
    history.push('/')
  }


  return (
    <>
      <div className='container-md'>
        <div className='title-group'>
          <h1 className='profile-title'>
            Профиль
          </h1>
          <div className='profile-line'/>
          <button className='btn-exit btn' onClick={handleClose}>Выйти</button>
        </div>

        <div className='row justify-content-start'>
          <div className='col-lg-6'>
            <PersonalData />
            <DeliveryAdress/>
            <PasswordReset/>
            <MyCreditCards/>
          </div>
          <div className='col-lg-6 profile-block history ml-md-auto'>
            <OrderHistory/>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile

