import React from 'react'
import './App.scss'
import NavBarComponent from './components/homePageComponents/Navbar/navBarComp'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'

// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <ErrorBoundary>
      <div className='App'>
        <header className='App-header'>
          <NavBarComponent />
        </header>
        <main></main>
      </div>
    </ErrorBoundary>
  )
}

export default App
