/* eslint-disable require-jsdoc */
import React from 'react'
import {NavDropdown} from 'react-bootstrap'

import {useAppSelector} from '../../../../redux/hooks'

import './dropDown.scss'

const DropDownNavBar = () => {
  const isAuthorized = useAppSelector((state) => state.auth.isAuthorized)

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
        // onClick={this.handleClick}
        // className='authorized'
        className={isAuthorized ? 'authorized change' : 'authorized'}
      >
        <NavDropdown.Item
          href='/profile'>Профиль
        </NavDropdown.Item>
        <NavDropdown.Item
          href='/'>Выйти из профиля
        </NavDropdown.Item>
      </NavDropdown>
    </>
  )
}

export default DropDownNavBar
