import React from 'react'
import OceanBarHeader from '../components/homePageComponents/Header/Header'
import HowItWorks from '../components/homePageComponents/HowItWorks/HowItWorks'
import BookATable from '../components/homePageComponents/BookATable/BookATable'
import ContactsCard from '../components/homePageComponents/ContactsCard/ContactsCard'
import Footer from '../components/homePageComponents/Footer/Footer'

const Home = () => {
  return (
    <div>
      <OceanBarHeader />
      <HowItWorks />
      <BookATable />
      <ContactsCard />
      <Footer />
    </div>
  )
}

export default Home
