import React from 'react'
import {
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'
import { connect } from 'react-redux'


import CatalogLinks from './../catalog/catalog-links'
import CatalogBeers from './../catalog/catalog-beers'

function Catalog (props) {
  let { path, url } = useRouteMatch()
    return (
        <>
          <div className='home-page-wrapper'>
            <p>
              Это страница-каталог
            </p>
            <nav className='catalog-nav'>
              <ul className='layout-nav-list nav-list'>
                <CatalogLinks {...props} url={url}/> 
              </ul>
            </nav>
            <Switch>
              <Route exact path={path}>
                выберите страницу {path}
              </Route>
              <Route path={`${path}/:pageNumber`}>
                <CatalogBeers path={path} {...props}/>
              </Route>
            </Switch>
          </div>
        </>
    )
}

const mapStateToProps = store => {
  const { selectedPage, beersByPage } = store
  const { isFetching, isFailure, beers } = beersByPage[selectedPage] || {isFetching: true, isFailure: false, beers:[]}
  return {
    selectedPage,
    beers,
    isFetching,
    isFailure
  }
}

export default connect (mapStateToProps)(Catalog)