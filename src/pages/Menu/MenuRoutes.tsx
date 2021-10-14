import React from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import PlatoList from './Assortment/PlatoList'
import SoupList from './Assortment/SoupList'
import SaladList from './Assortment/SaladList'
import OystersList from './Assortment/OystersList'
import DessertList from './Assortment/DessertList'
import Dish from '../Menu/Dishes/Dish'

export const PATH = {
    PLATO: '/plato',
    SOUP: '/soup',
    SALAD: '/salad',
    OYSTERS: '/oysters',
    DESSERT: '/dessert'
}

const  MenuRoutes : React.FC = ()  => {

    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.SOUP}/>}/>
                <Route path={PATH.PLATO} exact render={() => <PlatoList/>}/>
                <Route path={PATH.SOUP} exact render={() => <SoupList/>}/>
                <Route path={PATH.SALAD} exact render={() => <SaladList/>}/>
                <Route path={PATH.OYSTERS} exact render={() => <OystersList/>}/>               
                <Route path={PATH.DESSERT} exact render={() => <DessertList/>}/>               
                <Route path={'/Menu/Dishes/Dish'+'/:token/:id1?'} exact render={() => <Dish/>}/>
            </Switch>
        </div>
    )
}

export default MenuRoutes
