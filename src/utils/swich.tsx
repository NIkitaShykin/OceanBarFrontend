import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import CheckoutPage from '../pages/orderPage'
import MenuPage from '../pages/menuPage'
import BookingPage from '../pages/bookingPage'
// import LoginPage from '../pages/loginPage'
import SignUpPage from '../pages/signUpPage'
import HomePage from '../pages/homePage'


const SwitchPager = () => {
  return (
    <>
      <Switch>
        <Route exact path='/menu'>
          <MenuPage/>
        </Route>
        <Route exact path='/order'>
          <CheckoutPage />
        </Route>
        <Route exact path='/booking-table'>
          <BookingPage />
        </Route>
        <Route exact path='/signup'>
          <SignUpPage />
        </Route>
        {/* <Route exact path='/login'>
          <LoginPage />
        </Route> */}
        <Route path='/' exact render={() => <HomePage/>}/>
      </Switch>
    </>
  )
}

export default SwitchPager
