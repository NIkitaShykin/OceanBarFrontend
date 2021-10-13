import React from 'react'
import OceanBarHeader from '../components/homePageComponents/Header/Header'
import HowItWorks from '../components/homePageComponents/HowItWorks/HowItWorks'
import BookATable from '../components/homePageComponents/BookATable/BookATable'
import CatchWeeksMenu from '../pages/Menu/Assortment/CatchWeeksList'
// eslint-disable-next-line max-len
import MobileAppAd from '../components/homePageComponents/MobileAppAd/MobileAppAd'
// eslint-disable-next-line max-len
import ContactsCard from '../components/homePageComponents/ContactsCard/ContactsCard'
import Footer from '../components/homePageComponents/Footer/Footer'

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
      <MobileAppAd />
      <ContactsCard />
      <Footer />
    </div>
  )
}

export default Home