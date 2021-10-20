import React from 'react'

import {Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './navBar.scss'


const NavBarComponent: React.FC = () => {
  return (
    <div>
      <Navbar bg='dark' variant={'dark'}
        expand='xl' fixed='top' className='navbar-fixed'>
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
          <Nav
            className='d-flex justify-content-end
            mr-auto m-3 my-lg-0 navbar-nav-scroll'>
            <Form className='d-flex mx-6 d-flex-pos '>
              <FormControl
                type='search'
                placeholder='Search...'
                className='nav-input form-control-pad'
                aria-label='Search'
              />
              <Button variant='link'
                className=' btn-input'>
                <i className='fas fa-search icon-height search-icon'></i>
              </Button>
            </Form>
            <Nav.Link as={Link} to={'/cart'}
              className='nav-link-icon'>
              <i className='fas fa-shopping-basket icon-height'></i>
            </Nav.Link>
            <NavDropdown
              align={{lg: 'end'}}
              title={<i className='far fa-user icon-height'></i>}
              id='navbarScrollingDropdown'
            >
              <NavDropdown.Item
                href='/login'>Войти
              </NavDropdown.Item>
              <NavDropdown.Item
                href='/signup'>Зарегистрироваться
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default NavBarComponent
