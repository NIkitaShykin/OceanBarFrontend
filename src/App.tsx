import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.scss'
// eslint-disable-next-line max-len
import ContactsCard from './components/homePageComponents/ContactsCard/ContactsCard'
import Footer from './components/homePageComponents/Footer/Footer'
import NavBarComponent from './components/homePageComponents/Navbar/navBarComp'
import {Container} from 'react-bootstrap'
import SwitchPager from './utils/swich'
import MenuRoutes from './pages/Menu/MenuRoutes'


// eslint-disable-next-line require-jsdoc
const App = () => {
  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <NavBarComponent />
        </header>
        <main>
          <SwitchPager />
          <Container>
            <MenuRoutes />
          </Container>
        </main>
        <ContactsCard />
        <Footer />
      </div>
    </Router>
  )
}

export default App
