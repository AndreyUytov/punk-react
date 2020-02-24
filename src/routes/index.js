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
        <Route exact path = '/'>
            <Layout>
                <Home />
            </Layout>
        </Route>
        <Route path = '/catalog'>
            <Layout>
                <Catalog />
            </Layout>
        </Route>
        <Route path = '/basket'>
            <Layout>
                <Basket />
            </Layout>
        </Route>
    </Switch>
)

export default routes