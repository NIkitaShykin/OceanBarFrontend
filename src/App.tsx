import React from 'react'
import './App.scss'
import NavBarComponent from './components/homePageComponents/Navbar/navBarComp'


const App = () => {
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
