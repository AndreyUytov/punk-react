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
import Filter from './catalog-filters'
import {getAllBeers} from './../../selectors'

function Catalog (props) {
  let { path, url } = useRouteMatch()
    return (
        <div className='catalog-block-page'>
          <div className='catalog-filters'>
            <Filter />
          </div>
          <div className='catalog-beers-wrapper'>
            <Switch>
              <Route exact path={path}>
                <Redirect to={`${url}/${props.selectedPage}`} />
              </Route>
              <Route path={`${path}/:pageNumber`}>
                <CatalogBeers path={path} {...props}/>
              </Route>
            </Switch>
            {props.isFetching === false ? (<CatalogLinks {...props} url={url}/>) : ''}
          </div>
        </div>
    )
}

const mapStateToProps = store => {
  const { selectedPage, beersByPage, basket } = store
  const { isFetching, isFailure, beersId} = beersByPage[selectedPage] || {isFetching: true, isFailure: false, beersId:[]}
  return {
    selectedPage,
    beers: getAllBeers(beersId, store),
    isFetching,
    isFailure,
    basket
  }
}

export default connect (mapStateToProps)(Catalog)