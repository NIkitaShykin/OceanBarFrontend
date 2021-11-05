import React from 'react'
import {
  Navbar,
  Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

import DropDownNavBar from './DropDownNavBar/DropDown'
import SearchField from './Search/Search'

import './navBar.scss'


const NavBarComponent: React.FC = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand='xxl'
        bg='dark'
        variant='dark'
        fixed='top'
        className='navbar-fixed'
      >
        <Navbar.Brand
          href='/'
          className='navbar-brand-mr'>Ocean Bar
        </Navbar.Brand>

        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse
          id='responsive-navbar-nav'
          className='justify-content-between mr-2'
        >
          <Nav
            className='mr-auto m-3 my-lg-0'
            navbarScroll
          >
            <Nav.Link
              as={Link}
              to={'/menu'}
              className='nav-link-mr'
            >Меню
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={'/booking-table'}
              className='nav-link-mr'
            >Забронировать стол
            </Nav.Link>
          </Nav>

          <Nav
            className='d-flex justify-content-end
            mr-auto m-3 my-lg-0 navbar-nav-scroll'
          >
            <SearchField />

            <Nav.Link as={Link} to={'/cart'}
              className='nav-link-icon'
            >
              <i className='fas fa-shopping-basket icon-height'></i>
            </Nav.Link>

            <DropDownNavBar/>

          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </>
  )
}

export default NavBarComponent
