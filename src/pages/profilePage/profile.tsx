import {useEffect} from 'react'
import OrderHistory from '../../components/userProfile/orderHistory'
import DeliveryAdress from '../../components/userProfile/deliveryAdress'
import MyCreditCards from '../../components/userProfile/myCards'
import PasswordReset from '../../components/userProfile/passwordReset'
import PersonalData from '../../components/userProfile/personalData'
import {getUserPersonalDataTC} from '../../redux/reducers/userReducer'
import {useDispatch} from 'react-redux'


import './profile.scss'


const UserProfile = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getUserPersonalDataTC())
  }, [])


  return (
    <>
      <div className='container'>
        <div className='title-group'>
          <h1 className='profile-title'>
            Профиль
          </h1>
          <div className='profile-line'></div>
          <button className='btn-exit btn '>Выйти</button>
        </div>

        <div className='row justify-content-start'>
          <div className='col-8'>
            <PersonalData />
            <DeliveryAdress/>
            <PasswordReset/>
            <MyCreditCards/>
          </div>
          <div className='col-4'>
            <OrderHistory/>
          </div>
        </div>
      </div>
    </>
  )
}

export default UserProfile

