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
        <Route path='/' exact render={() => <Home/>}/>
      </Switch>
    </div>
  )
}

export default SwitchPager
