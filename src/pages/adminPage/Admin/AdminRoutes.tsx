import React from 'react'
import {Switch, Route} from 'react-router-dom'
import DeleteDishes from './deleteDish/deleteDish'
import NewDish from './addDish/addDish'
import OrderedTables from './tables/Tables'
import Orders from './orders/Orders'


const AdminRoutes: React.FC = () => {
  return (
    <div>
      <Switch>
        <Route path={'/admin/dishes/delete'} render={() => <DeleteDishes />} />
        <Route path={'/admin/dishes/new'} render={() => <NewDish />} />
        <Route path={'/admin/tables'} render={() => <OrderedTables />} />
        <Route path={'/admin/orders'} render={() => <Orders />} />
      </Switch>
    </div>
  )
}

export default AdminRoutes
