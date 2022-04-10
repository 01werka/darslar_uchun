import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'
import Test12 from './Test12'



function Routs() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/birinchi"> <Page1 /> </Route>
                    <Route path="/ikkinchi"> <Page2 /> </Route>
                    <Route path="/uchinchi"> <Page3 /> </Route>
                    <Route  path="/"> <Test12 />  </Route>

                </Switch>
            </BrowserRouter>

        </div>
    )
}

export default Routs
