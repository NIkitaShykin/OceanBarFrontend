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
import Cart from '../pages/cartPage/cartPage'
import Home from '../pages/homePage/homePage'


const SwitchPager = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route path='/menu'>
          <Menu/>
          {/* <Redirect to='/menu/soup' /> */}
        </Route>
        <Route path='/cart'>
          <Cart />
        </Route>
        <Route path='/booking-table'>
          <Booking />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='*'>
          <Page404 />
        </Route>
      </Switch>
    </div>
  )
}

export default SwitchPager
