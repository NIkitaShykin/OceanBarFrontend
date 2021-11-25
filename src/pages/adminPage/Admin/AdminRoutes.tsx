import React from 'react'
import {
  // Redirect,
  Switch, Route} from 'react-router-dom'
import AllDishes from './deleteDish/deleteDish'
import NewDish from './addDish/addDish'


const AdminRoutes: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path={'/admin/dishes/delete'} render={() => <AllDishes />} />
        <Route path={'/admin/dishes/new'} render={() => <NewDish />} />
        <Route path={'/admin/tables'} render={() => <AllDishes />} />
        <Route path={'/admin/orders'} render={() => <AllDishes />} />
      </Switch>
    </div>
  )
}

export default AdminRoutes
