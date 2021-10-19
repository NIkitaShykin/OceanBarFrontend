import React from 'react'
import {Redirect, Switch, Route} from 'react-router-dom'
// import BarMenu from '../../../pages/Menu/Assortment/SoupList'
// import BreakfastMenu from '../../../pages/Menu/Assortment/PlatoList'
// import CatchWeeksMenu from '../../../pages/Menu/Assortment/SaladList'
// import MainMenu from '../../../pages/Menu/Assortment/OystersList'

// import { PATH } from 'src/pages/Menu/MenuRoutes'



const  MenuRoutes : React.FC = ()  => {

    return (
        <div>
            <Switch>
                {/* <Route path={PATH.BAR_MENU} exact render={() => <BarMenu/>}/>
                <Route path={PATH.BREAKFAST_MENU} exact render={() => <BreakfastMenu/>}/>
                <Route path={PATH.CATCHWEEK_MENU} exact render={() => <CatchWeeksMenu/>}/>
                <Route path={PATH.MAIN_MENU} exact render={() => <MainMenu/>}/>                */}
            </Switch>
        </div>
    )
}

export default MenuRoutes
