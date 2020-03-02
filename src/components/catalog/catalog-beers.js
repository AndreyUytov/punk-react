import React, {useEffect} from 'react'
import {
  Switch,
  Route,
  useParams
} from 'react-router-dom'
import PropTypes from 'prop-types'

import {selectPage, fetchBeersIfNeeded} from './../../actions'

function BeersList ({beers}){
  return beers.map((elem,i) => {
    return (
      <li key ={i}>
        <h3>{elem.name}</h3>
      </li>
    )
  })
}
  
export default function CatalogBeers (props) {
  const {path, selectedPage, dispatch, beers, isFetching, isFailure} = props
  let {pageNumber} = useParams()
  pageNumber = +pageNumber
  useEffect(() => {
    dispatch(fetchBeersIfNeeded(pageNumber))
    if (pageNumber !== selectedPage) {
      dispatch(selectPage(pageNumber))
    }
  }, [pageNumber, selectedPage, dispatch])

  function renderBeerList () {
    if (isFetching && beers.length === 0) {
      return (
        <h2>...Loading</h2>
      )
    } else if (isFailure) {
      return (
        <h2>Something wrong!</h2>
      )
    } else {
      return (
        <BeersList {...props}/>
      )
    }
  }

  return (
    <Switch>
      <Route path={`${path}/:pageNumber`}>
        <ul>
          {renderBeerList()}
        </ul>
      </Route>
    </Switch>
  )
}

CatalogBeers.propTypes = {
  path: PropTypes.string.isRequired, 
  selectedPage: PropTypes.number.isRequired, 
  dispatch: PropTypes.func.isRequired, 
  beers: PropTypes.array.isRequired, 
  isFetching: PropTypes.bool.isRequired, 
  isFailure: PropTypes.bool.isRequired
}