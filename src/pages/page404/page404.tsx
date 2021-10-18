/* eslint-disable max-len */
import React from 'react'
import {Link} from 'react-router-dom'
import './page404.scss'


const Page404: React.FC = () => {
  return (
    <div>
      <img
        className='error-img'
        src='images/BalloonLost-big.png' alt='Error'/>
      <p className='error-title'>This Page is Lost in the Wind</p>
      <p className='error-text'>
      The child had looked so excited when the clown had presented a large red balloon. You had seen this, but in the throes of your morning commute you didn’t register it until it was too late. Who asked the government to support a fair right through Main Street during a week day anyway? Your bike barrelled right between the child and the clown and sent the balloon on its merry way. You didn’t turn back to see the damage you had done. Later you saw the balloon floating outside your office window.
      </p>
      <Link className='home-link' to='/'>Back to main page
      </Link>
    </div>
  )
}

export default Page404
