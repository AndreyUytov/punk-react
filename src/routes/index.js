import React from 'react'
import {
    Switch,
    Route
} from 'react-router-dom'

import Layout from './../components/layout'
import Home from './../components/home'
import Catalog from './../components/catalog'
import Basket from './../components/basket'

const routes = (
    <Switch>
      <Layout>
        <Route exact path = '/'>
          <Home />
        </Route>
        <Route path = '/catalog'>
          <Catalog />
        </Route>
        <Route path = '/basket'>
          <Basket />
        </Route>
      </Layout>
    </Switch>
)

export default routes