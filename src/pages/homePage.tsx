import React from 'react'
import OceanBarHeader from '../components/homePageComponents/Header/Header'
import HowItWorks from '../components/homePageComponents/HowItWorks/HowItWorks'
import BookATable from '../components/homePageComponents/BookATable/BookATable'
// eslint-disable-next-line max-len
import ContactsCard from '../components/homePageComponents/ContactsCard/ContactsCard'
import Footer from '../components/homePageComponents/Footer/Footer'

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
      <ContactsCard />
      <Footer />
    </div>
  )
}

export default Home
