
// import {Form} from 'react-bootstrap'
import PasswordResetFrorm from './passwordReset/passwordResetForm'


const PasswordReset = () => {
  return (
    <div className='profile-block ml-md-auto'>
      <h2>
        Изменение пароля
      </h2>
      <div className='info-block'>
        <PasswordResetFrorm/>
      </div>
    </div>
  )
}

export default PasswordReset
