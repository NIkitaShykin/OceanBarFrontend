import React from 'react'
import {
  // Redirect,
  Switch, Route} from 'react-router-dom'
import AllDishes from './adminDishes/AdminDishes'


const AdminRoutes: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path={'/admin/dishes'} render={() => <AllDishes />} />
      </Switch>
    </div>
  )
}

export default AdminRoutes
