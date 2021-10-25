/* eslint-disable require-jsdoc */
import React from 'react'
import {NavDropdown} from 'react-bootstrap'

import './dropDown.scss'

class DropDownNavBar extends React.Component {
  state = {
    isAuthorized: true
  };

  // handleClick = () => {
  //   this.setState(({}) => ({
  //     isAuthorized: !isAuthorized
  //   }))
  // }

  render(): JSX.Element {
    const {isAuthorized} = this.state
    
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
            href='/login'>Выйти из профиля
          </NavDropdown.Item>
        </NavDropdown>
      </>
    )
  }
}

export default DropDownNavBar
