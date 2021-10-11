import React from 'react'
import {
  Switch,
  Route,
} from 'react-router-dom'
import Checkout from '../pages/orderPage'
import Menu from '../pages/menuPage'
import Booking from '../pages/bookingPage'
import Login from '../pages/loginPage'
import Home from '../pages/homePage'

const SwitchPager = () => {
  return (
    <div>
      <Switch>

      <Route path='/' exact render={() => <Home/>}/>
        <Route path='/menu'>
          <Menu/>
        </Route>
        <Route path='/order'>
          <Checkout />
        </Route>
        <Route path='/booking-table'>
          <Booking />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </div>
  )
}

export default SwitchPager
