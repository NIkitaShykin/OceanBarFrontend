import React from 'react'
import './App.scss'
import NavBarComponent from './components/homePageComponents/navBarComp'


// eslint-disable-next-line require-jsdoc
function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBarComponent />
      </header>
      <main></main>
    </div>
  )
}

export default App
