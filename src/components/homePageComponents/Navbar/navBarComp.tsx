import React from 'react'

import {Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button} from 'react-bootstrap'
import {
  BrowserRouter,
  Link
} from 'react-router-dom'
import SwitchPager from '../../../utils/swich'
import Image from 'react-bootstrap/Image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBasket, faUserCircle} from '@fortawesome/free-solid-svg-icons'


const NavBarComponent = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar bg='dark' variant={'dark'} expand='lg'>
          <Image src='images/logo.png' alt='logo'
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
              <Button variant='outline-warning'
                className='mx-2'>Искать</Button>
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

{/* -------Так переход работает работает только первый раз------------ */}
                {/* <NavDropdown.Item >
                  <Nav.Link as={Link} to={'menu#/CatchWeeksMenu'}>Улов недели
                  </Nav.Link>  
                </NavDropdown.Item> 
                <NavDropdown.Item >
                  <Nav.Link as={Link} to={'menu#/BreakfastMenu'}>Завтраки
                  </Nav.Link>  
                </NavDropdown.Item> 
                <NavDropdown.Item >
                  <Nav.Link as={Link} to={'menu#/MainMenu'}>Основное меню
                  </Nav.Link>  
                </NavDropdown.Item> 
                <NavDropdown.Item >
                  <Nav.Link as={Link} to={'menu#/BarMenu'}>Меню бара
                  </Nav.Link>  
                </NavDropdown.Item>  */}
  {/* ---------------------------------------------------------- */}


{/* --------------Так работает только внутри самого меню--------------- */}
                <NavDropdown.Item href='menu#/BreakfastMenu'>Улов недели
                </NavDropdown.Item>
                <NavDropdown.Item href='menu#/BreakfastMenu'>Завтраки
                </NavDropdown.Item>
                <NavDropdown.Item href='menu#/MainMenu'>Основное меню
                </NavDropdown.Item>
                <NavDropdown.Item href='menu#/BarMenu'>Меню бара
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
    </BrowserRouter>
  )
}

export default NavBarComponent
