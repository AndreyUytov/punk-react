import React from 'react'
import {
  NavLink,
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom'

function createPageArr (page) {
  if (page === 1 || page === 2) {
    return [1, 2, 3]
  } else return [page - 1, page, page + 1]
}

function createPageList (arr, url) {
  return arr.map((elem, i) => {
    return (
      <li>
        <NavLink to={`${url}/${elem}`} key={`${i}`} className='nav-list__link'
        activeClassName='nav-list__link--active'>
          {elem}
        </NavLink>
      </li>
    )
  })
}

function CatalogLinks (props) {
  let { path, url } = useRouteMatch()
  const pages = createPageArr(props.page)
  return (
    <>
    {createPageList(pages, url)}
    </>
  )
}

export default function Catalog (props) {
    return (
        <>
          <div className='home-page-wrapper'>
            <p>
              Это страница-каталог
            </p>
            <nav className='catalog-nav'>
              <ul className='layout-nav-list nav-list'>
                <CatalogLinks />    
              </ul>
            </nav>
          </div>
        </>
    )
}