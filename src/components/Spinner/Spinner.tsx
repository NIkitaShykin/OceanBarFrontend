/* eslint-disable max-len */
import React from 'react'
import './Spinner.scss'

const Spinner = () => {
  return (
    <>
      <div className='spinner-layout'>
        <img src='images/Spinner200px.svg'
          className='spinner-img'
          alt='Loading'>
        </img>
      </div>
    </>
  )
}

export default Spinner
