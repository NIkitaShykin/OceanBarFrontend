import React from 'react'
import OceanBarHeader from '../components/homePageComponents/Header'
import HowItWorks from '../components/homePageComponents/HowItWorks'
import BookATable from '../components/homePageComponents/BookATable'
import ContactsCard from '../components/homePageComponents/ContactsCard'
import Footer from '../components/homePageComponents/Footer'

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
