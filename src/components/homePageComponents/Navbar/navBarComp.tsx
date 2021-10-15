import React from 'react'

import {Navbar,
  Nav,
  Form,
  FormControl,
  Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBasket,
  faUser,
  faSearch} from '@fortawesome/free-solid-svg-icons'
import './navBar.scss'


const NavBarComponent = () => {
  return (
    <div>
      <Navbar bg='dark' variant={'dark'} expand='lg'>
        <Navbar.Brand
          href='/'
          className='navbar-brand-mr'>Ocean Bar
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse

          id='navbarScroll'
          className='justify-content-between mr-2'>
          <Nav
            className='mr-auto m-3 my-lg-0'
            navbarScroll
          >
            <Nav.Link
              as={Link}
              to={'/menu'}
              className='nav-link-mr'>Меню
            </Nav.Link>
            <Nav.Link
              as={Link}
              to={'/booking-table'}
              className='nav-link-mr'>Забронировать стол
            </Nav.Link>
          </Nav>
          <div
            className='d-flex justify-content-end'>
            <Form className='d-flex mx-6'>
              <FormControl
                type='search'
                placeholder='Search...'
                className='mx-2'
                aria-label='Search'
              />
              <Button variant='link'
                className='mx-2'>
                <FontAwesomeIcon
                  icon={faSearch}
                  className='far fa-search svg-inline--fa 
                   fa-w-18-24'
                  color='white'/>
              </Button>
            </Form>
            <Nav.Link as={Link} to={'/cart'}
              className='nav-link-icon'>
              <FontAwesomeIcon
                icon={faShoppingBasket}
                className='fas fa-shopping-basket mr-auto
                 m-3 my-lg-0 icon-height
               svg-inline--fa fa-w-18-24'
                color='white'/>
            </Nav.Link>
            <Nav.Link as={Link} to={'/login'}
              className='nav-link-icon'>
              <FontAwesomeIcon
                icon={faUser}
                className='far fa-user mr-auto m-3 my-lg-0 icon-height
              svg-inline--fa fa-w-18-24'
                color='white'/>
            </Nav.Link>
          </div>

        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBarComponent
