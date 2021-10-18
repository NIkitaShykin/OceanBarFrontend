import React from 'react'
import './App.scss'
import NavBarComponent from './components/homePageComponents/Navbar/navBarComp'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Footer from './components/homePageComponents/Footer/Footer'

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <ErrorBoundary>
      <div className='App'>
        <header className='App-header'>
          <NavBarComponent />
        </header>
        <main></main>
        <Footer />
      </div>
    </ErrorBoundary>
  )
}

export default App
