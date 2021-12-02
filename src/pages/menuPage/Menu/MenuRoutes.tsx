import React from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import PlatoList from './Assortment/PlatoList'
import SoupList from './Assortment/SoupList'
import SaladList from './Assortment/SaladList'
import OystersList from './Assortment/OystersList'
import DessertList from './Assortment/DessertList'
import Dish from '../Menu/Dishes/Dish'


export const PATH = {
  MENU: '/menu',
  PLATO: '/menu/plato',
  SOUP: '/menu/soup',
  SALAD: '/menu/salad',
  OYSTERS: '/menu/oysters',
  DESSERT: '/menu/dessert',
}

const MenuRoutes: React.FC = () => {
  return (
    <>
      <Switch>
        <Route
          path={PATH.MENU}
          exact
          render={() => <Redirect to={PATH.SOUP} />}
        />
        <Route path={PATH.PLATO} render={() => <PlatoList />} />
        <Route path={PATH.SOUP} render={() => <SoupList />} />
        <Route path={PATH.SALAD} render={() => <SaladList />} />
        <Route path={PATH.OYSTERS} render={() => <OystersList />} />
        <Route path={PATH.DESSERT} render={() => <DessertList />} />
        <Route
          path={'/dishes' + '/:token/:id1?'}
          exact
          render={() => <Dish />}
        />
      </Switch>
    </>
  )
}

export default MenuRoutes
