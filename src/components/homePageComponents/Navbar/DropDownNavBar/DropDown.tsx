
import {useHistory} from 'react-router-dom'
import {NavDropdown} from 'react-bootstrap'

import {logOut} from '../../../../redux/actions'
import {useAppSelector, useAppDispatch} from '../../../../redux/hooks'

import './dropDown.scss'

const DropDownNavBar = () => {
  const history = useHistory()
  const dispatch = useAppDispatch()
  const isAuthorized = useAppSelector((state) => state.auth.isAuthorized)

  const handleClose = () => {
    dispatch(logOut())
    history.push('/')
  }

  return (
    <>
      <NavDropdown
        align={{lg: 'end'}}
        title={<i className='far fa-user icon-height'></i>}
        id='navbarScrollingDropdown'
        className={!isAuthorized ? 'nav-item dropdown' : 'authorized'}
      >
        <NavDropdown.Item
          href='/login'>Войти
        </NavDropdown.Item>
        <NavDropdown.Item
          href='/signup'>Зарегистрироваться
        </NavDropdown.Item>
      </NavDropdown>

      {/* for authorised user */}
      <NavDropdown
        align={{lg: 'end'}}
        title={<i className='far fa-user icon-height user-signedin'></i>}
        id='navbarScrollingDropdown'
        className={isAuthorized ? 'authorized change' : 'authorized'}
      >
        <NavDropdown.Item
          href='/profile'>Профиль
        </NavDropdown.Item>
        <NavDropdown.Item href='/' onClick={() => handleClose()}>
          Выйти из профиля
        </NavDropdown.Item>
      </NavDropdown>
    </>
  )
}

export default DropDownNavBar
