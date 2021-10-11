import React from 'react'

import {Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button} from 'react-bootstrap'
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom'
import SwitchPager from '../../utils/swich'
import Image from 'react-bootstrap/Image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBasket, faUserCircle} from '@fortawesome/free-solid-svg-icons'
// import logo from '../../../resources/img/seafood.png'

const NavBarComponent = () => {
  return (
    <Router>
      <div>
        <Navbar bg='dark' variant={'dark'} expand='lg'>
          <Image src='seafood.png' alt='logo'
            className='mx-2'
            width={50}
            height={50}/>
          <Navbar.Brand href='/'>Ocean Bar</Navbar.Brand>
          <Navbar.Toggle aria-controls='navbarScroll' />
          <Navbar.Collapse
            id='navbarScroll'
            className='justify-content-end mr-2'>
            <Form className='d-flex mx-5'>
              <FormControl
                type='search'
                placeholder='Искать блюдо...'
                className='mr-2'
                aria-label='Search'
              />
              <Button variant='outline-success'>Искать</Button>
            </Form>
            <Nav
              className='mr-auto m-3 my-lg-0'
              navbarScroll
            >
              <Nav.Link as={Link} to={'/booking-table'}>Забронировать стол
              </Nav.Link>
              <Nav.Link as={Link} to={'/order'}>Оформить заказ
              </Nav.Link>
              <NavDropdown
                title='Меню'
                id='navbarScrollingDropdown'
              >
                <NavDropdown.Item href='/breakfast-menu'>Завтраки
                </NavDropdown.Item>
                <NavDropdown.Item href='/main-menu'>Основное меню
                </NavDropdown.Item>
                <NavDropdown.Item href='/bar-menu'>Меню бара
                </NavDropdown.Item>
                <NavDropdown.Item href='/hot-menu'>Улов недели
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Link as={Link} to={'/order'}>
              <FontAwesomeIcon
                icon={faShoppingBasket}
                className='mr-auto m-3 my-lg-0'
                size='2x'
                color='white'/>
            </Nav.Link>
            <Nav.Link as={Link} to={'/login'}>
              <FontAwesomeIcon
                icon={faUserCircle}
                className='mr-auto m-3 my-lg-0'
                size='2x'
                color='white'/>
            </Nav.Link>

          </Navbar.Collapse>
        </Navbar>
      </div>
      <SwitchPager />
    </Router>
  )
}

export default NavBarComponent
