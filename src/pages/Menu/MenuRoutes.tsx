import React from 'react'
import {Switch, Route} from 'react-router-dom'
import BarMenu from './Assortment/BarList'
import BreakfastMenu from './Assortment/BreakFastList'
import CatchWeeksMenu from './Assortment/CatchWeeksList'
import MainMenu from './Assortment/MainList'
import Dish from '../Menu/Dishes/Dish'

export const PATH = {
    BAR_MENU: '/Menu/BarMenu',
    BREAKFAST_MENU: '/Menu/BreakfastMenu',
    CATCHWEEK_MENU: '/Menu/CatchWeeksMenu',
    MAIN_MENU: '/Menu/MainMenu',
}

const  MenuRoutes : React.FC = ()  => {

    return (
        <div>
            <Switch>
                <Route path={PATH.BAR_MENU} exact render={() => <BarMenu/>}/>
                <Route path={PATH.BREAKFAST_MENU} exact render={() => <BreakfastMenu/>}/>
                <Route path={PATH.CATCHWEEK_MENU} exact render={() => <CatchWeeksMenu/>}/>
                <Route path={PATH.MAIN_MENU} exact render={() => <MainMenu/>}/>  
                
                {/* <Route path={'/Menu/Dishes/TestPage'+'/:token/:id1?'} exact render={() => <TestPage/>}/> */}
                <Route path={'/Menu/Dishes/Dish'+'/:token/:id1?'} exact render={() => <Dish/>}/>
               
                {/* <Route path={'/TestPage' + '/:token/:id1/:id2?'} exact render={() => <TestPage/>}/> */}

            </Switch>
        </div>
    )
}

export default MenuRoutes
