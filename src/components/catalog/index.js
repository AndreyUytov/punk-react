import React from 'react'
import {
  Switch,
  Route,
  useRouteMatch,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'


import CatalogLinks from './../catalog/catalog-links'
import CatalogBeers from './../catalog/catalog-beers'
import {getBeers} from './../../selectors'

function Catalog (props) {
  let { path, url } = useRouteMatch()
  props.beers.forEach(element => {
    console.log(element.name)
  });
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
                <Redirect to={`${url}/${props.selectedPage}`} />
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
  const { isFetching, isFailure} = beersByPage[selectedPage] || {isFetching: true, isFailure: false}
  return {
    selectedPage,
    beers: getBeers(store, selectedPage) || [],
    isFetching,
    isFailure
  }
}

export default connect (mapStateToProps)(Catalog)