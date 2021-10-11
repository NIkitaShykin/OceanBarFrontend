import React from 'react'
import { Button, Nav } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { BrowserRouter as Router, Link } from 'react-router-dom'


const OceanBarHeader = () => {
  return (
    <div className='OceanBarHeader'>
      <h1>
        OceanBar
        <Image
          src='seafood.png'
          alt='logo'
          className='mx-2'
          width={70}
          height={70}
        />
      </h1>
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
