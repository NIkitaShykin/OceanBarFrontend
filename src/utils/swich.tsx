import {
  Switch,
  Route,
} from 'react-router-dom'

import Menu from '../pages/menuPage/menuPage'
import Admin from '../pages/adminPage/adminPage'
import Booking from '../pages/bookingPage/bookingPage'
import Login from '../pages/loginPage/loginPage'
import Page404 from '../pages/page404/page404'
import UserCart from '../pages/cartPage/cartPage'
import Home from '../pages/homePage/homePage'
import SignUp from '../pages/signupPage/signupPage'
import SignUpSucess from '../pages/signupSucessPage/signupSucessPage'
import UserProfile from '../pages/profilePage/profile'
import Confirmation from '../pages/confirmationPage/confirmationPage'
import CheckPasword from '../../src/pages/adminPage/Admin/CheckPassword'


const SwitchPager = () => (
  <>
    <Switch>
      <Route exact path='/'>
        <Home/>
      </Route>

      <Route path='/menu'>
        <Menu/>
      </Route>

      <Route exact path='/admin'>
        <CheckPasword/>
      </Route>
      <Route path='/admin'>
        <Admin/>
      </Route>

      <Route path='/cart'>
        <UserCart />
      </Route>

      <Route path='/booking-table'>
        <Booking />
      </Route>

      <Route path='/login'>
        <Login />
      </Route>

      <Route path='/signup-success'>
        <SignUpSucess />
      </Route>
      <Route path='/signup'>
        <SignUp />
      </Route>

      <Route path='/profile'>
        <UserProfile />
      </Route>

      <Route path='/dishes'>
      </Route>

      <Route path='/cart'>
      </Route>

      <Route path='/confirmation'>
        <Confirmation />
      </Route>

      <Route path='*'>
        <Page404 />
      </Route>
    </Switch>
  </>
)


export default SwitchPager
