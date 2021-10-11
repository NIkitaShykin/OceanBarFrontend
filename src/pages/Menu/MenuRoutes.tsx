import React from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
import BarMenu from './Assortment/BarList'
import BreakfastMenu from './Assortment/BreakFastList'
import CatchWeeksMenu from './Assortment/CatchWeeksList'
import MainMenu from './Assortment/MainList'
import Dish from '../Menu/Dishes/Dish'

export const PATH = {
    BAR_MENU: '/BarMenu',
    BREAKFAST_MENU: '/BreakfastMenu',
    CATCHWEEK_MENU: '/CatchWeeksMenu',
    MAIN_MENU: '/MainMenu',
}

const  MenuRoutes : React.FC = ()  => {

    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.CATCHWEEK_MENU}/>}/>
                <Route path={PATH.BAR_MENU} exact render={() => <BarMenu/>}/>
                <Route path={PATH.BREAKFAST_MENU} exact render={() => <BreakfastMenu/>}/>
                <Route path={PATH.CATCHWEEK_MENU} exact render={() => <CatchWeeksMenu/>}/>
                <Route path={PATH.MAIN_MENU} exact render={() => <MainMenu/>}/>               
                <Route path={'/Menu/Dishes/Dish'+'/:token/:id1?'} exact render={() => <Dish/>}/>
            </Switch>
        </div>
    )
}

export default MenuRoutes
