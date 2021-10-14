import React from 'react'
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Checkout from '../pages/orderPage/orderPage'
import Menu from '../pages/menuPage/menuPage'
import Booking from '../pages/bookingPage/bookingPage'
import Login from '../pages/loginPage/loginPage'
import Home from '../pages/homePage/homePage'
import Page404 from '../pages/page404/page404'


const SwitchPager = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/menu'>
          <Menu/>
        </Route>
        <Route exact path='/order'>
          <Checkout />
        </Route>
        <Route exact path='/booking-table'>
          <Booking />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        <Route path='*'>
          <Page404 />
        </Route>
        <Redirect to='*' />
      </Switch>
      {/* <Route path='*'>
          <Page404 />
        </Route> */}
    </div>
  )
}

export default SwitchPager
