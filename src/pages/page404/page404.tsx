/* eslint-disable max-len */
import React from 'react'
import {Link} from 'react-router-dom'


const Page404 = () => {
  return (
    <div>
      <img style={{
        display: 'block',
        width: '450px',
        height: '450px',
        objectFit: 'contain',
        margin: '0 auto'}}
      src='images/BalloonLost-big.png' alt='Error'/>
      <p style={{
        'textAlign': 'center',
        'fontWeight': 'bold',
        'fontSize': '24px',
        // eslint-disable-next-line react/no-unescaped-entities
        'marginTop': '30px'}}>This Page is Lost in the Wind
      </p>
      <p style={{
        'textAlign': 'center',
        'fontSize': '16px',
        // eslint-disable-next-line react/no-unescaped-entities
        'margin': '30px'}}
      >
      The child had looked so excited when the clown had presented a large red balloon. You had seen this, but in the throes of your morning commute you didn’t register it until it was too late. Who asked the government to support a fair right through Main Street during a week day anyway? Your bike barrelled right between the child and the clown and sent the balloon on its merry way. You didn’t turn back to see the damage you had done. Later you saw the balloon floating outside your office window.
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
