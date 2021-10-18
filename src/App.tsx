import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import './App.scss'
// eslint-disable-next-line max-len
import ContactsCard from './components/homePageComponents/ContactsCard/ContactsCard'
import NavBarComponent from './components/homePageComponents/Navbar/navBarComp'
import {Container} from 'react-bootstrap'
import SwitchPager from './utils/swich'
import MenuRoutes from './pages/Menu/MenuRoutes'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Footer from './components/homePageComponents/Footer/Footer'

// eslint-disable-next-line require-jsdoc
const App = () => {
  return (
    <Router>
      <ErrorBoundary >
        <div className='App'>
          <header className='App-header'>
            <NavBarComponent />
          </header>
          <main className='main'>
            <SwitchPager />
            <Container>
              <MenuRoutes />
            </Container>
          </main>
          <ContactsCard />
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  )
}

export default App
