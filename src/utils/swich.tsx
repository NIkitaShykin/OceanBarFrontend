import React from 'react'
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

import Menu from '../pages/menuPage/menuPage'
import Booking from '../pages/bookingPage/bookingPage'
import Login from '../pages/loginPage/loginPage'
import Page404 from '../pages/page404/page404'
import Checkout from '../pages/orderPage/orderPage'
import Cart from '../pages/cartPage/cartPage'
import Home from '../pages/homePage/homePage'


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
        <Route exact path='/cart'>
          <Cart />
        </Route>
        <Route exact path='/booking-table'>
          <Booking />
        </Route>
        <Route exact path='/login'>
          <Login />
        </Route>
        {/* <Route path='/404'>
          <Page404 />
        </Route>
        <Redirect to='/404' /> */}
      </Switch>
      {/* <Route path='*'>
          <Page404 />
        </Route> */}
    </div>
  )
}

export default SwitchPager
