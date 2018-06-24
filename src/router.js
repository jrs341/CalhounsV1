import React from 'react'
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom'

import {Contact, Home, PageNotFound} from 'pages'

//import { Client } from 'library'

//console.log('router client', Client)
export default (
	//<Client>
    // {/*<Modal />*/}
    <Switch>
      {/* HOME */}
      <Redirect exact from={'/'}
        to={'/home'} />
      <Route path={'/home'}
        component={Home}/>
        {/* INFO */}
       <Route path={'/contact'}
        component={Contact}/>
       {/*404 NOT FOUND */}
      <Route component={PageNotFound}/>
    </Switch>
 	//</Client>
)
