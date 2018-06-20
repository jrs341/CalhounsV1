import React from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import {Home, PageNotFound} from 'pages'

// import { Client } from 'core'
export default (
  // {/*<Client>*/}
    // {/*<Modal />*/}
    <Switch>
      {/* HOME */}
      <Redirect exact from={'/'}
        to={'/home'} />
      <Route path={'/home'}
        component={Home}/>
        {/* INFO */}
       {/*404 NOT FOUND */}
      <Route component={PageNotFound}/>
    </Switch>
  // </Client>
)
