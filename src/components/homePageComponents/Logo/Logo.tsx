import React from 'react'
import {Image} from 'react-bootstrap'

const Logo = () => {
  return (
    <div className='logo'>
      <h1>
        OceanBar
        <Image
          src='images/logo.png'
          alt='logo'
          className='mx-2'
          width={70}
          height={70}
        />
      </h1>
    </div>
  )
}

export default Logo
