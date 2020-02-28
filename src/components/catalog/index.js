import React, {useState, useEffect} from 'react'
import {
  NavLink,
  Switch,
  Route,
  useRouteMatch,
  useParams
} from 'react-router-dom'
import { connect } from 'react-redux'

import {selectPage, fetchBeersIfNeeded} from './../../actions'

function createPageArr (page) {
  page = +page
  if (page <= 2) {
    return [1, 2, 3]
  } else return [page - 1, page, page + 1]
}

function createPageList (arr, url) {
  return arr.map((elem, i) => {
    return (
      <li key={`${i}`}>
        <NavLink to={`${url}/${elem}`} className='nav-list__link'
        activeClassName='nav-list__link--active'>
          {elem}
        </NavLink>
      </li>
    )
  })
}

function NavButton ({pages, setPages, prevOrNextToggle}) {
  if (prevOrNextToggle === 'prev') {
    return (
      <button className='navBtn'
       type='button' disabled = {pages[0] === 1 ? true : false}
       onClick = {() => setPages(pages.map( elem => elem - 1))}>
        Prev
      </button>
    )
  } else {
    return (
      <button className='navBtn'
        type='button'
        onClick = {() => setPages(pages.map( elem => elem + 1))}>
          Next
      </button>
    )
  }
}

function CatalogLinks (props) {
  const [pages, setPages] = useState(createPageArr(props.selectedPage))

  return (
    <>
    <NavButton pages={pages} setPages = {setPages} prevOrNextToggle='prev' />
    {createPageList(pages, props.url)}
    <NavButton pages={pages} setPages = {setPages} />
    </>
  )
}

function BeersList ({beers}){
  return beers.map((elem,i) => {
    return (
      <li key ={i}>
        <h3>{elem.name}</h3>
      </li>
    )
  })
}

function CatalogBeers (props) {
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