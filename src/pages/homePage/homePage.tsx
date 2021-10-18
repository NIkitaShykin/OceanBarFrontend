import React from 'react'
import OceanBarHeader from '../../components/homePageComponents/Header/Header'
// eslint-disable-next-line max-len
import HowItWorks from '../../components/homePageComponents/HowItWorks/HowItWorks'
// eslint-disable-next-line max-len
import BookATable from '../../components/homePageComponents/BookATable/BookATable'
import Slider from '../../components/homePageComponents/Slider/Slider'

const Home = () => {
  return (
    <div>
      <OceanBarHeader />
      <HowItWorks />
      <BookATable />
      <Slider />
    </div>
  )
}

export default Home
