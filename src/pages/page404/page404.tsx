import React from 'react'
import {Link} from 'react-router-dom'


const Page404 = () => {
  return (
    <div>
      <img style={{
        display: 'block',
        width: '250px',
        height: '250px',
        objectFit: 'contain',
        margin: '0 auto'}}
      src='images/error.gif' alt='Error'/>
      <p style={{
        'textAlign': 'center',
        'fontWeight': 'bold',
        'fontSize': '24px',
        // eslint-disable-next-line react/no-unescaped-entities
        'marginTop': '30px'}}>Ooops!!!  Page doesn't exist
      </p>
      <Link style={{
        'display': 'block',
        'textAlign': 'center',
        'fontWeight': 'bold',
        'fontSize': '24px',
        'marginTop': '30px'}} to='/'>Back to main page
      </Link>
    </div>
  )
}

export default Page404
