import React from 'react'
import {Route, Switch} from 'react-router-dom'
import AllDishes from './deleteDish/deleteDish'
import NewDish from './addDish/addDish'
import OrderedTables from './tables/Tables'
import Orders from './orders/Orders'

const AdminRoutes: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path={'/admin/dishes/delete'} render={() => <AllDishes />} />
        <Route path={'/admin/dishes/new'} render={() => <NewDish />} />
        <Route path={'/admin/bookings'} render={() => <OrderedTables />} />
        <Route path={'/admin/orders'} render={() => <Orders />} />
      </Switch>
    </div>
  )
}

export default AdminRoutes
