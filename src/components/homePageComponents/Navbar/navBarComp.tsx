import React from 'react'

import {Navbar,
  Nav,
  Form,
  FormControl,
  Button} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingBasket, faUserCircle} from '@fortawesome/free-solid-svg-icons'


const NavBarComponent = () => {
  return (
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
          className='justify-content-start mr-2'>
          <Nav
            className='mr-auto m-3 my-lg-0'
            navbarScroll
          >
            <Nav.Link as={Link} to={'/menu'}>Меню
            </Nav.Link>
            <Nav.Link as={Link} to={'/order'}>Оформить заказ
            </Nav.Link>
            <Nav.Link as={Link} to={'/booking-table'}>Забронировать стол
            </Nav.Link>
          </Nav>
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
          <Nav.Link as={Link} to={'/cart'}>
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
  )
}

export default NavBarComponent
