import React from 'react'
import {BrowserRouter as Router, Link} from 'react-router-dom'
import {Button, Nav} from 'react-bootstrap'

import Logo from '../Logo/Logo'

const OceanBarHeader = () => {
  return (
    <div className='OceanBarHeader'>
      <Logo />
      <h5>Вкусно. Быстро. Качественно</h5>
      <Nav.Link as={Link} to={'/menu'}>
        <Button className='menu-btn' variant='secondary'>
          <span className='menu-text-main-page'>Меню</span>
        </Button>
      </Nav.Link>
    </div>
  )
}

export default OceanBarHeader
