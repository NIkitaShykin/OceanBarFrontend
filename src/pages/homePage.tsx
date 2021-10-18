import React from 'react'

import OceanBarHeader from '../components/homePageComponents/Header/Header'
import HowItWorks from '../components/homePageComponents/HowItWorks/HowItWorks'
import BookATable from '../components/homePageComponents/BookATable/BookATable'
import Slider from '../components/homePageComponents/Slider/Slider'
// eslint-disable-next-line max-len
import ContactsCard from '../components/homePageComponents/ContactsCard/ContactsCard'

const HomePage = () => {
  return (
    <div>
      <OceanBarHeader />
      <HowItWorks />
      <BookATable />
      <Slider />
      <ContactsCard />
    </div>
  )
}

export default HomePage
