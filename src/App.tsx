import {useEffect} from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import {useDispatch} from 'react-redux'
import {ToastContainer} from 'react-toastify'

import ContactsCard from
  './components/homePageComponents/ContactsCard/ContactsCard'
import NavBarComponent from './components/homePageComponents/Navbar/navBarComp'
import SwitchPager from './utils/swich'
import MenuRoutes from './pages/menuPage/Menu/MenuRoutes'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Footer from './components/homePageComponents/Footer/Footer'
import {getDishesFromApiTC} from '../src/redux/reducers/dishesReducer'

import './App.scss'
import '!style-loader!css-loader!react-toastify/dist/ReactToastify.css'

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getDishesFromApiTC())
  }, [])

  return (
    <Router>
      <ErrorBoundary >
        <ToastContainer
          position='top-right'
          autoClose={2500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
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
