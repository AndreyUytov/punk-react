import React, {useState} from 'react'
import {
  NavLink,
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'
import { connect } from 'react-redux'

function createPageArr (page) {
  page = +page
  if (page === 1 || page === 2) {
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

function NavButton (pages, setPages, prevOrNextToggle) {
  if (prevOrNextToggle === 'prev') {
    return (
      <button className='navBtn' type='button' disabled = {pages[0] <=2 ? true : false} onClick = {() => setPages(pages.map( elem => elem - 1)}}>
        Prev
      </button>
    )
  }
}

function CatalogLinks (props) {
  let { path, url } = useRouteMatch()
  const [pages, setPages] = useState(createPageArr(props.page))

  return (
    <>
    {createPageList(pages, url)}
    </>
  )
}

function Catalog (props) {
    return (
        <>
          <div className='home-page-wrapper'>
            <p>
              Это страница-каталог
            </p>
            <nav className='catalog-nav'>
              <ul className='layout-nav-list nav-list'>
                <CatalogLinks {...props}/>    
              </ul>
            </nav>
          </div>
        </>
    )
}

const mapStateToProps = store => ({
  page: store.selectedPage

})

export default connect (mapStateToProps)(Catalog)