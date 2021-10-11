import React from 'react'
import OceanBarHeader from '../components/homePageComponents/Header'
import HowItWorks from '../components/homePageComponents/HowItWorks'
import BookATable from '../components/homePageComponents/BookATable'

import CatchWeeksMenu from '../pages/Menu/Assortment/CatchWeeksList'

const Home = () => {
  return (
    <div>
      <OceanBarHeader />
      <HowItWorks />
      <BookATable />

      {/* -----temporaryLayout----------------------------- */}
      <div className='temporaryLayout'>
        <br/>
        <h2> Меню </h2>
        <CatchWeeksMenu />
      </div>
      {/* ------end of temporary layout--------------------- */}

    </div>
  )
}

export default Home
